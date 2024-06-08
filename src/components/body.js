
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredlistOfRestaurant, setFilteredListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() =>{
        fetchData()
    },[]);

    const fetchData = async () => {
            
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    if(listOfRestaurant.length === 0){
            return <Shimmer/>}
    return (
        <div className="body">
            <div className="search">
                <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e) =>{
                    setSearchText(e.target.value);
                }}/>
                <button className="search-btn" onClick={() => {
                    const filteredList = searchText ? listOfRestaurant.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    ) : listOfRestaurant;
                    
                    setFilteredListOfRestaurant(filteredList)
                }}>
                    Search
                </button>
            </div>
            <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating >4
                    );
                    setFilteredListOfRestaurant(filteredList);
                }}>
                Top Rated Restaurant
            </button>
            <div className="res-container">{
                filteredlistOfRestaurant.map(restuarant =>(
                    <Link key={restuarant.info.id} to={"/restaurant/"+restuarant.info.id}><RestaurantCard  resdata={restuarant} /></Link>
                ))}
            </div>
        </div>
    )
}
export default Body;

import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    useEffect(() =>{
        fetchData()
    },[]);
    const fetchData = async () => {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            
            setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <button className="fiter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating >4
                    );
                    setListOfRestaurant(filteredList);
                }}>
                Top Rated Restaurant
            </button>
            <div className="res-container">{
                listOfRestaurant.map(restuarant =>(
                    <RestaurantCard key={restuarant.info.id} resdata={restuarant} />
                ))}
            </div>
        </div>
    )
}
export default Body;
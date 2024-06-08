import { useEffect, useState } from "react";
import {useParams }from "react-router-dom"
import { MENU_API_URL } from "../utils/constants";
//719437
const RestaurantMenu =()=>{
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect( ()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        setResInfo(json.data)
        
    }
    if(resInfo === null){
        return <h1>Loading </h1>
    }
    const {
        name, 
        id,
        costForTwoMessage,
        cuisines
     } = resInfo.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}   {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}> {item.card.info.name} </li>
                ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;
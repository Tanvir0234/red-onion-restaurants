import { useEffect, useState } from "react";

const useItems=()=>{
    const [items,setItems]=useState([]);
    
    useEffect(()=>{
       fetch('/lunchData.json')
       .then(res=>res.json())
       .then(data=>setItems(data));
    },[]);
    return {items}
}

export default useItems;
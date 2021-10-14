import useItems from '../../Hooks/useItems';
import Lunch from '../Lunch/Lunch';
import "./Home.css";


const Home = () => {
    /*const [items,setItems]=useState([]);
    console.log(items)
    useEffect(()=>{
       fetch('/lunchData.json')
       .then(res=>res.json())
       .then(data=>setItems(data));
    },[]);
    */
    const {items} = useItems();
    return (
    <div>
    <div className="container mt-2">
           <h1 className="text-center m-4">Our <span className="text-danger">Food</span> Item</h1>
           <div className="row">
                 {
                     items.map(item=><Lunch
                     key={item.key}
                     item={item}

                     ></Lunch>)
                 }
           </div>
    </div>
        
    </div>
    );
};

export default Home;
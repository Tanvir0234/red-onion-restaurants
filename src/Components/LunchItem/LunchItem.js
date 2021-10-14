import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Lunch from '../Lunch/Lunch';

const LunchItem = () => {
    const {items} = useItems();
    return (
        <div className="container mt-3 bg-light">
            <h1 className="text-center mt-3 ">Lunch <span className="text-danger">Item</span> </h1>
            <div className="row">
                {
                    items.map(item=><Lunch
                    key={item.id}
                    item={item}
                    >

                    </Lunch>)
                }
            </div>
            <div className="text-center m-4">
            <Link  to ="/home">Go Back</Link>
            </div>
        </div>
    );
};

export default LunchItem;
import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {itemId} = useParams();
    return (
        <div>
            <h1 className="text-center">You can add this</h1>
            <div className="row">
                <div className="col-lg-6">
                    <h1>{itemId.name}</h1>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    );
};

export default Detail;
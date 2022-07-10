import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return <div>
          {greeting}
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <ItemCount 
                stock={5} 
                initial={1} 
                onAdd={(n) => alert(`Agregados ${n} productos`)} />
            </div>
        </div>
    </div>;
};

export default ItemListContainer;
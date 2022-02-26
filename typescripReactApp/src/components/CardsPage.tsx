import React, {FC} from "react";
import Card from "./Card";

const CardsPage:FC = () => {
    return (
        <div>
            <Card 
                height='200px' 
                width='200px'
                onClick={(num) => console.log(num)}
            >
                <button>Click</button>
            </Card>
        </div>
    )
}

export default CardsPage;
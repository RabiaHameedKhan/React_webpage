import React from "react";

function Cards(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} className="card_img" alt={props.Name} />
                    <div className="card_info">
                        <div className="card_name">
                            {props.Name}
                        </div>
                        <div className="card_button">
                        <button>Buy Now!</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;

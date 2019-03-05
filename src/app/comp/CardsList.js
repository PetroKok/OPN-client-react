import React, {Component} from 'react'

let items = [
    {
        type: "BASIC",
        price: "TRY FOR FREE",
        title: "1 order / month",
        desc: "1 user, 1GB Storage"
    },
    {
        type: "Business",
        price: "125 CHF",
        title: "15 orders / month",
        desc: "5 users 5GB Storage 100 API calls Free/Month Limited Analytic reports Email support"
    },
    {
        type: "ENTERPRISE",
        price: "CUSTOM / TAILORDER MADE",
        title: "UNLIMITED",
        desc: "Orders | Users | Storage 1000 API Calls Free/Month Customer Support Portal Premium Listing"
    },
];

class CardsList extends Component {
    renderCard(){
        return items.map( (item, index)=>{
            return(
                <div className={`main-card color-${index+1}`} key={index}>
                    <div className="panel-card">
                        <div className="card-body text-center">
                            <div className="type-block">
                                <span className="type-card">{item.type}</span>
                            </div>
                            <p className="price-title">{item.price}</p>
                            <div className="description-panel">
                                <div className="desc-title">{item.title}</div>
                                <div>{item.desc}</div>
                            </div>
                        </div>
                    </div>
                    <button className="btn-supply" key={index+1}>LET'S START</button>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="panel-cards">
                {this.renderCard()}
            </div>
        )
    }
}

export default CardsList;
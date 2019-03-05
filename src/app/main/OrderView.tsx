import  React from 'react';
import { Order } from "./PreviewPanel";
import NumberFormat from 'react-number-format';
import CommonBtn from "../common/CommonBtn";

const OrderView = (props:Order) => {
    const formattedDate = props.date.replace('.','  |  ');
    return (
        <div className="main-order-view-wrapper">
            <text className="main-order-prop-text">№ {props.id}</text>
            <text className="main-order-prop-text">{formattedDate}</text>
            <div className="main-order-img-block">
                <img src={props.thumb} alt={`thumb of #${props.id}`} width="70" height="70"/>
                <NumberFormat thousandSeparator={' '}
                              displayType={'text'}
                              value={props.price}
                              renderText={value => <span className="main-order-price-text">{value}</span>}
                />

                <a className="main-order-offer-price-link">Your price?</a>
            </div>
            <div className="main-order-description-block">
                <div className="main-order-checkbox-wrapper">
                  <span className="main-order-name-text">{props.name}</span>
                  <label className="main-order-checkbox-label">
                    <input className="main-order-checkbox"
                      type="checkbox"
                      value={props.proved ? 'Proved' : 'Not proved yet'}
                      checked={props.proved}
                    />
                    <span>{props.proved ? 'Proved' : 'Not proved yet'}</span>
                  </label>
                </div>
                <p>
                  <span className="main-order-deal-text">Deal:</span>
                  <span className="main-order-category-text">{props.category}</span>
                </p>
                <text className="main-order-description-text">{props.description}</text>
            </div>
            <CommonBtn className="order-view-button">MORE</CommonBtn>
        </div>
    );
};

export default OrderView;
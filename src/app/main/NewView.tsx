import  React from 'react';
import { New } from "./NewsPanel";
import CommonBtn from "../common/CommonBtn";

const NewView = (props:New) => {
    const formattedDate = props.date.replace('.',"  |  ");
    return (
        <div className="main-order-view-wrapper newsWrapper">
            <span className="main-order-category-text">Trady by</span>
            <text className="main-order-name-text news">{props.companyName}</text>
            <text className="main-order-prop-text news">{formattedDate}</text>
            <div className="main-news-description-block">
                <text className="main-order-description-text news">{props.description}</text>
                <span className="main-order-category-text">Materials</span>
                <span className="main-order-deal-text materials">{props.category}</span>
            </div>
            <CommonBtn className="new-view-button">DETAIL</CommonBtn>
        </div>
    );
};

export default NewView;
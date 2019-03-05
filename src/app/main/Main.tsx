import  React from 'react';
import {typesConst} from "../../consts";
import PreviewPanel from "./PreviewPanel";
import NewsPanel from "./NewsPanel";
import MaterialsPanel from "./MaterialsPanel";

function Main() {
    return (
        <div className="main-wrapper">
            <div className="column-wrapper">
                <button className="main-header-button">SELLERS ORDERS</button>
                <PreviewPanel type={typesConst.SELLER_ORDER} />
                <button className="main-footer-button">SHOW ALL</button>
            </div>
            <div className="column-wrapper">
                <button className="main-header-button">BUYERS ORDERS</button>
                <PreviewPanel type={typesConst.BUYER_ORDER} />
                <button className="main-footer-button">SHOW ALL</button>
            </div>
            <div className="column-wrapper">
                <button className="main-header-button">MATERIALS</button>
                <MaterialsPanel />
                <button className="main-footer-button">MORE INFO</button>
            </div>
            <div className="column-wrapper">
                <button className="main-header-button">REPORTS</button>
                <NewsPanel />
                <button className="main-footer-button">WANT TO SEE ALL REPORTS?</button>
            </div>
        </div>
    );
};

export default Main;
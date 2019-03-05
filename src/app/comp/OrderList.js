import HeadTitle from "./HeadTitle";
import PDF from "./icons/pdf.svg";
import React from "react";

const OrderListComponent = ({list}) => {
    return (
        <div>
            <div className="order-space-evenly">
                <div className="">
                    {
                        list.map((l, key) => (
                            <div key={key} className="order-item">
                                {l.title}
                            </div>
                        ))
                    }
                </div>
                <div className="">
                    {
                        list.map((l, key) => (
                            <div key={key} className="order-item">
                                {l.title}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="col text-center download">
                <img src={PDF} className="pdf-icon" alt=""/>
                Download list
            </div>
        </div>


    );
};

export default OrderListComponent;
import  React from 'react';
import NumberFormat from 'react-number-format';
import { Material } from "./MaterialsPanel";

import { UpArrow, DownArrow } from "../../consts/icons";

const MaterialView = (props:Material) => {
    const { name, incPerc, decPerc, price } = props;
    const percClassName =  "main-material-price-diff-perc" + (incPerc ? " inc": " dec");
    return (
        <div className="main-material-wrapper">
            <span className="order-material-name">{name}</span>
            <NumberFormat thousandSeparator={' '}
                          displayType={'text'}
                          value={incPerc  ? incPerc : decPerc}
                          prefix={incPerc ? '+' : '-'}
                          suffix={'%'}
                          renderText={value =>
                      <span className={percClassName}>{value}</span>}
            />
            <UpArrow value={incPerc} />
            <DownArrow value={decPerc} />

            <NumberFormat thousandSeparator={' '}
                          displayType={'text'}
                          value={price}
                          renderText={value =>
                      <span className="main-material-price">{value}</span>}
            />
        </div>
    );
};

export default MaterialView;
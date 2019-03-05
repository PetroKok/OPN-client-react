import React, {Component} from 'react';
import HeadTitle from "../comp/HeadTitle";
import OrderListComponent from "../comp/OrderList";
import Label from "../comp/Label";
const list = [
    {
        title: "12/02/19 Acetone888"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
    {
        title: "12/02/19 Acetone"
    },
];
const lorem = [
    "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. "
];
class OrderInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="order-row">
                <div className="order-info">
                    <HeadTitle name='Order info' title="Order info"/>
                    <Label firstText="Number of operations" valueBold={this.props.match.params.id}/>
                    <Label firstText="Title" value={`Acetone #${this.props.match.params.id}`}/>
                    <Label firstText="Client" value="Open packaging network" reverseStyle={1}/>
                    <Label firstText="Top buyers" value="5000"/>
                    <Label firstText="Date of operations" value="12 | 12 | 2019"/>
                    <Label firstText="Date closed operation" value="12 | 12 | 2019"/>
                    <Label firstText="When product was delivered" value="12 | 12 | 2019"/>
                    <Label firstText="Country sent from" value="Spain"/>
                    <Label firstText="Region sent from" value="Valencia"/>
                    <Label firstText="Country delivered to" value="Germany"/>
                    <Label firstText="Region delivered to" value="Berlin"/>
                    <Label firstText="Logistic" value="by Sea"/>
                    <Label firstText="Price" valueBold="2 000 per/ton" big={1}/>
                </div>
                <div className="product-info">
                    <HeadTitle title="Product info"/>
                    <div className="product-info-desc">
                        <div className="product-title">Parameters:</div>
                        <div className="description">{lorem[0]}</div>
                    </div>
                    <div className="product-info-desc">
                        <div className="product-title">Requirements for participants:</div>
                        <div className="description">{lorem[0]}</div>
                    </div>
                    <div className="simple-title">
                        Product photos:
                    </div>
                    <div className="photos-row">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="order-payment-info">
                    <HeadTitle title="Order payment info"/>
                    <Label firstText="Your wallet" value="0x089eyrhwernwe9rn8"/>
                    <Label firstText="OPN wallet" value="0x089eyrhwernwe9rn8"/>
                    <Label firstText="Operation time" value="9:57 12 | 12 | 2019 (GMT +3)"/>
                    <Label firstText="Verification" value="OK"/>
                    <Label firstText="Payment system used" value="OPN platform"/>
                    <Label firstText="Currency" value="OPK"/>
                    <Label firstText="Ammount" valueBold="10 000 OPK" big={1}/>
                </div>
                <div className="order-list">
                    <HeadTitle title="Order list"/>
                    <OrderListComponent list={list}/>
                </div>
            </div>
        );
    }
}

export default OrderInfo;

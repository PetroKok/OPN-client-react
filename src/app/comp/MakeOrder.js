import React, {Component} from 'react';
import HeadTitle from "./HeadTitle";
import FormElements from './FormElements'
import PDF from './icons/pdf.svg'
import PhotosProduct from "./PhotosProduct";
import OrderListComponent from "./OrderList";

const list = [
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
    {
        title: "12/02/19 Acetone"
    },
];

class MakeOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            data: undefined
        }
        this.onChange = this.onChange.bind(this);
        this.makeOrderCoponent = this.makeOrderCoponent.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }

    placeOrder() {
        console.log(this.state.list);
    }

    onChange(key, value) {
        let list = this.state.list;
        list[key] = value;
        this.setState({list: list}, () => {
            console.log(this.state.list)
        });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({data: json}, () => {
                console.log(this.state)
            }))
    }

    makeOrderCoponent() {
        if (this.state.data !== undefined) {
            return (
                <div>
                    <FormElements type="select" data={this.state.data} title="i want to BUY/I want to SELL"
                                  name="buy_sell"
                                  value={'selected'}
                                  onChange={this.onChange}/>

                    <FormElements type="input" title="Company name" name="company_name" onChange={this.onChange}/>
                    <FormElements type="input" title="Country" name="country" onChange={this.onChange}/>
                    <FormElements type="select" data={this.state.data}
                                  value={'selected'}
                                  title="Product (Choose from list or propose yours)"
                                  name="product_name" edit={1} onChange={this.onChange}/>

                    <FormElements type="input" title="Title of proposer" name="title_propose" onChange={this.onChange}/>
                    <FormElements type="date" title="Date of announcement" name="date" value="23-03-2019"
                                  onChange={this.onChange}/>

                    <FormElements type="select" value={'selected'} data={this.state.data} title="Delivery terms"
                                  name="delivery_terms"
                                  onChange={this.onChange}/>
                    <FormElements type="select" value={'selected'} data={this.state.data} title="Delivery variants"
                                  name="delivery_variants"
                                  onChange={this.onChange}/>

                    <FormElements type="input" title="Parameters" name="parameters" placeholder="abc (370 symbols)"
                                  onChange={this.onChange}/>
                    <FormElements type="input" title="Requirements for participants" name="requirements"
                                  placeholder="abc (370 symbols)" onChange={this.onChange}/>
                    <FormElements type="number" title="Price" name="price" onChange={this.onChange}/>
                    <PhotosProduct onChange={this.onChange}/>
                    <button className="big-btn" onClick={this.placeOrder}>place order</button>
                </div>
            );
        } else {
            return "LOADING";
        }

    }

    render() {
        return (
            <div className="col-md-8 col-sm-8">
                <div className="row">
                    <div className="col-md-8 padleft-5">
                        <HeadTitle title="Make Order"/>
                        {this.makeOrderCoponent()}
                    </div>
                    <div className="col-md-4 padleft-5">
                        <HeadTitle title='order info'/>
                        <OrderListComponent list={list}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default MakeOrder;

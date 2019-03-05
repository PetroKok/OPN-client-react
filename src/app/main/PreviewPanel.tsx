import  React from 'react';
import { connect } from "react-redux";
import { mainSelectors } from "./duck";
import OrderView from "./OrderView";

export type Order = {
    id: number,
    date: string,
    name: string,
    type: number,
    category: string,
    price: number,
    suggested_prices: number[],
    viewed: number,
    thumb: string,
    description: string,
    proved: boolean,
    archived: boolean,
    // companyId: number,
    // companyName: string,
};
// type PreviewPanelProps = {
//     orders: Order[],
//     nAllOrders: number,
//     nArchivedOrders: number,
//     nViewsTotal: number
// }

interface IPreviewPanelProps {
    orders: Order[],
    nAllOrders: number,
    nArchivedOrders:number,
    nViewsTotal: number,
};

interface IPreviewPanelState {};

interface IOwnProps {
    type: number,
};

class PreviewPanel extends React.Component<IPreviewPanelProps, IPreviewPanelState> {

    render() {
        const { orders, nArchivedOrders, nAllOrders, nViewsTotal } = this.props;
        return (
            <div className="main-preview-wrapper">
                <div>
                    <span className="main-preview-statistic-label">All orders</span><span className="main-preview-statistic-value">{nAllOrders}</span>
                    <span className="main-preview-statistic-label">Archive</span><span className="main-preview-statistic-value">{nArchivedOrders}</span>
                    <span className="main-preview-statistic-label">Views</span><span className="main-preview-statistic-value">{nViewsTotal}</span>
                </div>
                <hr className="main-preview-statistic-ruler" />
                {
                    orders.slice(0, 3).map(order =>
                        <OrderView key={order.id} {...order} />
                    )
                }
            </div>
        );
    };
};

// in order instance to have own copy of orders list
const makeMapStateToProps = () => {
    const getPersonalTypedOrders = mainSelectors.makeGetTypedOrders();
    const getPersonalArchivedTypedOrders = mainSelectors.makeGetArchivedTypedOrders();
    const mapStateToProps = (state, props) => {
      const orders = getPersonalTypedOrders(state.market, props);
      const arcOrders = getPersonalArchivedTypedOrders(state.market, props);
      return {
          orders,
          nAllOrders: orders.length,
          nArchivedOrders: arcOrders.length,
          nViewsTotal: orders.reduce(
              (acc, order) => {
                return acc + order.viewed;
                }, 0),
      };
    };
    return mapStateToProps;
};

export default connect<IPreviewPanelProps, IPreviewPanelState, IOwnProps>(makeMapStateToProps)(PreviewPanel);
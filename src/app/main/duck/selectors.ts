import { createSelector } from 'reselect';

const getMaterials = state => state.get('materials').toList().toJS();

const getNews = state => state.get('news').toList().toJS();

const getOrders = state => state.get('orders').toList().toJS();

const getOrdersCount = state => state.get('orders').size;

const getOrdersType = (_, props) => props.type;

const getArchivedOrders = createSelector(
    [ getOrders ],
    orders => orders.filter(order => order.archived === true),
);

const makeGetTypedOrders = () => {
    return createSelector([
        getOrders,
        getOrdersType,
        ],
        (orders, type) =>  (orders.filter(order => order.type === type)),
    );
};
const makeGetArchivedTypedOrders = () => {
    return createSelector([
        getArchivedOrders,
        getOrdersType,
        ],
        (orders, type) =>  orders.filter(order => order.type === type),
    )
}

export default {
    getNews,
    getMaterials,
    getOrders,
    getOrdersCount,
    getArchivedOrders,
    makeGetTypedOrders,
    makeGetArchivedTypedOrders,
};

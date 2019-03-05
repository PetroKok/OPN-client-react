import  React from 'react';
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { menuOperations } from "./duck";

const MenuItem  = ({className, isSelected, isFirst, data: { page, linkTo }, ...props}) => {
    const { switchPage, pushRoute} = props;
    return <button id="MenuItem" {...props} className={className} onClick={() => { switchPage(page), pushRoute(linkTo) }}>{page.toUpperCase()}</button>
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        pushRoute: push,
        switchPage: menuOperations.switchToPage,
    }, dispatch);
}


export default connect(null, mapDispatchToProps)(MenuItem);
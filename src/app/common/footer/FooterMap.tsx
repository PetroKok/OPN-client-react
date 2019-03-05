import  React from 'react';
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { menuOperations, menuSelectors } from "../menu/duck";

const FooterMap = (props:any) => {
  const { footerMap, switchPage, pushRoute } = props;
  return (
    <div className="footer-map-wrapper">{
      footerMap.map((value) => (
        <a className="footer-map-item" onClick={() => {switchPage(value.page), pushRoute(value.linkTo) }}
        >{value.page}</a>))
    }
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    footerMap: menuSelectors.getFooterMap(state.menu),
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    pushRoute: push,
    switchPage: menuOperations.switchToPage,
  }, dispatch);
}

export default  connect(mapStateToProps, mapDispatchToProps)(FooterMap);
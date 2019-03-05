import  React from 'react';
import {connect} from "react-redux";
import { mainSelectors } from "./duck";
import NewView from "./NewView";

export type New = {
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
    companyId: number,
    companyName: string,
};

interface INewsPanelProps {
    news: New[],
};

interface INewsPanelState {};

interface IOwnProps {
};

class NewsPanel extends React.Component<INewsPanelProps, INewsPanelState> {

    render() {
        const { news } = this.props;
        return (
            <div className="main-preview-wrapper">
                <div>
                    <span className="main-preview-header-text">Daily Report</span>
                  <span className="main-preview-header-text">Weekly Report</span>
                  <span className="main-preview-header-text">Month Report</span>
                </div>
                <hr className="main-preview-statistic-ruler" />
                {
                    news.slice(0, 4).map(newItem =>
                        <NewView key={newItem.id} {...newItem} />
                    )
                }
            </div>
        );
    };
};

const mapStateToProps = (state) => {
  return {
      news: mainSelectors.getNews(state.market),
  };
};

export default connect<INewsPanelProps, INewsPanelState, IOwnProps>(mapStateToProps)(NewsPanel);
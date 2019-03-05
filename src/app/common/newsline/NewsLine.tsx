import  React from 'react';
import news from './news';
import { RSSIcon, PrintIcon } from '../../../consts/icons';

const IconedLink = ({icon, ...props}) => {

  return (
      <div className="iconed-link-wrapper">
        {icon()}
        <a className="styled-newsline-link" {...props} />
      </div>
  );
};

const NewsLine = () => {
    return (
        <div className="newsline">
            <span className="opn-span">OPN</span>
            <span className="opn-news">NEWS</span>
            <div className="ticker-wrapper">
                <div className="ticker">{
                    news.map(tickItem =>
                    <div className="ticker-item">{tickItem}</div>
                    )
                }
                </div>
            </div>
            <IconedLink icon={RSSIcon} href="google.com">Subscribe for NEWS</IconedLink>
            <IconedLink icon={PrintIcon} href="facebook.com">Print version</IconedLink>
        </div>
    );
};

export default NewsLine;
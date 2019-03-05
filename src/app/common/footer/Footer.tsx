import  React from 'react';
import logo from "../assets/img/logo_opn_opaq.png";
import logoTraceAllicance from "../assets/img/logo_tracealliance.png";
import logoAipia from "../assets/img/logo_aipia.png";
import FooterMenu from "./FooterMenu";
import FooterMap from "./FooterMap";
import FeedbackFormContainer from "./containers/FeedbackFormContainer";
import { iconsConst } from "../../../consts";
import CommonBtn from "../CommonBtn";

function Footer() {
    return (
        <div className="footer">
          <div className="footer-title-wrapper">
            <img className="footer-logo" src={logo} />
            <FooterMenu />
          </div>
          <div>
            <FooterMap />
            <div className="footer-contacts-wrapper">
              <text className="footer-text">Baarerstrasse 82, Zug, 6302 Switzerland</text>
              <text className="footer-text">Contact email: info@opnplatform.com</text>
              <img className="footer-logo-partners" src={logoAipia} />
              <img className="footer-logo-partners" src={logoTraceAllicance} />
            </div>
            <FeedbackFormContainer />
            <div className="footer-social-icons-wrapper">
              { iconsConst.FacebookIcon() }
              { iconsConst.TumblrIcon() }
              { iconsConst.LinkedinIcon() }
              { iconsConst.YoutubeIcon() }
              { iconsConst.GoogleIcon() }
              { iconsConst.GithubIcon() }
              { iconsConst.TwitterIcon() }
            </div>
            <CommonBtn className="footer-subscription-button">SUBSCRIBE FOR NEWS</CommonBtn>
          </div>
          <text className="footer-text copy">{`© COPYRIGHT 2008-${new Date().getFullYear()}. ALL RIGHT RESERVED.`}</text>
        </div>
    );
};

export default Footer;
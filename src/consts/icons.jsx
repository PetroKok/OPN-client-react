import  React from 'react';
import Icon from 'react-icons-kit';
import { androidArrowDropup } from 'react-icons-kit/ionicons/androidArrowDropup';
import {androidArrowDropdown} from 'react-icons-kit/ionicons/androidArrowDropdown';
import { socialRssOutline } from 'react-icons-kit/ionicons/socialRssOutline';
import { androidSearch } from 'react-icons-kit/ionicons/androidSearch';
import { iosPrinterOutline } from 'react-icons-kit/ionicons/iosPrinterOutline';
// social icons
import { socialTumblr } from 'react-icons-kit/ionicons/socialTumblr';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialYoutube} from 'react-icons-kit/ionicons/socialYoutube';
import { socialGoogleOutline } from 'react-icons-kit/ionicons/socialGoogleOutline';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
// import {youtube} from 'react-icons-kit/fa/youtube'

import { logIn } from 'react-icons-kit/ionicons/logIn';
import { logOut } from 'react-icons-kit/ionicons/logOut';
import { compose } from 'react-icons-kit/ionicons/compose';
import { triangle } from 'react-icons-kit/ionicons/'
import { colorsConst } from "./index";

// import {
//     logIn,
//     compose,
//     iosPrinterOutline,
//     androidSearch,
//     socialRssOutline,
// } from 'react-icons-kit/ionicons';

const SideIconContainer = ({color, icon, ...props}) => (<Icon style={{color: (color ? color : colorsConst.ANAKIWA), ...props.style}} icon={icon} size={20}/>);
const SideIconContainer2 = ({color, icon, ...props}) => (<Icon style={{color: (color ? color : colorsConst.STEEL_BLUE), ...props.style}} icon={icon} size={20}/>);
// const SideIconTinyUpArrowContainer = ({icon, value}) => (<Icon style={{color: (value ? colorsConst.KOBI : colorsConst.MERCURY}} icon={icon} size={9}/>);
// const SideIconTinyDownArrowContainer = ({icon, value}) => (<Icon style={{color: (value ? colorsConst.ANAKIWA : colorsConst.MERCURY}} icon={icon} size={9}/>);

export const RSSIcon = (props) => (<SideIconContainer icon={socialRssOutline} />);
export const SearchIcon = (props) => (<SideIconContainer icon={androidSearch}  style={{color: colorsConst.WHITE, zIndex: 2, position: "absolute", left: 0, right: 0}} />);
export const SarchIconScr = androidSearch;
export const LoginIcon = (props) => (<SideIconContainer icon={logIn}/>);
export const LogoutIcon = (props) => (<SideIconContainer color={colorsConst.DANUBE} icon={logOut}/>);
export const SignUpIcon = (props) => (<SideIconContainer icon={compose} />);
export const PrintIcon = (props) => (<SideIconContainer icon={iosPrinterOutline} />);

// arrows
export const UpArrow = ({value}) => (<Icon style={{color: (value ? colorsConst.KOBI : colorsConst.MERCURY), display: 'flex', alignItems: 'center'}} icon={androidArrowDropup} size={15}/>);
export const DownArrow = ({value}) => (<Icon style={{color: (value ? colorsConst.ANAKIWA : colorsConst.MERCURY), display: 'flex', alignItems: 'center'}} icon={androidArrowDropdown} size={15}/>);

// social
export const TumblrIcon = (props) => (<SideIconContainer2 icon={socialTumblr} />);
export const GithubIcon = (props) => (<SideIconContainer2 icon={socialGithub} />);
export const YoutubeIcon = (props) => (<SideIconContainer2 icon={socialYoutube} />);
export const GoogleIcon = (props) => (<SideIconContainer2 icon={socialGoogleOutline} />);
export const LinkedinIcon = (props) => (<SideIconContainer2 icon={socialLinkedin} />);
export const FacebookIcon = (props) => (<SideIconContainer2 icon={socialFacebook} />);
export const TwitterIcon = (props) => (<SideIconContainer2 icon={socialTwitter} />);

export default {
    RSSIcon,
    SearchIcon,
    SarchIconScr,
    LoginIcon,
    LogoutIcon,
    SignUpIcon,
    PrintIcon,
    UpArrow,
    DownArrow,

    // social
    FacebookIcon,
    TumblrIcon,
    LinkedinIcon,
    YoutubeIcon,
    GoogleIcon,
    GithubIcon,
    TwitterIcon,
}
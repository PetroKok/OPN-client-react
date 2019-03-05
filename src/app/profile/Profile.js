import React, {Component} from 'react';
import ProfileBlock from '../comp/ProfileBlock';
import MessageBlock from '../comp/MessageBlock';
import MakeOrder from '../comp/MakeOrder';
import {Switch, Route, Redirect} from 'react-router'

const list = [
    {
        name: "Profile",
        link: "messages",
        component: MessageBlock
    },
    {
        name: "Orders",
        link: "orders",
        component: MakeOrder
    },
    {
        name: "Transactions",
        link: "transactions",
        component: MessageBlock
    },
    {
        name: "Partners",
        link: "partners",
        component: MessageBlock
    },
    {
        name: "Buy OPK",
        link: "but-opk",
        component: MessageBlock
    },
    {
        name: "Log out",
        link: "logout",
        component: MessageBlock
    },
];

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: 'https://picsum.photos/500/500/?random'
        }
    }

    render() {
        let {path = ''} = this.props.match;
        return (
            <div className="row">
                <ProfileBlock path={this.props.match.path} avatar={this.state.avatar} list={list}/>
                <Switch>
                    {
                        list.map((item, key) => {
                                if (key === 0) {
                                    return (<Route key={key} exact path={`${path}/${item.link}`} component={item.component}/>);
                                } else {
                                    return (<Route key={key} path={`${path}/${item.link}`} component={item.component}/>);
                                }
                            }
                        )
                    }
                    {/*<RedirectIfProfile path={this.props.match.path}/>*/}
                </Switch>
            </div>
        );
    }
}

const RedirectIfProfile = ({path}) => {
    if (path === '/profile') {
        return <Redirect to={'/'}/>
    }
}

export default Profile;

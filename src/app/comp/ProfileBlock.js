import React, {Component} from 'react';
import HeadTitle from "./HeadTitle";
import {Link} from 'react-router-dom';

class ProfileBlock extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-4">
                <HeadTitle name="Profile" title="Profile"/>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-4">
                        <div className="avatar-block text-center mb-4">
                            <img src={this.props.avatar} className="avatar"/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <Menus path={this.props.path} props={this.props} list={this.props.list}/>
                    </div>
                </div>
            </div>
        );
    }
}

const Menus = (props) => {
    let activeRoute = explode('/', window.location.pathname).slice(-1)[0];
    return (
        <div>
            {props.list.map((i, key) => (
                    <Link to={`${props.path}/${i.link}`} key={key}>
                        <button
                            className={`btn-profile ${activeRoute === i.link ? 'active-btn' : ''}`}>{i.name}
                        </button>
                    </Link>
                )
            )}
        </div>
    )
}

function explode(delimiter, string) {
    var emptyArray = {0: ''};

    if (arguments.length != 2
        || typeof arguments[0] == 'undefined'
        || typeof arguments[1] == 'undefined') {
        return null;
    }

    if (delimiter === ''
        || delimiter === false
        || delimiter === null) {
        return false;
    }

    if (typeof delimiter == 'function'
        || typeof delimiter == 'object'
        || typeof string == 'function'
        || typeof string == 'object') {
        return emptyArray;
    }

    if (delimiter === true) {
        delimiter = '1';
    }

    return string.toString().split(delimiter.toString());
}


export default ProfileBlock;

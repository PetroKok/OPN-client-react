import  React from 'react';
import { menuSelectors } from '../menu/duck';

import { connect } from "react-redux";
import MenuItem from "../menu/MenuItem";

export type Page = {
    key: number,
    page: string,
    linkTo: string,
    selected?: boolean,
    first?: boolean,
};

interface IMenuProps {
    pages?: Page[],
}

interface IMenuState {}


class FooterMenu extends React.Component<IMenuProps, IMenuState> {
    static defaultProps = {
        pages: [],
    };

    render() {
        const { pages } = this.props;
        return (
            <div className="menu footer-menu">{
                pages!.map(value => (
                    <MenuItem className="headerMenuItem footer-menu-item"
                        key={value.key}
                        isFirst={value.first}
                        data={value}
                        />))
            }</div>
        );
    }
};

const mapStateToProps = (state:any) => {
    return {
        pages: menuSelectors.getPages(state.menu),
    };
};

export default connect<IMenuProps, IMenuState>(mapStateToProps)(FooterMenu);
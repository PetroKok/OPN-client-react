import  React from 'react';
import { menuSelectors } from './duck';
import { connect } from "react-redux";
import { iconsConst } from "../../../consts";
import MenuItem from "./MenuItem";
import CommonBtn from "../CommonBtn";

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

// cons

class Menu extends React.Component<IMenuProps, IMenuState> {
    static defaultProps = {
        pages: [],
    };

    render() {
        const { pages } = this.props;
        return (
            <div className="menu">
              {
                  pages!.map(value => {
                    const buttonClassName = "headerMenuItem" + (value.selected ? " selected" : "");
                    return (
                      <MenuItem
                          key={value.key}
                          isSelected={value.selected}
                          isFirst={value.first}
                          data={value}
                          className={buttonClassName}
                          />)})
                }
                <div className="styled-input-search-wrapper">
                    <input className="styled-search-input" type="search" placeholder="search"/>
                    <div className="block-search-wrapper">
                        <CommonBtn className="search-input-button" />
                        {iconsConst.SearchIcon()}
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state:any) => {
    return {
        pages: menuSelectors.getPages(state.menu),
    };
};

export default connect<IMenuProps, IMenuState>(mapStateToProps)(Menu);
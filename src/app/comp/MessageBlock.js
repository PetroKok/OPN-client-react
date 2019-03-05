import React, {Component} from 'react';
import HeadTitle from "./HeadTitle";
const list = [
    {
        name: "Inbox",
        count: 35
    },
    {
        name: "Drafts",
        count: 0
    },
    {
        name: "Sent",
        count: 23
    },
    {
        name: "Trash",
        count: 5
    },
    {
        name: "Unread",
        count: 11
    },
    {
        name: "Marked",
        count: 18
    },
    {
        name: "Files",
        count: 125
    },
];
class MessageBlock extends Component {
    render() {
        return (
            <div className="col-md-5 col-sm-7 padleft-5">
                <HeadTitle title="Messages"/>
                <Lists list={list}/>
            </div>
        );
    }
}

const Lists = (props) => {
    return (
        <div className="mt-5">
            {props.list.map((i, key) => (
                <div className="list-container" key={key}>
                    <div className="filler"></div>
                    <span className="dot-text">{i.name}</span>
                    <span className="count-msg">{i.count}</span>
                </div>
            ))}
        </div>
    )
}

export default MessageBlock;

import React, {Component} from 'react'

class HeadTitle extends Component {
    render() {
        return (
            <div className='mb-4'>
                <p className="small-title-head">{this.props.name === undefined ? <br/> :this.props.name}</p>
                <p className="medium-title-head">{this.props.title}</p>
                <hr className="hr-title-head"/>
            </div>
        )
    }
}

export default HeadTitle;
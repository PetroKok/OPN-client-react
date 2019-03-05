import React, {Component} from 'react'

class Label extends Component{
    render(){
        let p = this.props;
        if(p.reverseStyle === undefined){
            return(
                <div className={`flex-list mt-3 ${p.big === undefined ? '' : 'text-big-price'}`}>
                    <span className="text-label mr-2">{p.firstText}:</span>
                    <span className={`text-desc ${p.valueBold === undefined ? '' : 'bold-back'}`}>{p.valueBold === undefined ? p.value : '#'+p.valueBold}</span>
                </div>
            )
        }else{
            return(
                <div className="flex-list mt-3">
                    <span className="text-desc mr-2">{this.props.firstText}:</span>
                    <span className={`text-label ${this.props.valueBold === undefined ? '' : 'bold-back'}`}>{p.valueBold === undefined ? p.value : '#'+p.valueBold}</span>
                </div>
            )
        }
    }
}

export default Label;
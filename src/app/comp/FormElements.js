import React,{Component} from 'react'
import Edit from './icons/pencil.svg'

class  FormElements extends Component{

    render(){
        if(this.props.type === 'input'){
            return(
                <div className="items-group">
                    <label className='float-left bold-500'>{this.props.title}</label>
                    <img src={Edit} className="edit-icon float-right" height='12' width='12' alt=""/>
                    <input type="text" className="profile-input" name={this.props.name} onChange={(e) => this.props.onChange(this.props.name, e.target.value)}
                           placeholder={this.props.placeholder} value={this.props.value || undefined}/>
                </div>
            )
        }else if(this.props.type === 'select'){
            return(
                <div className="items-group">
                    <label className='float-left bold-500'>{this.props.title}</label>
                    {this.props.edit === 1 ? <img src={Edit} className="edit-icon float-right" height='12' width='12' alt=""/>: ""}
                    <select name={this.props.name} defaultValue={'se'} className="select minimal" onChange={(e) => this.props.onChange(this.props.name, e.target.value)}>
                        <option disabled value="se">Choose</option>
                        {this.props.data.map((item, i) => (
                                <option key={i} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
            )
        }else if(this.props.type === 'number'){
            return(
                <div className="items-group">
                    <label className='float-left bold-500'>{this.props.title}</label>
                    <img src={Edit} className="edit-icon float-right" height='12' width='12' alt=""/>
                    <input type="number" className="profile-input" name={this.props.name} onChange={(e) => this.props.onChange(this.props.name, e.target.value)}
                           placeholder={this.props.placeholder} value={this.props.value || undefined}/>
                </div>
            )
        }else if(this.props.type === 'date'){
            return(
                <div className="items-group">
                    <label className='float-left bold-500'>{this.props.title}</label>
                    <img src={Edit} className="edit-icon float-right" height='12' width='12' alt=""/>
                    <input type="date" className="profile-input" name={this.props.name} onChange={(e) => this.props.onChange(this.props.name, e.target.value)}
                           placeholder={this.props.placeholder} defaultValue={this.props.value}/>
                </div>
            )
        }else{
            return null;
        }
    }
}
export default FormElements;
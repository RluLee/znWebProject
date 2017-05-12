import React , {Component} from 'react';
import './index.css'

class Button extends Component{

    constructor(props){
        super(props)
        this.onClick = props.onClick;
    }

    render(){
        const {text,url,title} = this.props;
        return(
                url?<a onClick={()=>{this.onClick(title)}} target="_blank" className="service-button" href={url}>{text}</a>:<button className="service-button"  onClick={()=>{this.onClick(title)}}>{text}</button>
        )
    }

}

export default Button;
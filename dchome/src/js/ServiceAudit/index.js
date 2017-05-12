import React, {Component} from 'react';


class ServiceAudit extends Component{

    constructor(props){
        super(props)
        this.preventScroll = props.preventScroll
        this.approveScroll = props.approveScroll
    }

    render(){

        const {header, content} = this.props;
        return (
            <div onMouseLeave={()=>{this.approveScroll()}} onMouseEnter={()=>{this.preventScroll()}}  className="service-audit">
                <p>{header}</p>
                <ul ref="service-audit-box" id="scroll-style">
                    {content.map((item,key)=><li key={key}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default ServiceAudit;
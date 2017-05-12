import React , {Component} from 'react';
import Item from './Item'

class Service extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const list = this.props.params;
        const onclickServiceAudit = this.props.onclickServiceAudit;
        return(
            <div className="service-content-items box box-row">
                {
                    list.map((item,key)=>{
                        return <Item onclickServiceAudit={(audit)=>{onclickServiceAudit(audit)}} key={key} params={item} />
                    })
                }
            </div>
        )
    }
}
export default Service;
import React , {Component} from 'react';
import Button from './../Button'


class Item extends Component{
    constructor(props){
        super(props)
        this.onclickServiceAudit = this.props.onclickServiceAudit;
    }

    onclick(){
        console.log(1)
    }

    render(){
        const {title,list} = this.props.params;

        return(
            <div className="service-content-item  box box-left">
                <div className="service-content-item-title">{title}</div>
                {
                    (!Array.isArray(list))?
                        <div className="service-content-item-list box box-left">
                            <div style={{textAlign:'left'}}>{list.title}</div>
                            {
                                list.li.map((item,key)=>{
                                    return <div key={key}>{item}</div>
                                })
                            }
                        </div>:
                        <div className="service-content-item-list box box-left">
                            {
                                list.map((item,key)=>{
                                    return(
                                        <div key={key}>
                                            <div style={{textAlign:'left'}}>{item.title}</div>
                                            {
                                                item.li.map((item,key)=>{
                                                    return <div key={key}>{item}</div>
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                }

                <div className="service-button-container"><Button onClick={(audit)=>{ this.props.onclickServiceAudit(audit)}} title={title} text="查看更多"/></div>
            </div>
        )
    }

}
export default Item;
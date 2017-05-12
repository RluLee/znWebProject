import React,{Component} from 'react';
import Item from './Item'

class Home extends Component{
    constructor(){
        super()
    }

    render(){

        return(
            <div className="home-content box">
                <div className="home-content-text box">
                    <img src="./images/HOME/content.png" alt=""/>
                </div>
                <div className="home-content-items box box-row">
                    <Item imgSrc="./images/HOME/item1.png" title="优质服务" content="提供领先行业的优质服务"></Item>
                    <Item imgSrc="./images/HOME/item2.png" title="技术支持" content="提供高技术水平代帐平台"></Item>
                    <Item imgSrc="./images/HOME/item3.png" title="优质服务" content="提供领先行业的优质服务"></Item>
                    <Item imgSrc="./images/HOME/item4.png" title="优质服务" content="提供领先行业的优质服务"></Item>
                </div>
            </div>
        )
    }
}

export default Home;
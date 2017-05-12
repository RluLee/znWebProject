import React,{Component} from 'react'

const style = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    color:'#ddd',
    marginTop:'1rem'
}
const styleB = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    marginLeft:'1.5rem'
}

class DcFooter extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return <div className="dcfooter" >
            <img src="./images/CONTACT/Wechat.png" alt=""/>
            <div >
                <div>地址：杭州市庆春路118号嘉德广场2603室</div>
                <div>联系电话：0571-85154553 欢迎来电垂询</div>
                <div>E-mail：dc-cpa@163.com</div>
            </div>
        </div>
    }
}

export default DcFooter;
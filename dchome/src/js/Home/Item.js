import React,{Component} from 'react';

class Item extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {imgSrc, title, content} = this.props;

        return(
            <div className="home-content-item box">
                <img src={imgSrc} alt=""/>
                <span>{title}</span>
                <i></i>
                <strong>{content}</strong>
            </div>
        )
    }

}

Item.prototypes ={
    imgSrc:React.PropTypes.string,
    title:React.PropTypes.string,
    content:React.PropTypes.string,
}


export default Item;
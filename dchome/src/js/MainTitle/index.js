import React , {Component} from 'react';

class MainTitle extends Component{

    constructor(props){
        super(props)
    }

    render(){

        const {title,english,text} = this.props;

        return(
            <div className="mainTitle-content-header">
                <h1>{title}</h1>
                <p>{english}</p>
                <i></i>
                {
                    text&&text.map((text,key)=><div key={key}>{text}</div>)
                }
            </div>
        )

    }

}

export default MainTitle;
import React,{Component} from 'react';

class AboutLine extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const {list} = this.props;
        return(
            <div className="about-content-card-lists">
                {
                    list.map((item,key)=>{
                        return (
                            <p className="about-content-card-list" key = {key}>
                                <strong>{item.title}</strong><span>{item.text}</span>
                            </p>
                        )
                    })
                }
            </div>
        )
    }

}

export default AboutLine;
import React,{Component} from 'react';



class Slide {
    constructor(container,params){
        this.parent = document.querySelector(container);
        this.length = this.parent.querySelectorAll('.lrl-slide').length;
        this.pagination = this.parent.querySelector('.lrl-pagination');
        this.params = params;
    }

    setPagination (){
        let {paginationType,direction} = this.params;
    }

}

class Swiper extends Component{

    constructor(props) {

        super(props)
        this.parent = document.querySelector(container);
        // this.length = this.parent.querySelectorAll('.lrl-slide').length;
        // this.pagination = this.parent.querySelector('.lrl-pagination');
        this.state = params
    }
    setPagination(len){
        this.pagination.innerHTML = {}
    }


    render(){

        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        React.Children.map(this.props.children,(child)=>{
                            return <div ref="swiperSlide" data-hash={child.props['data-hash']} className="swiper-slide">{child}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Swiper;
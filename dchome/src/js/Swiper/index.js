import React ,{Component} from 'react';
import './swiper-3.4.2.min';
import './swiper.css';


/**
 * @param pagination: bool,是否显示分页器
 * @param  详情参照http://www.swiper.com.cn/api/basic/2014/1213/17.html
 */

class ReactSwiper extends Component{
    constructor(props,par) {
        super(props)
        this.mySwiper;
        this.resetServiceAudit = props.resetServiceAudit;
        this.state = {
            isScroll: props.isScroll,
        }
    }

    componentWillReceiveProps(nextProps,nextState){
        nextProps.isScroll===false?(()=>{this.mySwiper.disableMousewheelControl()})()
            :this.mySwiper.enableMousewheelControl()
    }
    componentDidMount(){
        let {onSlideChangeEnd,nextButton,prevButton,container,pagination,direction, speed, autoplay, autoplayDisableOnInteraction, hashnav, hashnavWatchState, width,paginationClickable,slidesPerView,spaceBetween,mousewheelControl} = this.props;
        let height = document.body.clientHeight;
        this.mySwiper= new Swiper (`#${container}`, {
            pagination:pagination&&`#${pagination}`,
            height,
            width,
            direction,
            speed,
            autoplay,
            autoplayDisableOnInteraction,
            slidesPerView,
            paginationClickable,
            spaceBetween,
            mousewheelControl,
            hashnav,
            hashnavWatchState,
            nextButton:nextButton&&`#${nextButton}`,
            prevButton:prevButton&&`#${prevButton}`,
            onSlideChangeEnd,
            // autoHeight: true, //高度随内容变化
        })
        height||(this.refs.swiperContainer.style.height=`${height}px`);
    }

    listClick(e,index){
        this.resetServiceAudit();
        this.mySwiper.slideTo(index, 300, false);
    }

    render(){

        const {container,pagination,nextButton,prevButton,scrollbar,contentsList} =this.props;
        const lists = [];
        contentsList&&
        contentsList.map((item,index)=>{
            lists[index] = `<span class="cn">${item.chinese}</span><span class="en">${item.english}</span>`
        })


        return(
            <div ref="swiperContainer" id={container} className="swiper-container">



                <div className="swiper-wrapper">
                    {
                        React.Children.map(this.props.children,(child)=>{
                            return <div {...child.props}  className={child.props['data-class']?`swiper-slide ${child.props['data-class']}`:'swiper-slide'}>{child.props.children}</div>
                        })
                    }
                </div>


                {
                    pagination && <div id={pagination} className="swiper-pagination"></div>
                }

                {
                    // 如果需要导航按钮
                    prevButton && <div id={prevButton} className="swiper-button-prev"></div>
                }
                {
                    nextButton && <div id={nextButton} className="swiper-button-next"></div>
                }

                {
                    //如果需要滚动条
                    scrollbar && <div id={scrollbar} className="swiper-scrollbar"></div>
                }

                {
                    container=='page-container'&&
                    <div className="dclogo">
                        <img src="./images/HOME/logo.png" alt=""/>
                    </div>
                }

                {
                    contentsList&&<div className="list-ul">
                        {
                            React.Children.map(lists,(item,index)=>{
                                return <div dangerouslySetInnerHTML={{__html: item}} onClick={(e)=>{this.listClick(e,index)}} ></div>
                            })
                        }
                    </div>
                }

            </div>
        )
    }

}
export default ReactSwiper;
import React, {Children,PropTypes } from 'react';
import CSSTransitionGroup  from 'react-addons-css-transition-group';
import './slideshow.css'
class SlideShow extends React.Component{

    constructor(){
        super(...arguments)
        this.state = {
            current:0,
            total:0,
            flag:true
        }
    }
    

    componentDidMount(){
        const {children} = this.props
        this.setState({
            total: Children.toArray(children).length
        })
        this.play()
    }

    navigation(item) {
        const {current,total,flag} = this.state
        const {speed,enterTimeout} = this.props
        clearInterval(this.interval)
        this.interval  = setTimeout(()=>{
            this.play()
        },speed)
        if(flag){
            if(!item){
                this.setState({
                    current: current == 0 ? total - 1 : current - 1,
                    flag:false
                })
            }else{
                this.setState({
                    current:current == total - 1 ? 0 : current + 1,
                    flag:false
                })
            }

            setTimeout(()=>{
                this.setState({
                    flag:true
                })
            },enterTimeout)
        }

    }

    play(){
        const {speed} = this.props
        this.interval = setInterval(()=>{
            this.setState({
                current:this.state.current == this.state.total - 1 ? 0 : this.state.current + 1
            })
        },speed)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        const {children,pagination,navigation,enterTimeout,isAnimation} = this.props
        const {current} = this.state

        return (
            <div className="slideshow-wrapper">
                {
                    isAnimation ? 
                
                <div className="slideshow-content">
                    <CSSTransitionGroup
                        transitionName="slideshow-image-item"
                        transitionLeave={true}
                        component="div"
                        transitionEnterTimeout={enterTimeout}
                        transitionLeaveTimeout={10}
                    >
                        {Children.toArray(children)[current]}
                    </CSSTransitionGroup>
                </div>
                : Children.toArray(children)[current]
                }
                {
                    pagination ? <div className="slideshow-pagination-bullets">
                    {
                        Children.toArray(children).map((item,index) =>
                            <span key={index} className={ current == index ? 'slideshow-pagination-bullet active' : 'slideshow-pagination-bullet'}></span>       
                            )
                    }
                </div> : ''
                }
                {
                    navigation ? <div>
                            <div className="slideshow-button prev" onClick={this.navigation.bind(this,0)}></div>
                            <div className="slideshow-button next" onClick={this.navigation.bind(this,1)}></div>
                        </div>
                        : ''
                }
                
            </div>
        )
    }
}

SlideShow.defaultProps = {
    speed:3000,
    pagination:false,
    navigation:false,
    enterTimeout:500,
    isAnimation:true
}

export default SlideShow
import React, {Children } from 'react';
import classnames from 'classnames'
import './slideshow.css'
class SlideShow extends React.Component{

    constructor(){
        super(...arguments)
        this.state = {
            current:0,
            total:0
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
        const {current,total} = this.state
        const {speed} = this.props
        clearInterval(this.interval)
        this.interval  = setTimeout(()=>{
            this.play()
        },speed)
        if(!item){
            this.setState({
                current: current == 0 ? total - 1 : current - 1
            })
        }else{
            this.setState({
                current:current == total - 1 ? 0 : current + 1
            })
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

    handleClick(index){
        const {speed} = this.props
        clearInterval(this.interval)
        this.setState({
            current:index
        })
        this.interval  = setTimeout(()=>{
            this.play()
        },speed)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        const {children,pagination,navigation,pagClick} = this.props
        const {current} = this.state

        return (
            <div className="slideshow-wrapper">
                {Children.toArray(children)[current]}
                {
                    pagination ? <div className="slideshow-pagination-bullets">
                    {
                        Children.toArray(children).map((item,index) =>
                            <span key={index}
                            onClick={pagClick ? this.handleClick.bind(this,index) : ()=>{}}  
                            className={ current == index ? 'slideshow-pagination-bullet active' : 'slideshow-pagination-bullet'}></span>       
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
    navigation:false
}

export default SlideShow
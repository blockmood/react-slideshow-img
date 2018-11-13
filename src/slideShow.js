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
        const {children,pagination} = this.props
        const {current} = this.state

        return (
            <div className="slideshow-wrapper">
                {Children.toArray(children)[current]}
                {
                    pagination ? <div className="slideshow-pagination-bullets">
                    {
                        Children.toArray(children).map((item,index) =>
                            <span key={index} className={ current == index ? 'slideshow-pagination-bullet active' : 'slideshow-pagination-bullet'}></span>       
                            )
                    }
                </div> : ''
                }
                
            </div>
        )
    }
}

SlideShow.defaultProps = {
    speed:3000,
    pagination:false
}

export default SlideShow
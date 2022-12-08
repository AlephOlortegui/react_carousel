import React, { Component } from 'react';
import logos from '../assets/Logos';
import '../assets/Slider.css'
import Bar from './Bar';
import Button from './Buttons';
import Header from './Header'

class Slider extends Component {
    static defaultProps = {
        logos: logos,
        len: logos.length // 8
    }

    state = { count: 0, intervalID: 0}

  
    handleClick2 = () => { console.log('clkik') }

    nextSlide = () => { 
        this.setState(ps => {
            // console.log(ps.count, this.props.len)
            return {count: ps.count > (this.props.len-2) ? 0 : (ps.count + 1)}
        })
    }

    prevSlide = () => { 
        this.setState(ps => {
            // console.log(ps.count, this.props.len)
            return {count: ps.count <= 0 ? (this.props.len-1) : (ps.count - 1)}
        })
    }

    autoPlay = () => { 
        if(this.state.intervalID){
            clearInterval(this.state.intervalID)
            this.setState(ps => { return {...ps, intervalID: 0}})
            return
        }
        const newIntervalID = setInterval(this.nextSlide, 1200)
        this.setState(ps => { return {...ps, intervalID: newIntervalID}}) 
    }

    render() { 
        const {count, intervalID} = this.state;
        const {logos, len} = this.props;
        // For the image
        let alt = `image-${count+1}`;

        return (
            <>
                <Header />
                <section>
                    <img src={logos[count]} alt={alt} />
                </section>
                <div className="control">
                    <h1 className="counter">0{count+1}</h1>
                    <Bar count={count} len={len}/>
                    <div className="btn-group">
                        <Button btnType="prev" icon="fa-arrow-left" handleClick={this.prevSlide} disabled={intervalID}/>
                        <Button btnType={intervalID ? "pause" : "play"}
                                icon={intervalID ? "fa-pause" : "fa-play"}
                                handleClick={this.autoPlay} 
                                disabled={false}/>
                        <Button btnType="next" icon="fa-arrow-right" handleClick={this.nextSlide} disabled={intervalID}/>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Slider;
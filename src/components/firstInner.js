import React, { useState } from 'react'

export const FirstInner = () => {

    const [value, setValue] = useState('')

    return (
        <div id="first-inner-container">
            <div id='top-left'>
                <div id='phone' data-aos="zoom-in" data-aos-duration="900" ></div>
            </div>
            <div id='top-right'>
                <div className="contain">
                    <div className='wrap'>
                        <h1> NOT JUST A BANK</h1>
                        <p>No overdraft or minimum balance fees.<sup>1</sup> Send and receive money.<sup>2</sup>  Get paid early.<sup>3</sup>  Achieve Money Goals.<sup>4</sup>  Learn money.<sup>5</sup> ...and <span>more</span>.</p>
                    </div>
                    <div id='input'>
                        <input type='email' placeholder='Enter email address' value={value} onChange={(e) => setValue(e.target.value)}   ></input>
                        <span onClick={() => setValue('')} > Sign Me Up</span>
                    </div>
                    <div className='downloads'>
                        <a href='"javascript:void(0);"'> Download for IOS</a> <span> * </span>
                        <a href='"javascript:void(0);"'> Download for Android</a><span> * </span>
                        <a href='"javascript:void(0);"'> Why You Should Choose CapWay</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

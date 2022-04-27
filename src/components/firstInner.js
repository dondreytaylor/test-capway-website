import React, { useState } from 'react'

export const FirstInner = () => {

    const [value, setValue] = useState('')
    const highlights = [
        { title: 'Debit Card', list: ['No overdraft fees', 'Send and receive money', 'Get paid early'] },
        { title: 'Money Goals', list: ['Save funds', 'Round-up change'] },
        { title: 'Learn Money', list: ['Talk money with others', 'Get "Phunds"', 'Money Room master classes'] }
    ]

    const createHighlights = highlights.map(highlight => {
        return (
            <div className='highlight-list'>
                <strong>
                    {highlight.title}
                </strong>
                <ul>
                    {highlight.list.map(name => (
                        <li>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    })

    return (
        <div className='first-section'>
            <div className="first-inner-container">
                <div id='left-holder'>
                    <div className="left-holder-container">
                        <h1>Creating Financial Access &amp; Opportunities</h1>
                        <div className='highlight'>
                            {createHighlights}
                            <div className='highlight-list'>
                                <strong>
                                    More products and services to come for your money journey with CapWay.
                                </strong>
                            </div>
                        </div>
                        <div id='signup-box'>
                            <input type='email' placeholder='Enter email address' value={value} onChange={(e) => setValue(e.target.value)}></input>
                            <div>
                                <button onClick={() => setValue('')} > Sign Me Up</button>
                            </div>
                        </div>
                        <div id='links'>
                            <a href='"javascript:void(0);"'> Download for IOS</a><span>.</span>
                            <a href='"javascript:void(0);"'> Download for Android</a><span>.</span>
                            <a href='"javascript:void(0);"'> Why You Should Choose CapWay</a>
                        </div>
                        <div id='featured-in'>
                            <strong>As Featured In </strong>
                            <div id='featured-list'></div>
                        </div>
                    </div>
                </div>
                <div id='right-holder'>
                    <div></div>
                </div>
            </div >
            <div className='first-inner-container-two'>
                <div></div>
                <div></div>
            </div>
        </div >
    )
}

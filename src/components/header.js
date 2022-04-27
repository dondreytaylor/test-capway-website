import React, { Children } from 'react'



export function Header () {

    const learnMoneyOptions = Children.toArray(['Learn Money', 'Money Talk', 'Money Meanings', 'Request Content', 'Submit Content'].map(option => {

        return (
            <div className='learn-money-holder'>
                <a>
                    {option}
                </a>
            </div>
        )
    }))

    const headerOptions = Children.toArray(['Benefits', 'Learn Money', 'Partner', 'Discover CapWay', 'Sign In', 'Sign Up'].map(option => {
        return (
            <>
                <div className='header-option' id={option === 'Learn Money' ? 'learn-money' : ''}>
                    <a href='"javascript:void(0);"'>
                        {option}
                    </a>

                </div>

                {
                    option === 'Learn Money' && (
                        <div className='learn-money-options'>
                            {learnMoneyOptions}
                        </div>
                    )
                }
            </>
        )
    }))



    return (
        <div className="header-container" >
            <header>
                <div id='border-top'></div>
                <div id='header-bottom'>
                    <div id='header-left'>
                        <div className="logo" data-aos="zoom-in" data-aos-duration="900"> </div>
                    </div>
                    <div id="header-right">
                        <div className="header-list-options">
                            {headerOptions}
                        </div>
                        <div className='header-menu'>
                            <div className='icon'> </div>
                        </div>
                    </div>
                </div>
            </header>
        </div >
    )
}

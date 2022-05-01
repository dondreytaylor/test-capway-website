import React from 'react'
import { createMapKey } from './helpers'

export const Numbers = () => {
    const uri = 'https://web.dev.cpwys.co/assets/module-site/pages/page-landing/'
    const cardImageData = [
        {
            cards1: [{
                src: 'card-1.png',
                alt: '8 out of 10 American workers say they live paycheck to paycheck to make ends meet'
            },
            {
                src: 'card-2.png',
                alt: '9 Billion dollars spent in payday loan fees in 2016'
            }]
        },
        {
            cards2: [{
                src: 'card-3.png',
                alt: '11.7 Billion Paid in overdraft fees in 2019'
            },
            {
                src: 'card-4.png',
                alt: '2 out of 3 Americans cannot pass a basic financial literacy test'
            }]
        },
    ]
    const createCards = createMapKey(cardImageData.map((cardObj, i) => {
        const id = i + 1
        return (
            <div className={`cards_holder${id}`}>
                {createMapKey(cardObj[`cards${id}`].map(card => (
                    <img className="card" src={`${uri}${card.src}`} alt={card.alt}></img>
                )))}
            </div>
        )


    }))

    return (
        <div className="section-six">
            <div className='numbers-container'>

                <div className='numbers-container__text'>
                    <h3>Numbers Don't Lie</h3>
                    <p> CapWay was created to provide fair financial access and opportunities to everyone, especially those misunderstood, overlooked, and underserved by the traditional banking system.</p>
                    <p>Cashless, contactless, banking deserts - the way we bank and handle our finances is changing. Whether you are looking for your first debit card and Money Account or looking for a financial option with a mission to guide and assist you in your economic growth, CapWay is here. </p>
                </div>

                <div className='numbers-container__cards'>
                    {createCards}
                </div>

            </div>
        </div>
    )
}
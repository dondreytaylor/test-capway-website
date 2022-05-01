import React, { useState } from 'react'
import { createMapKey } from './helpers'

export const KnowMoney = ({ data }) => {

    const [link, setLink] = useState('shortarticle')

    const getImagesByCategory = (category) => {
        return data && data[category] && createMapKey(data[category].slice(0, 4).map(info => {
            const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(info.publish_date))
            const setBgImage = (imageUrl) => ({ backgroundImage: `url(${imageUrl})` })
            const author = info.user
            return (
                <div className='know-money-card'>
                    <a>
                        <div className='bg-image' style={setBgImage(info.thumbnail_url)}></div>
                        <div className='bg-overlay'></div>
                        <div className='card-content'>
                            <div className='card-details'>
                                <div className='card-title'>{info.title}</div>
                                <div className='published-on'>{date}</div>
                                <div className='author-image' style={setBgImage(author.picture)} ></div>
                                <div className='author-details'>
                                    <span id='author-name'>{author.name}</span>
                                    <div id='card-category'>{info.categories[0]}</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            )
        }))

    }

    const knowMoneyDict = option => ({
        shortarticle: 'Articles',
        video: 'Videos',
        knowmoneyfacts: 'Facts & Hacks',
        infographics: 'Infographics',
        trending: 'Money Meanings'
    }[option])

    const knowMoneyOptions = data && createMapKey(Object.keys(data).map(option => {
        return (
            <div className={(link === option) ? 'selected' : ''} onClick={() => setLink(option)}>  {knowMoneyDict(option)} </div>
        )
    }))

    return (
        <div className="section-five">
            <div className='know-money-container'>
                <h2> Get to Know Money Better </h2>
                <div className='know-money-container__options-wrapper'>
                    {knowMoneyOptions}
                </div>
                <div className='know-money-container__api-results'>
                    {getImagesByCategory(link)}
                </div>
                <div className='know-money-container__btn'><button> Learn More About Money </button> </div>
            </div>
        </div>
    )
}

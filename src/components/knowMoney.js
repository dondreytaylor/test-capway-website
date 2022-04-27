import React, { useState, children, Children } from 'react'

export const KnowMoney = ({ data }) => {

    const [link, setLink] = useState('shortarticle')
    const [image, setImage] = useState([])
    const liveLink = { color: "#00ace2", borderBottomColor: "#00ace2" }

    const getImagesByCategory = (category) => {
        return data && data[category] && Children.toArray(data[category].slice(0, 4).map(info => {
            const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(info.publish_date))
            const setBgImage = (imageUrl) => ({ backgroundImage: `url(${imageUrl})` })
            const author = info.user
            return (
                <ul id='know-money-card'>
                    <li>
                        <a>
                            <div id='bg-image' style={setBgImage(info.thumbnail_url)}></div>
                            <div id='bg-overlay'></div>
                            <div id='card-content'>
                                <div id='read-time'></div>
                                <div id='card-details'>
                                    <div id='card-title'>{info.title}</div>
                                    <div id='published-on'>{date}</div>
                                    <div id='author-image' style={setBgImage(author.picture)} ></div>
                                    <div id='author-details'>
                                        <span id='author-name'>{author.name}</span>
                                        <div id='card-category'>{info.categories[0]}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            )
        }))

    }

    console.log(data[link] && data[link].slice(0, 4).map(x => x))

    return (
        <div id="know-money-container">
            <div className='inner'>
                <h2> Get to Know Money Better </h2>
                <div id='link-wrapper'>
                    <div className='links' style={(link === 'shortarticle') ? liveLink : { visibility: "visible" }} onClick={() => setLink('shortarticle')}>  Articles</div>
                    <div className='links' style={(link === 'video') ? liveLink : { visibility: "visible" }} onClick={() => setLink('video')} > Videos</div>
                    <div className='links' style={(link === 'knowmoneyfacts') ? liveLink : { visibility: "visible" }} onClick={() => setLink('knowmoneyfacts')}> Facts & Hacks</div>
                    <div className='links' style={(link === 'infograpics') ? liveLink : { visibility: "visible" }} onClick={() => setLink('infograpics')}> Infographics</div>
                    <div className='links' style={(link === 'trending') ? liveLink : { visibility: "visible" }} onClick={() => setLink('trending')}> Money Meanings</div>
                </div>
                <div id='api'>
                    {getImagesByCategory(link)}
                </div>
                <div className='btn'><button> Learn More About Money </button> </div>
            </div>
        </div>
    )
}

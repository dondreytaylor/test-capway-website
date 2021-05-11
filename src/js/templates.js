/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import _ from 'lodash';
import moment from 'moment';

// Use custom template delimiters
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

const videoTemplate = _.template(`
    <article class="article-card-container video-card" style="background-image: linear-gradient(transparent,#000), url('{{ thumbnail_url }}')">
        <div class="video-play-button"></div>
        <div class="content-container">
            <div class="card-title-container">
                <a href="javascript:void(0)" class="card-title">
                    {{ title }}
                </a>
            </div>
            <div class="card-date">
                {{ date }}
            </div>
        </div>
        <div class="card-author-container">
        <div class="card-icon" style="background-image: url('{{ user.picture }}')"></div>
            {{ user.name }}
        </div>
    </article>
`);

function createVideoCard(article) {
    const date = moment(article._created_at).format('MMMM Do, YYYY');
    return videoTemplate({ ...article, date });
}

const articleTemplate = _.template(`
<article class="article-card-container shortarticle-card" style="background-image: linear-gradient(transparent,#000), url('{{ thumbnail_url }}')">
    
    <div class="content-container">
        <div class="card-title-container">
            <a href="javascript:void(0)" class="card-title">
                {{ title }}
            </a>
        </div>
        <div class="card-date">
            {{ date }}
        </div>
    </div>
    <div class="card-author-container">
    <div class="card-icon" style="background-image: url('{{ user.picture }}')"></div>
        {{ user.name }}
    </div>
    </article>
`);

function createArticleCard(article) {
    const date = moment(article._created_at).format('MMMM Do, YYYY');
    return articleTemplate({ ...article, date });
}

const infographicsTemplate = _.template(`
<article class="article-card-container infographics-card" style="background-image: linear-gradient(transparent,#000), url('{{ thumbnail_url }}')">
    
    <div class="content-container">
        <div class="card-title-container">
            <a href="javascript:void(0)" class="card-title">
                {{ title }}
            </a>
        </div>
        <div class="card-date">
            {{ date }}
        </div>
    </div>
    <div class="card-author-container">
    <div class="card-icon" style="background-image: url('{{ user.picture }}')"></div>
        {{ user.name }}
    </div>
    </article>
`);

function createInfographicsCard(article) {
    const date = moment(article._created_at).format('MMMM Do, YYYY');
    return infographicsTemplate({ ...article, date });
}

const moneyFactsTemplate = _.template(`
<article class="article-card-container knowmoneyfacts-card" style="background-image: linear-gradient(transparent,#000), url('{{ thumbnail_url }}')">
    
    <div class="money-facts-container content-container">
        <div class="card-title-container">
            <a href="javascript:void(0)" class="card-title">
                {{ title }}
            </a>
        </div>
        <div class="card-date">
            {{ date }}
        </div>
    </div>
    <div class="card-author-container">
    <div class="card-icon" style="background-image: url('{{ user.picture }}')"></div>
        {{ user.name }}
    </div>
    </article>
`);

function createMoneyFactsCard(article) {
    const date = moment(article._created_at).format('MMMM Do, YYYY');
    return moneyFactsTemplate({ ...article, date });
}

export {
    createVideoCard,
    createArticleCard,
    createInfographicsCard,
    createMoneyFactsCard,
};

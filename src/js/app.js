/* eslint-disable no-unused-vars */
import _ from 'lodash';
import moment from 'moment';
import {
    createVideoCard,
    createArticleCard,
    createInfographicsCard,
    createMoneyFactsCard,
} from './templates';

/* constants and configurable values */
const apiUrl = 'https://gateway.dev.cpwys.co/api/v1/content/fetch/learnmoney';
let selectedArticleView = 'video';

/* page interactions example */
const emailSubmitButton = document.querySelector('#email-input-button');
const emailInputField = document.querySelector('#email-input');
const moneySectionButton = document.querySelector('#money-submit-button');

emailSubmitButton.addEventListener('click', (event) => {
    emailInputField.value = '';
});

/* populate and script articles section */
const articleSectionSelector = document.querySelector('#article-selector-container');
const articleCardContainer = document.querySelector('#article-content-container');
const articleSectionOptions = document.querySelectorAll('.article-option');

/* helper functions (could export to 'utility.js' module if this list gets big enough) */
const getJsonApi = (url) => {
    return fetch(url).then(res => res.json());
};

function populateArticleSection() {
    let articles = {};
    const numberOfArticlesToDisplay = 4;
    const sections = ['video', 'shortarticle', 'knowmoneyfacts', 'infographics'];
    const sectionTemplates = {
        video: createVideoCard,
        shortarticle: createArticleCard,
        infographics: createInfographicsCard,
        knowmoneyfacts: createMoneyFactsCard,
    };

    getJsonApi(apiUrl)
        .then((json) => {
            // populate articles sections
            articles = json;
            console.log(articles);

            /*
               pick Videos, Articles, Facts & Hacks, Infographics out of (articles) obj
               pass each into same or similar template, add a class specifying type
               add class to "#article-content-container" (maybe ".display-infographics" for example?),
               the css for which contains nested .video {display: none}, .info {display: none}, etc.,
               only displaying that type that is selected
            */

            sections.forEach((section) => {
                const limit = (numberOfArticlesToDisplay < articles[section].length)
                    ? numberOfArticlesToDisplay
                    : articles[section].length;

                for (let i = 0; i < limit; i++) {
                    const article = articles[section][i];
                    const element = sectionTemplates[section](article);
                    console.log(`creating Article ${i}`, section, article);
                    articleCardContainer.innerHTML += element;
                }
            });
        })
        .catch((error) => {
            // handle error
        });
}

articleSectionSelector.addEventListener('click', (event) => {
    const { target } = event;
    articleCardContainer.classList.toggle(selectedArticleView);

    if (target.classList.contains('article-option')) {
        selectedArticleView = { ...target.dataset }.option;
        articleSectionOptions.forEach((element) => {
            element.classList.remove('selected');
        });
        target.classList.add('selected');
    }

    articleCardContainer.classList.toggle(selectedArticleView);

    console.log(`selected view :: ${selectedArticleView}`);
});

document.addEventListener('DOMContentLoaded', populateArticleSection);

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

/* page interactions */
const emailSubmitButton = document.querySelector('#email-input-button');
const emailInputField = document.querySelector('#email-input');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const fullScreenNav = document.querySelector('#nav-cover');
const fullScreenNavCloseButton = document.querySelector('#nav-close');
hamburgerMenu.addEventListener('click', (event) => {
    fullScreenNav.classList.remove('hidden');
});

fullScreenNavCloseButton.addEventListener('click', (event) => {
    fullScreenNav.classList.add('hidden');
});

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

            sections.forEach((section) => {
                const limit = (numberOfArticlesToDisplay < articles[section].length)
                    ? numberOfArticlesToDisplay
                    : articles[section].length;

                for (let i = 0; i < limit; i++) {
                    const article = articles[section][i];
                    const element = sectionTemplates[section](article);
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
});

document.addEventListener('DOMContentLoaded', populateArticleSection);

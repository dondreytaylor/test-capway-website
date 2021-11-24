const links = document.getElementsByTagName('a');
links.href = 'javascript:void(0)';

async function fetchMedia(type) {
  const url =
    'https://gateway.dev.cpwys.co/api/v1/content/fetch/learnmoney';

  const gridContainer = document.getElementById('grid-container');

  fetch(url)
    .then(response => response.json())
    .then(result => {
      let data = result;

      return data[type];
    })
    .then(result => result.slice(0, 4))
    .then(items => (

      gridContainer.innerHTML = items.map(item =>
        `<div class= "grid__item">
          <div class="thumbnail" style="background: linear-gradient(to bottom, transparent 0%, black 100%), url(${item.thumbnail_url}); background-position: top center; background-size: cover">
              <div class="thumbnail-text">
                  <h3>${item.title}</h3>
                  <h4>${moment(item.publish_date).format('LL')}</h4>
              </div>
          </div>

          <div class="footer">
              <div>
                  <div class="author-image" style="background: url(${item.user.picture}) no-repeat center center / cover">
                  </div>
              </div>

              <div>      
                  <p class="author-name">${item.user.name}</p>
                  
                  <div class="category-container">
                    <p class="author-category">${item.categories[0]}</p>
                  </div>
              </div>
          </div>
        </div>`).join('')
    ))
    .catch(error => console.log(error));
}

const contentCategories = document.getElementsByClassName('category');

Array.from(contentCategories).forEach(category => {
  category.addEventListener('click', function () {
    fetchMedia(category.dataset.type);
  })
});

function handleSubmit() {
  const inputField = document.getElementById('email-input');
  inputField.value = '';
}

document.onload = fetchMedia('shortarticle');
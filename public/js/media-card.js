class MediaCard extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  set mediaItem(item) {
    this.root.innerHTML = `
            <style>
            .card {
                height: 22rem;
                width: 18rem;
                display: flex;
                flex-direction: column;
                border-radius: 0.5rem;
                box-shadow: 0 2px 4px #0000001a;
                margin: .25rem;

              }
              
              .category {
                border-radius: 1.7rem;
                background-color: #a9e2bc;
                text-align: center;
                padding: 0.2rem;
              }
              .card_content {
                width: 100%;
                height: 18.5rem;
                background-image: url("${item.thumbnail_url}");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                position: relative;
                background-color: #000;
              }

              .content_overlay {
                width: 100%;
                height: 100%;
                z-index: 0;
                background-position: top center;
                background-repeat: no-repeat;
                background-size: cover;
                background: linear-gradient(transparent,#000000);
                position: absolute;
                left: 0;
                top: 0;
              }

              .content_text {
                color: #fff;
                position: absolute;
                bottom: 10px;
                left: 10px;
                z-index: 9;

              }

              .content_date {
                font-size: .75rem;
                color: #9b9b9b;
              }
              
              .card_author {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0.2rem;
              }
              
              .card_author_avatar {
                width: 1.7rem;
                height: 1.7rem;
                border-radius: 1.7rem;
                background-image: url("${item.user.picture}");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;
                margin: .5rem;
              }

            </style>
            <div class="card">
                <div class="card_content">
                  <div class="content_text">
                    <strong>${item.title}</strong>
                    <div class="content_date">${item.publish_date}</div>
                  </div>
                  <div class="content_overlay"></div>
                </div>
                <div class="card_author">
                    <div class="card_author_avatar"></div>
                    <div class="author_text">
                        <div>${item.user.name}</div>
                        <div class="category">${item.categories[0]}</div>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("media-card", MediaCard);

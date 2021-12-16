import "./media-card.js";
let remoteData = {};
let selectedTab = "";
const initialTab = "shortarticle";
const initialTabId = "#articles_tab";

//this is a little rough

window.addEventListener("load", () => {
  axios
    .get("https://gateway.dev.cpwys.co/api/v1/content/fetch/learnmoney")
    .then((resp) => {
      remoteData = resp.data;
      setSelectedTab(initialTabId, initialTab);
    })
    .catch((err) => {
      console.error(err);
    });
  //add tab selector events
  document
    .querySelector("#articles_tab")
    .addEventListener("click", () =>
      setSelectedTab("#articles_tab", "shortarticle")
    );
  document
    .querySelector("#videos_tab")
    .addEventListener("click", () => setSelectedTab("#videos_tab", "video"));
  document
    .querySelector("#facts_tab")
    .addEventListener("click", () =>
      setSelectedTab("#facts_tab", "knowmoneyfacts")
    );
  document
    .querySelector("#info_tab")
    .addEventListener("click", () =>
      setSelectedTab("#info_tab", "infographics")
    );
  document
    .querySelector("#money_tab")
    .addEventListener("click", () => setSelectedTab("#money_tab", "trending"));
});

function setTabClasses(tabId) {
  const tabs = document.getElementsByClassName("tab");
  for (let t in tabs) {
    if (tabs[t].classList && tabs[t].classList.contains("active_tab")) {
      tabs[t].classList.remove("active_tab");
    }
  }
  document.querySelector(tabId).classList.add("active_tab");
}

function setItems(items) {
  const cardContainer = document.querySelector(".card_container");
  cardContainer.innerHTML = "";

  items.slice(0, 4).forEach((i) => {
    const el = document.createElement("media-card");
    el.mediaItem = i;
    cardContainer.appendChild(el);
  });
}

export function setSelectedTab(tabId, tabContentKey) {
  selectedTab = tabContentKey; //shortarticle | video | trending | infographics | knowmoneyfacts
  setTabClasses(tabId);
  setItems(remoteData[selectedTab]);
}

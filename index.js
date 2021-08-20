"use strict";

/************************************************** CLEAR FORM AFTER SUBMIT **********************************************************/

function submitClearForm() {
  document.getElementById("inputField").value = "";
}

/************************************************** FUNCTIONS TO LOAD DATA **********************************************************/

const displayOnload = document.getElementById("listofVid");
displayOnload.addEventListener("onload", fetchData());
let result;

async function fetchData() {
  let data = await fetch(
    "https://gateway.dev.cpwys.co/api/v1/content/fetch/learnmoney"
  );

  result = await data.json();
    console.log(result);
  let lists = "";

  for (let x of result.shortarticle.slice(0, 3)) {
    let date = new Date(x._created_at).toLocaleString("en-us", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });
    let images = `<img width="340px" height="200px" src= ${x.thumbnail_url}> `;

    lists += `<div class="card">  ${images} </img> <div class="title"> ${x.title}</div>  <div class="date">  ${date}  </div> </div> <br> `;
  }
  //   }

  displayOnload.innerHTML = lists;
}



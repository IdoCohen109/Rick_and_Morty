//Catch Elements
const $mainSec = document.getElementById("main-section");
// const $dailyImageSection = document.getElementById("daily-Image-section");
// const $dailyImage = document.getElementById("dailyImg");
// const $dailyVideo = document.getElementById("dailyVideo");

//Setting URL
const url = "https://rickandmortyapi.com/api/character/"
// const dailyImgUrl = "https://api.nasa.gov/planetary/apod?api_key=d5eHDjw1Cvgc8WLIW7J1FLcPR1cKlZgT4H7XCnpG"


function createCard({
    name,
    species,
    image,
    status
} = {}) {
    return `
    <div class="card post-card-wrap">
    <img src="${image}" class="card-img-top"
      alt="post image">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Name: ${name}</h5>
        <h5>species: ${species}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item ${status=="Alive" ? "online-bg" : "offline-bg"}">${status=="Alive" ? 'Alive' : 'Dead'}</li>
    </ul>
    </div>
</div>`
}


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
}



async function render() {
    const data = await getData();
    $mainSec.innerHTML = "";
    data.results.forEach(user => {
        $mainSec.innerHTML += createCard(user);
    });
}


// setBackgroundImg();
render();
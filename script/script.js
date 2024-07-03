const apiKey = `MFZsEMlEpPYFlAdxlHuxO50XjwEfptgWyeFSsARSLm4`;

var formContainer = document.getElementById("form-container");
var resultImgs = document.getElementById("result-imgs");
var loadBtn = document.getElementById("load-btn");
var keyword = document.getElementById("input-box");

var page = 1;

var searchItem = "";

async function searchImages() {

    if (page === 1) {
        resultImgs.innerHTML = "";
    }

    searchItem = keyword.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchItem}&client_id=${apiKey}&per_page=12`;
    response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.map((result) => {
        const img = document.createElement('img');
        img.src = result.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";
        imgLink.appendChild(img);
        resultImgs.appendChild(imgLink);
    })

    loadBtn.style.display = "block";

}

formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})


loadBtn.addEventListener("click", () => {
    page++;
    searchImages();
})
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://meowfacts.herokuapp.com")
        .then(response => response.json())
        .then(data => catData(data))
        .catch(error => console.error("Error fetching cat information:", error));
});

function catData(cat) {
    const catInformation = document.getElementById("cat");
    const card = document.createElement("div");
    const cardElement = `
        <div class="card-body">
            <p>Do you know: ${cat.data}</p>
            <button id="refreshButton" onclick="newInfo()">Click to see another cuteness</button>
        </div>
    `;
    card.innerHTML = cardElement;
    catInformation.appendChild(card);
}

function newInfo() {
    window.location.reload();
};


const div = document.getElementsByTagName("div")[0];
const span = document.getElementsByTagName("")[0];

const changecolor = (event) => {
    event.target.style.color = `rgb(${Math.random()* 256},${Math.random() *256},${Math.random()* 256})`;
};
//console.log(getComputedStyle(event.target).color);

const removecolor =(event) =>{
    event.target.style.color = "";
};

div.addEventListener("mouseover", changecolor);
span.addEventListener("mouseover",changecolor);

div.addEventListener("mouseout", removecolor);
span.addEventListener("mouseout",removecolor);


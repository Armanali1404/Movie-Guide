let button = document.querySelector("#button");
let movieDetaile = document.querySelector("#movie-detaile");
let form = document.querySelector("form");
let img = document.querySelector("#img");
let infor = document.querySelector("#infor");
let search = document.querySelector("#search-movie");
let clas1 = document.getElementsByClassName(".class-1");
let clas2 = document.getElementsByClassName(".class-2");

const movieData = (data) => {
  const {
    Poster,
    Title,
    Released,
    Runtime,
    Actors,
    BoxOffice,
    Genre,
    imdbRating,
    Plot,
  } = data;

  const movieElement = document.createElement("div");
  const movieElements = document.createElement("div");
  img.innerHTML = `<img src="${Poster}"
        style="border: 2px solid black;
            width: 300px;
            height: 400px;">`;
  infor.innerHTML = `
    <p style="text-align: center;
            font-size: 2rem;
            ">${Title}</p>
    <p style="margin: auto;
            margin-block: 20px;
            margin-top: 5px;
            width: 200px;
            height: 15px;
            padding: 5px;
            text-align: center;
            font-size: 20px">&star;${imdbRating}</p>
    <p id="gen" style="background: black;
            color: white;
            width: 250px;
            height: 20px;
            padding: 5px;
            text-align: center;
            border-radius: 5px;
            margin: auto;">${Genre}</p>
    <br>
    <p><strong>Released Date:</strong> ${Released}</p>
    <br>
    <p><strong>Duration:</strong> ${Runtime}</p>
    <br>
    <p><strong>Cast:</strong> ${Actors}</p>
    <br>
    <p><strong>Collection:</strong> ${BoxOffice}</p>
    <br>
    <p><strong>Plot:</strong> ${Plot}</p>`;

  imgs.appendChild(movieElement);
  infors.appendChild(movieElements);
};

const myApiKey = "6682055c";
const getFact = async (movie) => {
  let response = await fetch(
    `http://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`
  );
  let data = await response.json();
  movieData(data);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const movieName = input.value.trim();
  console.log(movieName);
  if (movieName) {
    getFact(movieName);
  }
});

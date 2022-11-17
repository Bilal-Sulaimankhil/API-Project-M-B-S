// nasa search
// planets
// fetch("https://images-api.nasa.gov/search?q=mars%2011...")
//   .then((response) => response.json)()
//   .then((json) => console.log(json));

let content = document.querySelector("#content");
let dropdownMenu = document.querySelector(".dropdown");

dropdownMenu.addEventListener("click", (e) => {
  document.querySelector("#we").style.display = "none";
  document.querySelector("#galaxy").style.display = "none";
  document.querySelector("#planet_content").style.display = "block";

  let selectedPlanet = e.target.innerText;
  fetch(`https://images-api.nasa.gov/search?q=${selectedPlanet}%2011...`)
    .then((response) => response.json())
    .then((data) => {
      let imageUrl1 = data.collection.items[0].links[0].href;
      let imageUrl2 = data.collection.items[1].links[0].href;
      let imageUrl3 = data.collection.items[2].links[0].href;

      for (let index = 0; index < 6; index++) {
        const element = array[index];
      }
      imgTag1 = document.querySelector("#planet_image1");
      imgTag2 = document.querySelector("#planet_image2");
      imgTag3 = document.querySelector("#planet_image3");
      imgTag1.setAttribute("src", imageUrl1);
      imgTag2.setAttribute("src", imageUrl2);
      imgTag3.setAttribute("src", imageUrl3);
    });
});

// daily photo
// fetch(
//   "https://api.nasa.gov/planetary/apod?api_key=BkF3xesYsarNQpqzChE7TeVb99xdob6GnEdWdfaE"
// )
//   .then((response) => response.json())
//   .then((json) => console.log(json));

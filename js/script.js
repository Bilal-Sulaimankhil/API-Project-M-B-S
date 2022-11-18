let content = document.querySelector("#planet_content");
let dropdownMenu = document.querySelector(".dropdown");
let searchInput = document.querySelector("#search");

dropdownMenu.addEventListener("click", (e) => {
  // I clean the content before filling
  content.innerHTML = "";

  document.querySelector("#we").style.display = "none";
  document.querySelector("#galaxy").style.display = "none";
  document.querySelector("#planet_content").style.display = "flex";

  let selectedPlanet = e.target.innerText;
  document.querySelector("#planets").innerText = selectedPlanet;
  fetch(`https://images-api.nasa.gov/search?q=${selectedPlanet}%2011...`)
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < 9; index++) {
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        image.setAttribute("src", data.collection.items[index].links[0].href);
        const figCaption = document.createElement("figcaption");
        figCaption.innerText = data.collection.items[index].data[0].title;
        const p = document.createElement("p");
        p.innerText = data.collection.items[index].data[0].description;

        figure.appendChild(image);
        figure.appendChild(figCaption);
        figure.appendChild(p);
        content.appendChild(figure);
      }
    });
});

searchInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    // I clean the content before filling
    content.innerHTML = "";

    document.querySelector("#we").style.display = "none";
    document.querySelector("#galaxy").style.display = "none";
    document.querySelector("#planet_content").style.display = "flex";

    let value = e.target.value;
    searchInput.value = "";

    fetch(`https://images-api.nasa.gov/search?q=${value}%2011...`)
      .then((response) => response.json())
      .then((data) => {
        if (data.collection.items.length > 0) {
          for (let index = 0; index < 9; index++) {
            const figure = document.createElement("figure");
            const image = document.createElement("img");
            image.setAttribute(
              "src",
              data.collection.items[index].links[0].href
            );
            const figCaption = document.createElement("figcaption");
            figCaption.innerText = data.collection.items[index].data[0].title;
            const p = document.createElement("p");
            p.innerText = data.collection.items[index].data[0].description;

            figure.appendChild(image);
            figure.appendChild(figCaption);
            figure.appendChild(p);
            content.appendChild(figure);
          }
        } else {
          const h1 = document.createElement("h1");
          h1.innerText = "No content";
          h1.setAttribute("class", "no-content");
          document.querySelector("body").style.backgroundSize = "cover";
          content.appendChild(h1);
        }
      });
  }
});

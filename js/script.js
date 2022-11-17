// nasa search
// planets
// fetch("https://images-api.nasa.gov/search?q=mars%2011...")
//   .then((response) => response.json)()
//   .then((json) => console.log(json));

let content = document.querySelector("#planet_content");
let dropdownMenu = document.querySelector(".dropdown");

dropdownMenu.addEventListener("click", (e) => {
    content.childNodes.forEach((child) => child.remove());
    document.querySelector("#we").style.display = "none";
    document.querySelector("#galaxy").style.display = "none";
    document.querySelector("#planet_content").style.display = "flex";
    document.querySelector("#we").style.display = "none";
    let selectedPlanet = e.target.innerText;
    fetch(`https://images-api.nasa.gov/search?q=${selectedPlanet}%2011...`)
        .then((response) => response.json())
        .then((data) => {
            for (let index = 0; index < 6; index++) {
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
    // figure.appendChild(image);
    // figure.appendChild(figCaption);
    // figure.appendChild(p);
    // content.appendChild(figure);

    // imgTag1 = document.querySelector("#planet_image1");
    // imgTag2 = document.querySelector("#planet_image2");
    // imgTag3 = document.querySelector("#planet_image3");
    // imgTag1.setAttribute("src", imageUrl1);
    // imgTag2.setAttribute("src", imageUrl2);
    // imgTag3.setAttribute("src", imageUrl3);
});
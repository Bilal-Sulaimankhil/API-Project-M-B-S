/*let arr = []

let sect = document.getElementsByTagName("section")[0]

fetch("https://images-api.nasa.gov/search?q=mars%2011...")
    .then((response) => response.json())
    .then((data) => {
        debugger
        arr = data.collection.items;
        console.log(data)
        sect.innerHTML = arr[0].data[0].description
        let img = document.createElement("img")
        img.setAttribute("src", arr[0].links[0].href)
        sect.appendChild(img)
    })
    .catch(err => {
        console.log(`error ${ err }`)
        console.log(arr.length)
            // sect.innerHTML = "Section";

    });
for (let i = 0; i < arr.length; i++) {

}*/

let renderThumbnails = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    let sect = document.getElementsByTagName("section")[0];
    sect.innerHTML = '';
    for (let item of data.collection.items) {
        let img = document.createElement("img")
        img.setAttribute("src", item.links[0].href)
        img.setAttribute("width", 300)
        sect.appendChild(img)
    }


    // for (let value of Object.values(data)) {

    // }
    // Object.values(data).forEach((value) => {

    // })
    // for (let key of Object.keys(data)) {
    //     let value = data[key];
    // }
    // TODO: next + previous button 
}
renderThumbnails("https://images-api.nasa.gov/search?q=mars%2011...");
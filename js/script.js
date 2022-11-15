let arr = []
fetch("https://images-api.nasa.gov/search?q=mars%2011")
    .then((response) => response.json())
    .then((data) => {
        arr = data;
        console.log(data)

        let sect = document.getElementsByTagName("section")[0]
        sect.innerHTML = "Section";
        for (let i = 0; i < data.length; i++) {

            sect.innerHTML = arr.collection.items[0].links[0];
            console.log(data.length)
        }
    });
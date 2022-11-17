
// nasa search
fetch("https://images-api.nasa.gov/search?q=mars%2011...")
  .then((response) => response.json())
  .then((json) => console.log(json));

// daily photo
fetch(
  "https://api.nasa.gov/planetary/apod?api_key=BkF3xesYsarNQpqzChE7TeVb99xdob6GnEdWdfaE"
)
  .then((response) => response.json())
  .then((json) => console.log(json));


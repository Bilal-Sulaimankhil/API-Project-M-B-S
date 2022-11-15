fetch("https://images-api.nasa.gov/search?q=mars%2011...")
  .then((response) => response.json())
  .then((json) => console.log(json));

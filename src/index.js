 document.addEventListener('DOMContentLoaded', (event) => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    json.message.forEach(dog => getImage(dog));
  });

    function getImage(url) {
      let li = document.createElement("IMG");
      document.getElementById('dog-image-container').appendChild(li);
      li.src = url;
    };

});

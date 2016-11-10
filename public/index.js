var mockPhrase = (function() {
  var input = document.getElementsByTagName('input')[0];

  input.addEventListener('input', function(event) {
    sendRequest(event.target.value);
  });

  function sendRequest(phrase) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/search?q=' + phrase);
    xhr.addEventListener('load', function() {
      document.getElementById('results').innerHTML = buildOptionsList(JSON.parse(this.responseText));
    });
    xhr.send();
  }

  function buildOptionsList(words) {
    return words.map(function(word) { return '<option value="' + word + '">'; }).join('');
  }

  return {
    buildOptionsList : buildOptionsList
  };

})();

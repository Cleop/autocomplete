(function() {
  var input = document.getElementsByTagName('input')[0];
  var phrase = [];

  input.addEventListener('keydown', function(event) {
    if(event.key === 'Backspace') {
      phrase.pop();
    } else {
      phrase.push(event.key);
    }
    sendRequest(phrase.join(''));
  });

  function sendRequest(phrase) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/search?=' + phrase);
    xhr.addEventListener('load', function(event) {
      var datalist = document.getElementById('results');
      datalist.innerHTML = buildOptionsList(JSON.parse(this.responseText));
    });
    xhr.send();
  }

  function buildOptionsList(words) {
    var innerHTML = '';
    words.forEach(function(word) {
      innerHTML += '<option value="' + word +'">';
    });
    return innerHTML;
  }

})();

var selectedItem;
var word;
var selectorText;
var sentences;
var searchWord;

(function() {
  window.onload = function(){

    var people = [
      { name: '신동엽', rate: 70, active: true},
      { name: '허지웅', rate: 80, active: true},
      { name: '성시경', rate: 75, active: true},
      { name: '유세윤', rate: 120, active: true}
    ];


    console.log(people.sort(function (pre, post) {
      return pre.name < post.name ? -1 : pre.name > post.name ? 1 : 0;
    }));




    var fruits = ['apple', 'banana', 'orange', 'melon', 'peer'];
    var wholeText;

    selectedItem = fruits.find(function(fruit) {
      return fruit === 'banana';
    });

    wholeText = fruits.reduce(function (total, currentValue, index, array) {
      if(currentValue === "melon") {
        return total + currentValue;
      } else {
        return " ";
      }
    });



    selectorText = document.querySelector('p').innerText;
    sentences = selectorText.split('. ');

    searchWord = function() {
      var results = [];

      word = document.getElementById('searchText').value;
      // sentences.forEach(function (sentence) {
      //     if(sentence.search(word) > -1) {
      //       results.push(sentence);
      //     }
      // });

      // results = sentences.map(function (sentence) {
      //   if((sentence.search(word) !== -1) && (sentence !== undefined)) {
      //     return sentence;
      //   }
      // });

      results = sentences.filter(function (sentence) {
        return sentence.search(word) > -1;
      });

      if(results.length > 0) {
        results.forEach(function (result) {
          var addSentence = document.createElement('p');
          var addText = document.createTextNode(result);
          addSentence.appendChild(addText);
          document.getElementById('context').append(addSentence);
        });
      }
    };
  };
})();
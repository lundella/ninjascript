(function () {
  function solve(n, p){
    if(!(n%2)) {
      n += 1;
    }
    var fromStartPage = p;
    var fromEndPage = n-p;
    var turnsOfPages;

    if(fromStartPage < fromEndPage) {
      turnsOfPages = fromStartPage/2;
    } else {
      turnsOfPages = fromEndPage/2;
    }

    console.log(Math.floor(turnsOfPages));
  }

  solve(5, 5)
})();

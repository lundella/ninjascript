(function () {
  function countingValleys(n, s) {
    var upDownList = s.split('');
    var valley = 0;
    var count = 0;
    var flag = false;

    upDownList.forEach(function (step) {
      if(step === 'U') {
        valley++;
      } else {
        valley--;
      }

      if(!flag && (valley < 0)) {
        flag = true;
      } else if (valley >= 0 && (flag === true)){
        flag = false;
        count++
      }
    });

    console.log(count);
  }

  countingValleys(8, "UDDDUDUU");
  countingValleys(12, "DDUUDDUDUUUD");
})();

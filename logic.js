function convertToRoman(num) {

    let quotient;
    let remainder = num;
    let romanNumber = "";
    let numPairs = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
  
    while (remainder != 0) {
      numPairs.forEach(function(pair) {
          if (remainder >= pair[0]) {
              quotient = Math.floor(remainder / pair[0]);
              remainder = remainder % pair[0];
              for (let i = 0; i < quotient; i++) {
                  romanNumber = romanNumber.concat(pair[1]);
              }
          }
      });
   }
  
    return romanNumber;
  }



document.addEventListener("DOMContentLoaded", function(){  // this event listener makes sure the code inside will run only after the DOM content (html structure) is loaded 

    let convertButton = document.getElementById("convertNumber");    

    convertButton.addEventListener("click", function() {
    
        let input = document.getElementById("inputNumber");
        let output = document.getElementById("output");
        output.value = "";    // reset with new "click" 

        let regex = /^[0-9]+$/g;  // only numbers are accepted
        if (regex.test(input.value)) {
            output.value = convertToRoman(input.value);
        } else {
            alert("Wrong input -> please provide a number");
            input.value = "";
        }
    });
});   

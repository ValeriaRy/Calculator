"use strict";

(function() {
    window.onload = function() {
        var calculator = new Calculator();
        var currentNumberOnDisplay = "";
        
        onclick = function(event) {
            var valueButton = event.target.value;
            var text = document.getElementById("text");
            text.value = currentNumberOnDisplay;
    
            if (valueButton === "•") {
                if (countPoint(text.value)) {
                    text.value += ".";
                }
                
            } else if (!(isNaN(valueButton))) {
                text.value += valueButton;
                currentNumberOnDisplay +=valueButton;
            
                
            } else {
                switch (valueButton) {
                    case "+":
                    case "−":
                    case "×":
                    case "÷":
                        calculator.setFirstNumber(+text.value);
                        calculator.action = valueButton;
                        currentNumberOnDisplay = "";
                        break;
                    case "√":
                        calculator.setFirstNumber(+text.value);
                        text.value = calculator.squareRoot();
                        currentNumberOnDisplay = "";
                        break;
                    case "C":
                        location.reload();
                        break;
                    case "=":
                        calculator.setSecondNumber(+text.value);
                        if (calculator.action === "+") {
                            text.value = calculator.addition();
                        }
                        
                        if (calculator.action === "−") {
                            text.value = calculator.subtraction();
                        }
                        
                        if (calculator.action === "×") {
                            text.value = calculator.multiplication();
                        }
                        
                        if (calculator.action === "÷") {
                            text.value = calculator.division();
                        }
                        currentNumberOnDisplay = "";
                        break;
                    case "%":
                        calculator.setSecondNumber(+text.value);
                        if (calculator.action === "+") {
                            text.value = calculator.additionPercent();
                        }
                        
                        if (calculator.action === "−") {
                            text.value = calculator.subtractionPercent();
                        }
                        
                        if (calculator.action === "×") {
                            text.value = calculator.multiplicationPercent();
                        }
                        
                        if (calculator.action === "÷") {
                            text.value = calculator.divisionPercent();
                        }
                        currentNumberOnDisplay = "";
                        break;
                }
            }
        };
        
        function countPoint(str) {
            var n = str.indexOf(".");
            if (n > -1) { 
                
                return false; 
            } else {
                
                return true;
            }
        } 
    };
})();



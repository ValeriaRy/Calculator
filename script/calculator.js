"use strict";

function Calculator() {
    
    var HUNDREDTH_PART = 0.01;
    var FULL_PERCENT = 100;
    var firstNumber, secondNumber;
    
    this.action = "";

    this.setFirstNumber = function(a) {
        firstNumber = a;
    };
    
    this.setSecondNumber = function(b) {
        secondNumber = b;
    };
    
    this.getFirstNumber = function() {
        return firstNumber;
    };
    
    this.getSecondNumber = function() {
        return secondNumber;
    };
    
    this.addition = function() {
        
        return firstNumber + secondNumber;
    };
    
    this.subtraction = function() {
        
        return firstNumber - secondNumber;
    };
    
    this.multiplication = function() {
        
        return firstNumber * secondNumber;
    };
    
    this.division = function() {
        
        return firstNumber / secondNumber;
    };
    
    function calculatePercent() {
        return firstNumber * secondNumber * HUNDREDTH_PART; 
    }
    
    this.additionPercent = function() {
        
        return calculatePercent() + firstNumber;
    };
    
     this.subtractionPercent = function() {
        
        return firstNumber - calculatePercent();
    };
    
     this.multiplicationPercent = function() {
        
        return calculatePercent();
    };
    
     this.divisionPercent = function() {
        
        return (firstNumber * FULL_PERCENT) / secondNumber;
    };
    
    this.squareRoot = function() {
        
        return Math.sqrt(firstNumber);
    };
}
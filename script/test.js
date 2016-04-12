"use strict"

    var calculator = new Calculator();
    calculator.setFirstNumber(100);
    calculator.setSecondNumber(4);
    
    describe ("CALCULATIONS", function() {
        it("Получение первого числа", function() {
            assert.equal(calculator.getFirstNumber(), 100);
        });
        
        it("Получение второго числа", function() {
            assert.equal(calculator.getSecondNumber(), 4);
        });
        
        it("100 + 4 = 104", function() {
            assert.equal(calculator.addition(), 104);
        });
        
        it("100 - 4 = 96", function() {
            assert.equal(calculator.subtraction(), 96);
        });
        
        it("100 * 4 = 400", function() {
            assert.equal(calculator.multiplication(), 400);
        });
        
        it("100 / 4 = 25", function() {
            assert.equal(calculator.division(), 25);
        });
        
        it("100 + 4 % 104", function() {
            assert.equal(calculator.additionPercent(), 104);
        });
        
        it("100 - 4 % 96", function() {
            assert.equal(calculator.subtractionPercent(), 96);
        });
        
        it("100 * 4 % 4", function() {
            assert.equal(calculator.multiplicationPercent(), 4);
        });
        
        it("100 / 4 % 2500", function() {
            assert.equal(calculator.divisionPercent(), 2500);
        });
        
        it("корень из 100 = 10", function() {
            assert.equal(calculator.squareRoot(), 10);
        });
    });
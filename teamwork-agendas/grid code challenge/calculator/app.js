const primaryDisplay = document.querySelector('.primary-display');
const secondaryDisplay = document.querySelector('.secondary-display');
const buttons = document.querySelector('.buttons-container');
console.log(buttons);

class Calculator{
    constructor(primaryDisplay,secondaryDisplay){
        this.primaryDisplay = primaryDisplay;
        this.secondaryDisplay = secondaryDisplay;
        this.clear();
    }

    clear(){
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = '';
    }

    appendNumberandDecimal(numberAndDecimal){
        if(numberAndDecimal === '0'&&this.currentOperand === '0') return;
        if(numberAndDecimal ==='.' && this.currentOperand.includes('.')) return;
        if(numberAndDecimal === '.' && this.currentOperand !== '0' && this.currentOperand !=='0.' &&primaryDisplay.textContent==='0'){
            numberAndDecimal = '0.';
        }
        if(numberAndDecimal !=='0' && this.currentOperand === '0'&& numberAndDecimal !=='.'){
            this.currentOperand = numberAndDecimal;
            return;
        }

        this.currentOperand += numberAndDecimal;






    }
    updateDisplay(){
        primaryDisplay.textContent = this.currentOperand;
        primaryDisplay.textContent = primaryDisplay.textContent.slice(0,7);
        if(this.operation != null){
            secondaryDisplay.textContent = `${this.previousOperand} ${this.operation}`;
        }
        else{
            secondaryDisplay.textContent = '';
        }

    }
    optForOperation(op){
        if(this.currentOperand ==='') return;
        if(this.previousOperand){
            compute ();
        }

        this.operation = op;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';


    }

    compute(){
        let result = 0;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        switch(this.operation){
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case 'x':
                result = prev * current;
                break; 
            case '÷':
                result = prev / current;
                break; 
            default:
                return;   
            
        }

        this.currentOperand = result;
        this.operation = '';
        this.previousOperand = '';
    }
}



const calculator = new Calculator(primaryDisplay,secondaryDisplay);


buttons.addEventListener('click',(e)=>{
    if(e.target.classList.contains('number')){
        calculator.appendNumberandDecimal(e.target.textContent);
        calculator.updateDisplay();
    }

    if(e.target.classList.contains('decimal')){
        calculator.appendNumberandDecimal(e.target.textContent);
        calculator.updateDisplay();
    }

    if(e.target.classList.contains('ac')){
        calculator.clear();
        calculator.updateDisplay();
    }

    if(e.target.classList.contains('operator')){
        calculator.optForOperation(e.target.textContent);
        calculator.updateDisplay();
    }

    if(e.target.classList.contains('equal')){
        calculator.compute();
        calculator.updateDisplay();
    }

    
})
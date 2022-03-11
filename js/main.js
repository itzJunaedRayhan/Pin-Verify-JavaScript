
//  get pin:
function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + "").split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}


//  display generated pin
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}


//  handle Calculator button event
const buttonContainer = document.getElementById('digitContainer');
buttonContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        // handle backspace
        // handle clear
        if(digit === 'C'){
            const typedInput = document.getElementById('typedPin');
            typedInput.value = '';
        }
    }else{
        const typedInput = document.getElementById('typedPin');
        typedInput.value = typedInput.value + digit;
    }
});


//  verify pin
function verifyPin(){
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typedPin').value;
    if (pin === "") {
        displayMatchResult('none', 'block')
    }
    else if(pin === typedPin){
        displayMatchResult('block', 'none');
    }else{
        displayMatchResult('none', 'block')
    }
}


function displayMatchResult(correctStatus, inCorrectStatus){
    const correct = document.getElementById('CorrectPin');
    correct.style.display = correctStatus;
    const inCorrect = document.getElementById('inCorrectPin');
    inCorrect.style.display = inCorrectStatus;
}
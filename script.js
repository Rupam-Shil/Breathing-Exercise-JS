var circleProgress = document.querySelector('.circle-progress');
var numberOfBreaths = document.querySelector('.breath__input');
var start = document.querySelector('button');
var instructions = document.querySelector('.instructions');
var breathsText = document.querySelector('.breaths-text');
var breathsRemaining = 3;
// Watching for selected breaths
numberOfBreaths.addEventListener('change', function (e) {
    breathsRemaining = parseInt(numberOfBreaths.value);
    breathsText.innerText = breathsRemaining.toString();
});
//Grow/ Shrink
var growCircle = function () {
    circleProgress.classList.add('circle-grow');
    setTimeout(function () {
        circleProgress.classList.remove('circle-grow');
    }, 8000);
};
//Instruction
var breathTextUpdate = function () {
    breathsRemaining -= 1;
    breathsText.innerText = breathsRemaining.toString();
    instructions.innerText = 'Breath In';
    setTimeout(function () {
        instructions.innerText = 'Hold Breath';
        setTimeout(function () {
            instructions.innerText = 'Exhale Breath Slowly';
        }, 4000);
    }, 4000);
};
// Breathing App Function
var breathingApp = function () {
    var breathingAnimation = setInterval(function () {
        if (breathsRemaining === 0) {
            clearInterval(breathingAnimation);
            instructions.innerText =
                'Breathing session completed. Click "Begin" to start again';
            start.classList.remove('button-inactive');
            breathsRemaining = parseInt(numberOfBreaths.value);
            breathsText.innerText = breathsRemaining.toString();
            return;
        }
        growCircle();
        breathTextUpdate();
    }, 12000);
};
//Start Breathing
start.addEventListener('click', function (e) {
    start.classList.add('button-inactive');
    instructions.innerText = 'Get Relaxed, and ready to begin breathing';
    setTimeout(function () {
        instructions.innerText = 'Get Relaxed, and ready to begin breathing';
        setTimeout(function () {
            breathingApp();
            growCircle();
            breathTextUpdate();
        }, 2000);
    }, 2000);
});

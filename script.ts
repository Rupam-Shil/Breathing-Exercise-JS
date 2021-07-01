const circleProgress = document.querySelector(
	'.circle-progress'
) as HTMLDivElement;

const numberOfBreaths = document.querySelector(
	'.breath__input'
) as HTMLSelectElement;

const start = document.querySelector('button');
const instructions = document.querySelector(
	'.instructions'
) as HTMLParagraphElement;
const breathsText = document.querySelector(
	'.breaths-text'
) as HTMLParagraphElement;

let breathsRemaining: number = 3;

// Watching for selected breaths
numberOfBreaths.addEventListener('change', (e: Event) => {
	breathsRemaining = parseInt(numberOfBreaths.value);
	breathsText.innerText = breathsRemaining.toString();
});

//Grow/ Shrink
const growCircle = () => {
	circleProgress.classList.add('circle-grow');
	setTimeout(() => {
		circleProgress.classList.remove('circle-grow');
	}, 8000);
};
//Instruction
const breathTextUpdate = () => {
	breathsRemaining -= 1;
	breathsText.innerText = breathsRemaining.toString();
	instructions.innerText = 'Breath In';
	setTimeout(() => {
		instructions.innerText = 'Hold Breath';
		setTimeout(() => {
			instructions.innerText = 'Exhale Breath Slowly';
		}, 4000);
	}, 4000);
};

// Breathing App Function
const breathingApp = () => {
	const breathingAnimation = setInterval(() => {
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
start.addEventListener('click', (e: Event) => {
	start.classList.add('button-inactive');
	instructions.innerText = 'Get Relaxed, and ready to begin breathing';
	setTimeout(() => {
		instructions.innerText = 'Get Relaxed, and ready to begin breathing';

		setTimeout(() => {
			breathingApp();
			growCircle();
			breathTextUpdate();
		}, 2000);
	}, 2000);
});

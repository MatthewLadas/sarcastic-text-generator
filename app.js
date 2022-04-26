const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

function transformText(text) {
	const mod = Array.from(text).map();
	console.log(mod);
	result.textContent = text;
}

textarea.addEventListener('input', e => transformText(e.target.value));

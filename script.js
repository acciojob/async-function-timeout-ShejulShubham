//your JS code here. If required.
const inputText = document.getElementById("text");
const inputDelay = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", (e)=>{
	displayText();	
});

async function displayText(){

	const text = await new Promise((resolve, reject)=>{
		const text = inputText.value.trim();
		const delay = Number(inputDelay.value);
		setTimeout(()=>{
			return resolve(text);
		}, delay);
	});

	output.innerText = text;
}
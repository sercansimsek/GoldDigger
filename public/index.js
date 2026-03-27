const textInput = document.getElementById("investment-amount");
const connectionStatus = document.getElementById("connection-status");
const priceDisplay = document.getElementById("price-display");
const investBtn = document.getElementById("invest-btn");
const outputs = document.querySelector(".outputs");

setTimeout(() => {
	connectionStatus.textContent = "Live Price 🟢";

	const randomValue = ((Math.random(0 * 51) + 1) * 1.3).toFixed(2);
	priceDisplay.textContent = randomValue;
}, 2000);

investBtn.addEventListener("click", () => {
	if (textInput.value) {
		outputs.style.display = "block";
	}
});

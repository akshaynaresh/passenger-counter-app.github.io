let count = 0

function increment() {
	count += 1
	// document.getElementById("count-el").innerText = count
	let countEl = document.getElementById("count-el")
	countEl.textContent = count
}

function save() {
	let saveEl = document.getElementById("save-el")
	let countStr = count + " - "
	// saveEl.innerText += "  " + count + "  " + "-" + "  "
	saveEl.textContent += countStr
	count = 0
	document.getElementById("count-el").innerText = 0
} 
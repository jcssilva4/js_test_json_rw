let nWorkers = 0

//form inputs
const name = document.getElementById("fname")
const age = document.getElementById("fage")
const wage = document.getElementById("fwage")
const submit_button = document.getElementById("sub_button")

var table = document.getElementById("work_list")

function addWorker(){
	alert('A new worker was registered')
	nWorkers += 1
	// Create an empty <tr> element and add it to the 'nWorkers' position of the table:
	var row = table.insertRow(nWorkers);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2)

	// Add some text to the new cells:
	cell1.innerHTML = name.value
	cell2.innerHTML = age.value
	cell3.innerHTML = wage.value
}

submit_button.addEventListener('click', addWorker)


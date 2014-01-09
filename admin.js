 function addQuestion() {
	var ol = document.getElementById('inputList');
	
	var li = document.createElement('li');
	
	var input = document.createElement('input');
	input.setAttribute('name', 'answer[]');
	input.setAttribute('type', 'text');
	
	li.appendChild(input);
	ol.appendChild(li);

}
function eatQuestion() {
	var ol = document.getElementById('inputList');
	
	if (ol.getElementsByTagName('li').length < 3) 
		 alert("You must have at least 2 answers");
	else 
		ol.removeChild(ol.lastChild);
}

function jal_validate() {
    
	var ol = document.getElementById('inputList');
	var inputs = ol.getElementsByTagName('input');
	
	var answers = 0;
	
	for (var i=0; i < inputs.length; i++)
		if (inputs[i].value)
			answers++;

	if (answers < 2) {
		alert("You don't have at least two answers!");
		return false;
	}
   
	if (document.getElementById('question').value == "") {
        alert ("You don't have a question!");
        return false;
    }
    
}
window.onload = function()
{
	drawList();
};

var give = ['Milanče', 'Nataša', 'Sandra P.', 'Bojana', 'Ljubica',
           'Lela', 'Jeca velika', 'Jeca mala', 'Ana Petković', 'Maja', 
           'Marko F', 'Igor', 'Sandra Z.', 'Toza', 'Marko Z', 
           'Miško', 'Marko M', 'Dragana', 'Aleg', 'Piva', 
           'Tanja', 'Boris', 'Branko', 'Ana Čanak', 'Miloš', 
           'Nebojša', 'Pekić', 'Kaća', 'Dejan', 'Sale' 
           'Vicko'];
give.sort();
give.reverse();
var receive = give.concat();
var peopleWrap = document.getElementById('peopleWrap');
var people = document.getElementById('people');
var choose = document.getElementById('choose');
var result = document.getElementById('result');
var close = document.getElementById('close');

function drawList()
{
	people.innerHTML = '<option value="">Ko sam ja?</option>';
	for (var i = give.length - 1; i >= 0; i--) {
		var option = document.createElement('option');
		option.value = i;
		option.innerHTML = give[i];
		people.appendChild(option);
	}
}

function selectPerson(person) 
{
	var name = give[person];
	var nameIndex = receive.indexOf(name);
	
	if(nameIndex >= 0) 
	{
		receive.splice(nameIndex, 1);
	}
	var recipient = Math.floor((Math.random() * receive.length));
	var recipientName = receive[recipient];
	
	receive.splice(recipient, 1);
	give.splice(person, 1);

	if(nameIndex >= 0)
	{
		receive.push(name);
	}
	result.innerHTML = "<h2>" + name + ", tvoje lice je " + recipientName + "!</h2>";
	close.innerHTML = "Ok. Sakrij poruku da niko ne vidi.";
	if(give.length > 0)
	{
		drawList();
	}
}

choose.onclick = function()
{
	if(people.value)
	{
		selectPerson(people.value);
	}
};

close.onclick = function()
{
	result.innerHTML = "";
	close.innerHTML = "";
  if(give.length == 0){
 peopleWrap.parentNode.removeChild(peopleWrap);
		choose.parentNode.removeChild(choose);
		result.innerHTML = "<h2>Završeno izvlačenje!</h2>";
		close.innerHTML = "";
	}
};

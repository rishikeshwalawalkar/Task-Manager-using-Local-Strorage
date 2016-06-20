function add() {
	var data = [];		
	var obj = {
		"name" : document.getElementById("name").value,
		"date" : document.getElementById("date").value,
		"assign" : document.getElementById("assigned").value
	};
	data.push(obj);
	var localdata = JSON.parse(localStorage.getItem('gameStorage'));
	if(localdata !== null)
	{
		for(var z in localdata){
			data.push(localdata[z]);
		}
	
	}
	localStorage.setItem('gameStorage', JSON.stringify(data));
	show();
}

function clearAll() {
	localStorage.clear();
  show();
}

function show() {
	var data = JSON.parse(localStorage.getItem('gameStorage'));
	console.log(data);
	var myTable = "<table><tr><th>Task Name &nbsp; Date</th><th>Assigned to</th></tr>"
	for (var i in data) {
		myTable += "<tr><td>" + data[i].name + data[i].date + "</td><td colspan = \"2\">"
				+ data[i].assign + "</td></tr>";
	}
	document.getElementById("myTable").innerHTML = myTable;
}


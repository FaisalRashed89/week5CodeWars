var string = "This is a test";

function toWeirdCase(string){
	var arr = string.split(" ");
	var arrFinal = [];
	var arrFinal2 = [];
	console.log(arr);
	for (var i = 0; i < arr.length; i++) {
		var temp = arr[i].split("");
		console.log(temp);
		for (var j = 0; j < temp.length; j++) {
			if (j % 2 === 0) {
				temp[j] = temp[j].toUpperCase();
				console.log(temp[j]);
			} else {
				temp[j] = temp[j].toLowerCase();
				console.log(temp[j]);
			}
		}
		arrFinal.push(temp);
	}
	for (var i = 0; i < arrFinal.length; i++) {
		arrFinal2.push(arrFinal[i].join(""));
	}
	return arrFinal2.join(" ");
}

toWeirdCase(string);

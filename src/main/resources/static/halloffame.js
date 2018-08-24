//@Sasikaladevi Kumarasamy
var pageURL = "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json";
var btn = document.getElementById("load"); 
var halloffameContainer = document.getElementById("results");
var dataArray=[];
var htmlString;

btn.addEventListener("click", function() {
	var request = new XMLHttpRequest();
	request.open("GET", pageURL);

	request.onload = function() {
		console.log(request.responseText);
		var data = JSON.parse(request.responseText);
		pageURL = data.next;
		renderHTML(data);

	};
		request.send();
		// hide the load button after rendering the data
		document.getElementById('load').style.visibility = 'hidden';
});


// will render the HTML to the page
function renderHTML(data){
	for (var person of data.complete) {
		dataArray.push(person);
	}

// to sort the array elements by first name
	dataArray.sort(fieldSorter(['firstName'])); // 'firstName is the column name in the table of objects
//	dataArray.sort(fieldSorter(['year'])); // 'firstName is the column name in the table of objects

	function fieldSorter(fields) {
	  return function(a, b) {
	    return fields
//	    The map() method creates a new array with the results of calling a function for every array element.
//	    The map() method calls the provided function once for each element in an array, in order.
//	    this does not execute the function for array elements without values.
//	    it does not change the original array.
	    .map(function(o) {
	        var dir = 1;
	        if (o[0] === '-') {
	          dir = -1;
	          o = o.substring(1);
	        }
	        if (!parseInt(a[o]) && !parseInt(b[o])) {
	          if (a[o] > b[o]) return dir;
	          if (a[o] < b[o]) return -(dir);
	          return 0;
	        } else {
	          return dir > 0 ? a[o] - b[o] : b[o] - a[o];
	        }
	      })
	  };
	}
	htmlString = "<table align='center' class='tabLe'>"+"<tr class='heading'>"+"<td>"+"#"+"</td>"+"<td>"+"First Name"+"</td>"+"<td>"+"Last Name"+"</td>"+"<td>"+"Innovation"+"</td>"+"<td>"+"Year"+"</td>"+"</tr>";
	
	for(var i=0; i<dataArray.length; i++){
		htmlString += "<tr class='tabBody'>" +"<td>"+(i+1)+".</td>"+"<td>"+dataArray[i].firstName+"</td>"+"<td>"+ dataArray[i].lastName+"</td>"+"<td>"+dataArray[i].innovation +"</td>"+"<td>"+ dataArray[i].year +"</td>"+ "</tr>";
	}
	htmlString += "</table>"
		halloffameContainer.insertAdjacentHTML("beforeend", htmlString);	

}
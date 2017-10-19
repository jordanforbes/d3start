d3.select("body").append("p").text("Hi what's up")


var data = [30, 86, 168, 281, 303, 365]
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");

var x = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0,420]);


// d3.select(".chart")
	// barUpdate.enter().append("div")
	barEnter.style("width", function(d) { return d * 2 + "px"; })
	barEnter.text(function(d) { return d; });

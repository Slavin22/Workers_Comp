function init() {
	var data = [{
		x: allData.map(row => row.team),
		y: allData.map(row => row.value),
		mode: 'markers',
		type: 'scatter',
		text: allHover,
		marker: {size: 12,
				color: allData.map(row => row.color),
				colorscale: [[0, '#009e73'], [0.17, '#009e73'],
							[0.18, '#cc79a7'], [0.34, '#cc79a7'],
							[0.35, '#d55e00'], [0.51, '#d55e00'],
							[0.52, '#56b4e9'], [0.67, '#56b4e9'],
							[0.68, 'rgb(85,85,85)'], [0.84, 'rgb(85,85,85)'],
							[0.85, 'rgb(170,170,170)'], [1, 'rgb(170,170,170)']]
				},
		hoverinfo: 'text',
		hoverlabel: {bgcolor: 'black', bordercolor: 'white'},
		fillcolor: "black"
	}];

	var layout = {
	  xaxis: {
	    title: ''
	  },
	  yaxis: {
	    title: '% of Draft Capital spent at each Position'
	  },
	  title:'Draft Tendencies by Position',
	  hovermode: 'closest'
	};

	var PLOT = document.getElementById("plot");

	Plotly.plot("plot", data, layout);

	// function renderTable1() {
	// 	$tbody.innerHTML = "";
	// 	for (var x = 0; x < dtData.length; x++) {
	// 		var qb = dtData[x];
	// 		var fields = Object.keys(qb);
	// 		var $row = $tbody.insertRow(x);
	// 		for (var y = 0; y < 6; y++) {
	// 			var field = fields[y];
	// 			var $cell = $row.insertCell(y);
	// 			$cell.innerHTML = qb[field]
	// 		}
	// 	}
	// }

	// // Find a <table> element with id="myTable":
	// var $tbody = document.querySelector("tbody");
	// renderTable1()
};

function updatePlotly(newX, newY, newText, newMarker, newXtitle, newYtitle) {
	console.log(newX, newY, newText, newMarker, newXtitle, newYtitle)
	var PLOT = document.getElementById("plot");

	Plotly.restyle("plot", "x", [newX]);
	Plotly.restyle("plot", "y", [newY]);
	Plotly.restyle("plot", "text", [newText]);
	Plotly.restyle("plot", "marker", [newMarker]);
	Plotly.relayout("plot", "xaxis.title", newXtitle);
	Plotly.relayout("plot", "yaxis.title", newYtitle);
}

function getData(dataset) {
	var x = [];
	var y = [];
	var text = [];
	var marker = {};
	var xtitle = "";
	var ytitle = "";

	switch(dataset) {
		case "dataset1":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.RB);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.RB),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = 'QB - Adjusted Points Scored';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset2":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.WR);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.WR),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on WRs';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset3":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.TE);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.TE),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on TEs';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset4":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.QB);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.QB),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on QBs';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset5":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.D);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.D),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on Ds';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset6":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.K);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.K),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on Ks';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset7":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.RW);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.RW),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on RBs + WRs';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset8":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.QT);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.QT),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on QBs + TEs';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset9":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.DK);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.DK),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on Ds + Ks';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset10":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.RWT);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.RWT),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on RBs + WRs + TEs';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset11":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.QDK);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.QDK),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on QBs + Ds + Ks';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset12":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.QRWT);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.QRWT),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on QBs + RBs + WRs + TEs';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset13":
			x = dtData.map(row => row.team);
			y = dtData.map(row => row.QTDK);
			text = dtHover;
			marker = {size: 20,
				color: dtData.map(row => row.QTDK),
				colorscale: [[0, 'rgb(205,0,0)'], [0.5, 'rgb(255,235,0)'],[1, 'rgb(0,128,0)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent on QBs + TEs + Ds + Ks';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		default:
			x = allData.map(row => row.team);
			y = allData.map(row => row.value);
			text = allHover;
			marker = {size: 5,
				color: allData.map(row => row.color),
				colorscale: [[0, '#009e73'], [0.17, '#009e73'],
							[0.18, '#cc79a7'], [0.34, '#cc79a7'],
							[0.35, '#d55e00'], [0.51, '#d55e00'],
							[0.52, '#56b4e9'], [0.67, '#56b4e9'],
							[0.68, 'rgb(85,85,85)'], [0.84, 'rgb(85,85,85)'],
							[0.85, 'rgb(170,170,170)'], [1, 'rgb(170,170,170)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent at each position';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;

		case "dataset14":
			x = allData.map(row => row.team);
			y = allData.map(row => row.value);
			text = allHover;
			marker = {size: 5,
				color: allData.map(row => row.color),
				colorscale: [[0, '#009e73'], [0.17, '#009e73'],
							[0.18, '#cc79a7'], [0.34, '#cc79a7'],
							[0.35, '#d55e00'], [0.51, '#d55e00'],
							[0.52, '#56b4e9'], [0.67, '#56b4e9'],
							[0.68, 'rgb(85,85,85)'], [0.84, 'rgb(85,85,85)'],
							[0.85, 'rgb(170,170,170)'], [1, 'rgb(170,170,170)']]
			};
			xtitle = '';
			ytitle = '% of Draft Capital spent at each position';
			// function renderTable1() {
			// 	$tbody.innerHTML = "";
			// 	for (var x = 0; x < dtData.length; x++) {
			// 		var qb = dtData[x];
			// 		var fields = Object.keys(qb);
			// 		var $row = $tbody.insertRow(x);
			// 		for (var y = 0; y < 6; y++) {
			// 			var field = fields[y];
			// 			var $cell = $row.insertCell(y);
			// 			$cell.innerHTML = qb[field]
			// 		}
			// 	}
			// };
			// var $tbody = document.querySelector("tbody");
			// renderTable1();
			break;
	}

	updatePlotly(x, y, text, marker, xtitle, ytitle)
}

init();
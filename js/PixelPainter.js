window.onload = runJs;


function runJs() {
	function PixelPainter (width, height) {
		this.width = width;
		this.height = height
	}

	var canvas = document.createElement('div');
	canvas.id = "pp-canvas";

	var size = new PixelPainter(60, 60);

	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;

	canvas.style.width = size.width + "vw";
	canvas.style.height = size.height + "vh";
	canvas.style.backgroundColor = "red";
	
	// testing
	document.body.appendChild(canvas);

	function updateCells() {
		var measurement = calculateSize();
		// measurement = [rows, colums]
		// horizontal rows
			for (var i = 0; i < measurement[0]; i++) {
				var row = document.createElement('div');
				row.className += "row";
				row.style.backgroundColor = "blue";
				var canvas = document.getElementById("pp-canvas");
				row.style.width = "100%";
				row.style.height = (100 / measurement[0]) + "%";
				canvas.appendChild(row);


			}
		// vertical columns
		
	}

	setInterval(updateCells, 1000);

	function calculateSize () {
		var horizontal = Math.floor(window.innerWidth / size.width);
		var verticle = Math.floor(window.innerHeight / size.height);
		
		var array = [];
		array.push(horizontal);
		array.push(verticle);

		console.log(array);
		return array;
	}


	window.onresize = calculateSize; 

}
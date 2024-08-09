window.addEventListener("load", function(){
	var ctx = document.querySelector("canvas").getContext("2d");

	var brushWidth = 200;
	var brushOffset = brushWidth;
	var speed = 20;
	var txt = "observer, expérimenter, valider.";
	var x = 30, i = 0;

	ctx.font = "1.35cm Helvetica";
	ctx.lineWidth = 1;
	ctx.fillStyle = "white";


	(function draw() {
			ctx.clearRect(x, 30, 800, 150);
			ctx.setLineDash([brushWidth - brushOffset, brushOffset - speed]);

			brushOffset -= speed;

			ctx.strokeText(txt[i], x, 70);

			if (brushOffset > 0) requestAnimationFrame(draw);
			else {

				brushOffset = brushWidth;

				x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();

				if (i < txt.length) requestAnimationFrame(draw);
			}
		})();

});

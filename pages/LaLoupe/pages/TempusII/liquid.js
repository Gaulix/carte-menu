
//Liquid


// Define text style
const text = new Blotter.Text('Tempus Fugit', {
	family: "'EB Garamond', serif",
  size: 100,
	paddingLeft: 20,
  paddingRight: 80,
	fill: '#fff'
});

// Use a material
// https://blotter.js.org/#/materials
let material = new Blotter.LiquidDistortMaterial();

// Set material opts
material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.10;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
  texts: text
});

// Apply to element
let scope = blotter.forText(text);
let elem = document.getElementById('Liquid');
scope.appendTo(elem);


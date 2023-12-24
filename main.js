import figlet from 'figlet';
import slant from 'figlet/importable-fonts/Slant.js'

figlet.parseFont('Slant', slant);

const fontName = 'Slant';
let data;

document.addEventListener("DOMContentLoaded", function(event){
	 figlet('alyajouri II', {font: fontName}, function(err, data) {
		if (err) {
		  console.error(err);
		  return;
		}
		console.log(data)

		const ascii_text_element = document.createElement('pre');
		ascii_text_element.textContent = data;
		document.body.append(ascii_text_element)
	  });
	  figlet('3rd floor library', {font: fontName}, function(err, data) {
		if (err) {
		  console.error(err);
		  return;
		}
		console.log(data)
		console.log("Waxaan ku jeclahay in ka badan inta aad ogtahay.")
	  });
});





















































/* import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';

var container;
var camera, controls, scene, renderer;
var sphere, plane;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 5;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

let effect;

let characters = ' .:-+*=%@#'
const effectSize = { amount: .205 }
let backgroundColor = 'black'
let ASCIIColor = 'white'

// Create an EffectComposer
const composer = new EffectComposer(renderer);

// Add a RenderPass to the composer
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Create the AsciiEffect and add it to the composer
effect = new AsciiEffect(renderer, characters, { invert: true, resolution: effectSize.amount });
effect.setSize(sizes.width, sizes.height);
effect.domElement.style.color = ASCIIColor;
effect.domElement.style.backgroundColor = backgroundColor;
composer.addPass(effect);


function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	composer.render( scene, camera );
	
}

animate();

const effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
effect.setSize( window.innerWidth, window.innerHeight );
effect.domElement.style.color = 'white';
effect.domElement.style.backgroundColor = 'black';
*/

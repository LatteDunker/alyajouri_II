import figlet from 'figlet';
import slant from 'figlet/importable-fonts/Slant.js'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

// ================================= ASCII Header =================================
figlet.parseFont('Slant', slant);

const fontName = 'Slant';
let data;

document.addEventListener("DOMContentLoaded", function(event){
	 figlet('alyajouri II', {font: fontName}, function(err, data) {
		if (err) {
		  console.error(err);
		  return;
		}
		
		const ascii_text_container = document.createElement('pre');
		ascii_text_container.classList.add('container');

		const ascii_text_element = document.createElement('pre');
		ascii_text_element.classList.add('ascii-style-one');
		ascii_text_element.textContent = data;

		ascii_text_container.appendChild(ascii_text_element);
		document.body.append(ascii_text_container);
	  });
	
	  // THREE.JS CUBE ================================================================
	  const renderer = new THREE.WebGLRenderer( { alpha: true });
	  renderer.setSize( window.innerWidth, window.innerHeight );

	  const threeContainer = document.createElement('div');
	  threeContainer.classList.add('container');

	  const scene = new THREE.Scene();
	  const camera = new THREE.PerspectiveCamera ( 
			60, 
			window.innerWidth / window.innerHeight, 
			0.1, 
			1000 
		);

		const orbit = new OrbitControls(camera, renderer.domElement)

		const axesHelper = new THREE.AxesHelper(2);
		scene.add(axesHelper);

		const gridHelper = new THREE.GridHelper();
		scene.add(gridHelper);

		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { 
			color: 0x000000,
			wireframe: true
		} );
		const cube = new THREE.Mesh( geometry, material );
		scene.add(cube);

		camera.position.z = 5;
		camera.position.x = 2;
		camera.position.y = 1;
		orbit.update();

		function animate() {
			requestAnimationFrame( animate );
		
			cube.rotation.y += -0.01;
		
			renderer.render( scene, camera );
		}

	  threeContainer.appendChild( renderer.domElement );
	  document.body.appendChild(threeContainer);
	  

	  


	  

/*
	  // Function to handle window resize
function onWindowResize() {
	const newWidth = window.innerWidth/2;
	const newHeight = window.innerHeight;
  
	camera.aspect = newWidth / newHeight;
	camera.updateProjectionMatrix();
  
	renderer.setSize(newWidth, newHeight);
  }

  // Add a listener for the window resize event
  window.addEventListener('resize', onWindowResize);
  function animate() {
	requestAnimationFrame(animate);
  
	cube.rotation.y += -0.01;
	cube.rotation.x += -0.002;
  
	renderer.render(scene, camera);
  }
  */
  
  animate();

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

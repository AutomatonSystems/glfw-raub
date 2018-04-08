'use strict';

const util = require('util');

const glfw = require('../');
const { Window } = glfw;


const w1 = new Window({ title: 'GLFW Simple Test 1' });

// testing events
w1.on('keydown', e => console.log(`[#1 keydown] ${util.inspect(e)}`));
w1.on('mousedown', e => console.log(`[#1 mousedown] ${util.inspect(e)}`));
w1.on('mousemove', e => console.log(`[#1 mousemove] ${e.x}, ${e.y}`));
w1.on('mousewheel', e => console.log(`[#1 mousewheel] ${e.position}`));
w1.on('resize', e => console.log(`[#1 resize] ${e.width}, ${e.height}`));

console.log(w1.version);


const draw = () => {
	
	const wsize1 = w1.framebufferSize;
	glfw.testScene(wsize1.width, wsize1.height);
	w1.swapBuffers();
	
	glfw.pollEvents();
	
};


const animate = () => {
	
	if ( ! (
		w1.shouldClose ||
		w1.getKey(glfw.KEY_ESCAPE)
	) ) {
		
		draw();
		setTimeout(animate, 16);
		
	} else {
		// Close OpenGL window and terminate GLFW
		w1.destroy();
		
		glfw.terminate();
		
		process.exit(0);
	}
	
};


animate();

'use strict';

const glfw = require('../');
const { Window } = glfw;


// Default MSAA is 2
const w1 = new Window({ title: 'GLFW Simple Test 1', msaa: 0, vsync: true });
const w2 = new Window({ title: 'GLFW Simple Test 2', msaa: 4, vsync: true });


const draw = () => {
	w1.makeCurrent();
	const wsize1 = w1.framebufferSize;
	glfw.testScene(wsize1.width, wsize1.height);
	w1.swapBuffers();
	
	w2.makeCurrent();
	const wsize2 = w2.framebufferSize;
	glfw.testScene(wsize2.width, wsize2.height);
	w2.swapBuffers();
	
	glfw.pollEvents();
};


const close = () => {
	// Close the windows and terminate GLFW
	w1.destroy();
	w2.destroy();
	
	glfw.terminate();
	
	process.exit(0);
};


const animate = () => {
	if (
		w1.shouldClose || w2.shouldClose ||
		w1.getKey(glfw.KEY_ESCAPE) || w2.getKey(glfw.KEY_ESCAPE)
	) {
		close();
		return;
	}
	
	draw();
	setTimeout(animate, 16);
};


animate();

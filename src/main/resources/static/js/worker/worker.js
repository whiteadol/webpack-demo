'use strict';
/* importScripts('/worker/importFile.js');
const aa = new Test();

onmessage = ev => {
	const { data } = ev;
	console.log(aa.value);
	console.log(data);
	const test = 'good';
	self.postMessage(test);
}; */

// below code is under worker environment
// to import tfjs into worker from a cdn
importScripts('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs');
// create 2 tensors and add them up
const a = tf.ones([2, 2]);
const b = tf.ones([2, 2]);
const c = a.add(b);
// post back the result
self.postMessage({ data: c.dataSync() });

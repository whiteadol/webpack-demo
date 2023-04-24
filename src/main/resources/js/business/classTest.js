'use strict';

const _ = require('lodash');

class ReferTest {
	constructor() {
		this._number = 0;
	}

	CallChain(num) {
		this._number = num;
		return this;
	}

	get getNumber() {
		return this._number;
	}

	set setNumber(num) {
		if (typeof num !== 'number') {
			throw new Error('is Not Number');
		}
		this._number = num;
	}
}

const test = new ReferTest();
const testtest = test.CallChain(99).getNumber;
console.log(testtest);

/****************** */

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [10, 2, 3, 4, 5, 6, 77];

const mergeArray = [...array1, ...array2];
console.log(mergeArray);

const mergeLoadsh = _.union(array1, array2);
console.log(mergeLoadsh);

/******************************* */

const obj1 = {
	name: 'banana',
	price: 1000,
};

const obj2 = {
	name: '11',
	count: 10,
};

const obj3 = {
	count: 100,
	color: 'yellow',
};

Object.assign(obj1, obj2, obj3);

obj2.name = '!!!!!!!!!!!!!!!!!!!!!!!!!!!';

setTimeout(() => {
	console.log(obj1);
}, 2000);

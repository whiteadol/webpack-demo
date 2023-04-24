'use strict';

import Notiflix from 'notiflix';

Notiflix.Confirm.init({
	className: 'notiflix-confirm',
	width: '400px',
	zindex: 4003,
	position: 'center', // 'center' - 'center-top' - 'center-bottom' - 'right-top' - 'right-center' - 'right-bottom' - 'left-top' - 'left-center' - 'left-bottom'
	distance: '10px',
	backgroundColor: '#f8f8f8',
	borderRadius: '15px',
	backOverlay: true,
	backOverlayColor: 'rgba(15, 15, 15, 0.7)',
	rtl: false,
	fontFamily: 'Quicksand',
	cssAnimation: true,
	cssAnimationDuration: 100,
	cssAnimationStyle: 'fade', // 'zoom' - 'fade'
	plainText: false,
	titleColor: '#3546b3',
	titleFontSize: '16px',
	titleMaxLength: 34,
	messageColor: '#3546b3',
	messageFontSize: '14px',
	messageMaxLength: 110,
	buttonsFontSize: '15px',
	buttonsMaxLength: 34,
	okButtonColor: '#f8f8f8',
	okButtonBackground: '#3546b3',
	cancelButtonColor: '#f8f8f8',
	cancelButtonBackground: 'gray',
});

const [examRating, examRound, examType] = [document.getElementById('examRating'), document.getElementById('examRound'), document.getElementById('examType')];

VirtualSelect.init({
	ele: '#examRating',
	maxWidth: '100%',
	options: [
		{ label: '(1급) PMF', value: 1 },
		{ label: '(2급) PMS', value: 2 },
		{ label: '(3급) PMT', value: 3 },
	],
});

VirtualSelect.init({
	ele: '#examRound',
	maxWidth: '100%',
	options: [{ label: 2023, value: 2023 }],
});

VirtualSelect.init({
	ele: '#examType',
	maxWidth: '100%',
	options: [{ label: '필기 및 실기', value: '1' }],
});

examRating.onchange = ev => {
	const { value } = ev.target;
	document.getElementById('examRound').setValue(`${value ? 2023 : null}`);
};
examRound.onchange = ev => {
	const { value } = ev.target;
	document.getElementById('examNum').focus();
	document.getElementById('examNum').value = value ? 934334 : null;
};

document.getElementById('userName').value = '수험자01';
document.getElementById('examType').setValue(1);

document.getElementById('examStart').onclick = ev => {
	Notiflix.Confirm.show(
		'실행 확인',
		'시험을 시작하겠습니까?',
		'예',
		'아니오',
		() => {
			window.location.href = '/exam';
		},
		() => {},
	);
};

document.getElementsByName('getNifiApi').forEach(element => {
	element.onclick = ev => {
		const { id } = ev.target;
		console.log(id);
		window.location.href = `/${id}`;
	};
});

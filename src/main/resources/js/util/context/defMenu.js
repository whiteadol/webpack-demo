'use strict';

/* const defMenu = [
	{ text: 'Back', hotkey: 'Alt+Left arrow', disabled: true },
	{ text: 'Forward', hotkey: 'Alt+Right arrow', disabled: true },
	{ text: 'Reload', hotkey: 'Ctrl+R' },
	null,
	{ text: 'Save as...', hotkey: 'Ctrl+S' },
	{ text: 'Print...', hotkey: 'Ctrl+P' },
	{ text: 'Cast...' },
	{ text: 'Translate to English' },
	null,
	{ text: 'View page source', hotkey: 'Ctrl+U' },
	{ text: 'Inspect', hotkey: 'Ctrl+Shift+I' },
	null,
]; */

/* const defMenu = [
	{
		text: '최고 온도', hotkey: 'Ctrl+Shift+I', onclick: e => {
			isopGrid.isotope({ sortBy: 'temperate' });
		},
	},
]; */

const defMenu = (isopGrid) => [
	{
		text: '최고 온도', hotkey: 'Ctrl+Shift+I', onclick: e => {
			e.handled = true;
			console.log(e)
			if (e.label.innerText === '최고 온도 - 정렬적용 중') {
				isopGrid.isotope({ sortBy: 'original-order' });
				e.label.innerText = '최고 온도';
				e.data.text = e.label.innerText;
			} else {
				e.label.innerText = '최고 온도 - 정렬적용 중';
				e.data.text = e.label.innerText;
				console.log(e.hotkey.innerText = '정렬중');
				isopGrid.isotope({ sortBy: 'temperate' });
			}
		},
	},
];

export { defMenu };

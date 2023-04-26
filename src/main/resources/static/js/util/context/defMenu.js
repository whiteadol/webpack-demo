'use strict';

const defMenu = (isopGrid) => [
	{
		text: '최고 온도', hotkey: '', onclick: e => {
			e.handled = true;
			if (e.label.innerText === '최고 온도 - 선택') {
				e.hotkey.innerText = ''
				e.label.innerText = '최고 온도';
				e.data.text = e.label.innerText;
				isopGrid.isotope({ sortBy: 'original-order' });
			} else {
				//e.hotkey.innerText = '정렬중'
				e.label.innerText = '최고 온도 - 선택';
				e.data.text = e.label.innerText;
				isopGrid.isotope({ sortBy: 'temperate' });
			}
		},
	},
];

export { defMenu };

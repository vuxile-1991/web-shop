'use strict';
const list = document.querySelector(`.list-group`);
const tabEl = document.querySelectorAll(`.tab-pane`);

list.addEventListener(`click`, function (e) {
	const tab = document.querySelectorAll(`.list-group-item`);

	if (!tab) return;

	tab.forEach(el => el.classList.remove(`active`));
	tabEl.forEach(text => {
		text.classList.remove(`active`);
	});
});

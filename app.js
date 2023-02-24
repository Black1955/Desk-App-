import { doc } from 'prettier';
import './modal';
import { $ } from './modal.js';
const modal = $.modal();
const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
	modal.open();
});

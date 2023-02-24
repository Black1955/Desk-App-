import { doc } from 'prettier';
import './desk';
import { elem } from './desk';
import { upload } from './upload';
function create() {
	const div = document.createElement('div');
	div.classList.add('vmodal');
	div.insertAdjacentHTML(
		'afterbegin',
		`
        <div class="modal-back" data-close="">
        <div class="modal">
            <form id="modal">
			<h1>Add an element</h1>
			<input type="text" placeholder="Title" id="title" />
			<input type="text" placeholder="Price" id="price"/>
			<input type="text" placeholder="Description" id="desc"/>
			<input type="file" id="photo">
            </form>
            <button class="btn primary vision" id="create">create</button>
		</div>
        </div>
        `
	);

	document.body.appendChild(div);
	return div;
}

export let $ = {};
$.modal = function () {
	const $modal = create();
	const title = document.querySelector('#title');
	const price = document.querySelector('#price');
	const desc = document.querySelector('#desc');
	const form = document.querySelector('#modal');
	const inputs = document.querySelectorAll('input');
	const btnCreate = document.querySelector('#create');
	const methods = {
		open() {
			$modal.classList.add('open');
		},
		close() {
			inputs.forEach(e => {
				e.value = '';
			});
			btnCreate.classList.add('vision');
			$modal.classList.remove('open');
		}
	};
	upload();

	$modal.addEventListener('click', event => {
		if (event.target.dataset.close == '') {
			methods.close();
		}
	});

	form.addEventListener('input', () => {
		if (title.value != '' && price.value != '' && desc.value != '') {
			btnCreate.classList.remove('vision');
		}
		if (title.value == '' || price.value == '' || desc.value == '') {
			btnCreate.classList.add('vision');
		}
	});

	btnCreate.addEventListener('click', () => {
		const foto = document.querySelector('img');
		let url = foto.getAttribute('src');
		elem(title.value, price.value, desc.value, url);
		methods.close();
	});
	document.querySelector('.modal').style.height = '600px';
	return methods;
};

import { doc } from 'prettier';

export function upload() {
	const input = document.querySelector('#photo');
	const preview = document.createElement('div');
	preview.classList.add('preview');

	const open = document.createElement('button');
	open.classList.add('btn');
	open.style.borderRadius = '10px';
	open.style.marginBottom = '10px';
	open.textContent = 'upload';

	input.insertAdjacentElement('afterend', preview);
	input.insertAdjacentElement('afterend', open);

	const print = event => {
		if (!event.target.files.length) {
			return;
		}
		const files = Array.from(event.target.files);
		files.forEach(file => {
			if (!file.type.match('image')) {
				return;
			}
			const reader = new FileReader();
			reader.onload = event => {
				console.log(event);
				preview.insertAdjacentHTML(
					'afterbegin',
					`
           <div class="preview-image">
           <div class="preview-remove" data-rem=${file.name}>&times;</div>
           <div class="info">
           <p>${file.type}</p>
           <p>${file.size}</p>
           </div>
            <img src="${event.target.result}" />
           </div>
           `
				);
			};
			reader.readAsDataURL(file);
		});
	};
	const removeHanler = event => {
		if (!event.target.dataset.rem) {
			return;
		}
		const name = event.target.dataset.rem;
		const elem = document.querySelector(`[data-rem="${name}"]`);
		const parent = elem.parentNode;
		parent.remove();
	};
	const UpHandler = () => {};

	open.addEventListener('click', event => {
		event.preventDefault();
		input.click();
	});
	input.addEventListener('change', print);
	preview.addEventListener('click', removeHanler);
}

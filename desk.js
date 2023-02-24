export function elem(title, price, desc, url) {
	let desks = document.querySelector('.desks');
	const div = document.createElement('div');
	div.classList.add('desk');
	div.insertAdjacentHTML(
		'afterbegin',
		`
    <div class='img'>
		<img
			src='${url}'
			alt=''
			width='250px'
		/>
	</div>
	<div class='title'>
		<p>${title}</p>
	</div>
	<div class='price'>
		<p>${price}$</p>
	</div>
	<button class='btn primary'>More</button>
    `
	);
	desks.appendChild(div);
	return div;
}

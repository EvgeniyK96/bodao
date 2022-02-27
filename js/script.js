let btn = document.querySelector('.btn');
let form = document.querySelector('.form');
let close = document.querySelector('.close');


btn.addEventListener('click', function () {
	form.classList.add('active');
});
close.addEventListener('click', function() {
	form.classList.remove('active')
})

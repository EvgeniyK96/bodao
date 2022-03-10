let buttons = document.querySelectorAll('.btn');
let form = document.querySelector('.form');
let close = document.querySelector('.close');

buttons.forEach(btn => {
btn.addEventListener('click', function () {
	form.classList.add('active');
});
close.addEventListener('click', function() {
	form.classList.remove('active')
})
})

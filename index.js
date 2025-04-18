function toggleStep() {
	this.classList.toggle('list__item_step_active')
}

document.addEventListener('DOMContentLoaded', function () {
	const steps = document.querySelectorAll('.list__item_step')
	steps.forEach(step => {
		step.addEventListener('click', toggleStep)
	})

	window.addEventListener('beforeunload', function () {
		steps.forEach(step => {
			step.removeEventListener('click', toggleStep)
		})
	})
})

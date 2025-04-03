function toggleStep() {
	this.classList.toggle('step_active')
}

document.addEventListener('DOMContentLoaded', function () {
	const steps = document.querySelectorAll('.step')
	steps.forEach(step => {
		step.addEventListener('click', toggleStep)
	})

	window.addEventListener('beforeunload', function () {
		steps.forEach(step => {
			step.removeEventListener('click', toggleStep)
		})
	})
})

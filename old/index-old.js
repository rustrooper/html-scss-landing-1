document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.step').forEach(step => {
		step.addEventListener('click', function () {
			let content = document.querySelector('.step__content')
			let isActive = this.classList.contains('step__active')

			document.querySelectorAll('.step__content').forEach(el => {
				el.style.maxHeight = null
				// el.style.paddingTop = '0'
				// el.style.paddingBottom = '0'
				el.classList.remove('step__active')
			})

			document
				.querySelectorAll('.step')
				.forEach(el => el.classList.remove('step__active'))
			document
				.querySelectorAll('.toggle-btn')
				.forEach(el => (el.textContent = '+'))

			if (!isActive) {
				// content.style.paddingTop = '15px'
				// content.style.paddingBottom = '45px'
				let computedStyle = window.getComputedStyle(content)
				let paddingTop = parseFloat(computedStyle.paddingTop)
				let paddingBottom = parseFloat(computedStyle.paddingBottom)
				let contentHeight = content.scrollHeight + paddingTop + paddingBottom

				content.style.maxHeight = contentHeight + 'px'

				this.classList.add('step__active')
				this.querySelector('.toggle-btn').textContent = '-'
			}
		})
	})
})

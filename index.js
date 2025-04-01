document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.step__header').forEach(header => {
		header.addEventListener('click', function () {
			let content = this.nextElementSibling
			let isActive = this.classList.contains('step__header_active')

			document.querySelectorAll('.step__content').forEach(el => {
				el.style.maxHeight = null
				el.style.paddingTop = '0'
				el.style.paddingBottom = '0'
			})

			document
				.querySelectorAll('.step__header')
				.forEach(el => el.classList.remove('step__header_active'))
			document
				.querySelectorAll('.toggle-btn')
				.forEach(el => (el.textContent = '+'))

			if (!isActive) {
				content.style.maxHeight = content.scrollHeight + 'px'
				content.style.paddingTop = '15px'
				content.style.paddingBottom = '45px'
				this.classList.add('step__header_active')
				this.querySelector('.toggle-btn').textContent = '-'
			}
		})
	})
})

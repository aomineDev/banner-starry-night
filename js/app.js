(() => {
	const count = 500
	const scene = document.querySelector('.scene')

	let i = 0

	while (i < count) {
		const stars = document.createElement('i')
		stars.setAttribute('class', 'star')
		const x = Math.floor(Math.random() * window.innerWidth)
		const y = Math.floor(Math.random() * window.innerHeight)
		const duration = Math.random() * 10
		const size = Math.random() * 2

		stars.style.left = x + 'px'
		stars.style.top = y + 'px'
		stars.style.width = 1 + size + 'px'
		stars.style.height = 1 + size + 'px'
		stars.style.animationDuration = 5 + duration + 's'
		stars.style.animationDelay = duration + 's'

		scene.appendChild(stars)
		i++
	}
})()
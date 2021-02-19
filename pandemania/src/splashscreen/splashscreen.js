async function splash() {
	setTimeout(() => {
		const loaderWrapper = document.getElementById('loader-wrapper');
		loaderWrapper.addEventListener(
			'transitionend',
			() => {
				loaderWrapper.style.display = 'none';
			},
			true,
		);
		loaderWrapper.style.opacity = 0.0;
	}, 1200);
}

export default splash;

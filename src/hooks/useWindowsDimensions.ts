import { useState, useEffect } from 'react';

function getWindowDimensions() {
	if (typeof window !== 'undefined') {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	} else
		return {
			width: 0,
			height: 0,
		};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	function handleResize() {
		setWindowDimensions(getWindowDimensions());
	}

	useEffect(() => {
		window?.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}

export function calculateReadTime(text: string) {
	const WPM = 225;
	const words = text.trim().split(/\s+/).length;
	const time = Math.ceil(words / WPM);
	return time;
}

export function toDateString(timestamp) {
	if (typeof timestamp == 'number') {
		var date = new Date(timestamp * 1000);
	}
	else {
		var date = timestamp;
	}
	let month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
	let day = date.getDate() < 10 ? '0' + date.getDate(): date.getDate();
	return date.getFullYear() + '-' + month + '-' + day;
}
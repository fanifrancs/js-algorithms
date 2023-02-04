const pattern = /[^A-Z0-9]/gi;

function reverseString (str) {
	return str.split('').reverse().join('');
}

function palindrome (str) {
	let sanitized = str.replace(pattern, '').toLowerCase();
	if (sanitized === reverseString(sanitized)) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
}

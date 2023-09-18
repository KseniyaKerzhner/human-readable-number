module.exports = function toReadable(number) {

	const numToWords = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
	};

	const tensPlace = {
		2: 'twenty',
		3: 'thirty',
		4: 'forty',
		5: 'fifty',
		6: 'sixty',
		7: 'seventy',
		8: 'eighty',
		9: 'ninety',
	};

	if (number < 20) {
		return numToWords[number];
	} else if (number < 100) {
		const tens = Math.floor(number / 10);
		const remainder = number % 10;
		return tensPlace[tens] + (remainder !== 0 ? ' ' + numToWords[remainder] : '');
	} else if (number < 1000) {
		const hundreds = Math.floor(number / 100);
		const remainder = number % 100;
		return numToWords[hundreds] + ' hundred' + (remainder !== 0 ? ' ' + toReadable(remainder) : '');
	} else {
		return 'Number out of range';
	}

}
const sum = (...numbers) => {
	let finalNumner = numbers.map(x => {
		if (!isNaN(x)) {
			return parseFloat(x, 10)
		} else {
			x = 0;
			return parseFloat(x, 10)
		}
	})
	return finalNumner.reduce((accumulator, current) => {
		return accumulator += current;
	});
};

export default sum
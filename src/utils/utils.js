export const formatNumberToDecimal = (number, minDigits = 2, maxDigits = 2) => {
	const options = {
		style: 'decimal',
		useGrouping: true,
		minimumFractionDigits: minDigits,
		maximumFractionDigits: maxDigits
	};

	return parseFloat(number).toLocaleString('es-AR', options);
};
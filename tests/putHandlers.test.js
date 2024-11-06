// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "coke",
	"price": 19
  }

test('Should return 200 status code when updating a product', async () => {
let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('Should return correct data for updated product', async () => {
	let actualResponseBody;
		try {
			const response = await fetch(`${config.API_URL}/api/v1/products/4`, {
				method: 'PUT',
				headers: {
				'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
	actualResponseBody = await response.json();
		} catch (error) {
			console.error(error);
		}
		expect(actualResponseBody.name).toBe("coke");
		expect(actualResponseBody.price).toBe(19);
	});
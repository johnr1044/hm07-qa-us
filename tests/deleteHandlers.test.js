// eslint-disable-next-line no-undef
const config = require('../config');

test('Delete Kit by ID and check the status code to be 200', async () => {
	
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Check response body to confirm kit ID was deleted', async () => {
	
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		actualResponseBody= await response.text();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toEqual("{\"ok\":true}"); 

});

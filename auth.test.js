const getToken = require('./utils/get_token');

let token;

test('Get Auth Token', async () => {
  token = await getToken();

  console.log("token :", token);
  expect(typeof token).toBe('string');
  expect(token.length).toBeGreaterThan(0);
});
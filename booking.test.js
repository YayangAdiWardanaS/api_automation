const apiClient = require("./utils/api_client");
const bookingData = require("./bookingData.json");
const getToken = require('./utils/get_token');

let bookingId;
let token;

test("Create Booking", async () => {
  const res = await apiClient.post("/booking", bookingData, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  expect(res.status).toBe(200);
  expect(res.data.booking).toMatchObject(bookingData);
  bookingId = res.data.bookingid;
});

test("Get Booking", async () => {
  const res = await apiClient.get(`/booking/${bookingId}`, {
    headers: {
      Accept: "application/json",
    },
  });
  expect(res.status).toBe(200);
  expect(res.data).toMatchObject(bookingData);
});

test("Delete Booking", async () => {
  token = await getToken();

  console.log("Token:", token);
  console.log("Booking ID:", bookingId);
  const res = await apiClient.delete(`/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`,
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    },
  });

  console.log("response dari delete :", res);
  expect(res.status).toBe(201);
});

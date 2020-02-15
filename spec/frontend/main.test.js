const fs = require("fs");
const path = require("path");
const js = fs.readFileSync(path.resolve(__dirname, '../../public/js/utils.js'), "utf8");

eval(js);

test("reservationFormFilled function should work", () => {
  expect(reservationFormFilled(true, true, true, true, true, true))
  .toBeTruthy(); 
})

test("dateFormatter function should work", () => {
  expect(dateFormatter(
    "Fri Feb 14 2020 19:56:01 GMT-0500 (Eastern Standard Time)", "2:00")
  ).toBe("14 Feb 2020 14:00:00 GMT-0500")
})
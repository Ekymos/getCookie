/**
 * @jest-environment jsdom
 */
/* eslint-disable import/no-unresolved */
import '@testing-library/jest-dom';
import { init } from "./index.js";

document.cookie = '_gaTest=GA1.2.232085608.1631272249';
document.body.innerHTML = `
  <input id="ele" type="hidden" data-get-cookie="true" data-get-cookie-key="_gaTest" value="" />
 `;

init();

const element = document.getElementById('ele');

describe("init()", () => {
  test("input should be have value GA1.2.232085608.1631272249", () => {
    expect(element.value).toBe("GA1.2.232085608.1631272249");
  });
});

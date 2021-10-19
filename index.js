/**
 * MODULE: Get Cookie
 *
 * Necesary atrributes to make this module works:
 *
 * - data-get-cookie: it needed to be true to work.
 * - data-get-cookie-key: name of the cookie to need.
 *
 */

/**
 * Function to put the value cookie into element
 *
 * @param {HTMLElement} ele - Element from HTML wich has data-get-cookie attribute
 * @param {String} value - The value cookie
 */
function setValueCookie(ele, value) { ele.value = value; };

/**
 * Function to search and specific name cookie and get there value
 *
 * @param {String} key - The name of the cookie to need find
 * @return {String} - Return the value of the cookie
 */
function getCookieValue(key) {
  const coockies = document.cookie.split(';');
  let valueCookie = coockies;
  if (key) {
    each(coockies, (index) => {
      const cookie = index.split('=');
      if (key === cookie[0].trim()) valueCookie = decodeURIComponent(cookie[1]);
    });
  }
  return valueCookie;
};

/**
 * Function init all functions
 *
 * @param {HTMLElement} element - Element to have all data attributes options
 */
const init = (element) => {
  const cookieData = {
    key: element.dataset.getCookieKey ?? null,
    action: element.dataset.getCookieAction ?? null,
  };
  setValueCookie(element, getCookieValue(cookieData.key));
};

export default {
  init
};

/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

var food, item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


food = ['egg', 'milk', 'bread'];
let element_start = document.getElementById('start');
food.forEach((item) => {
  let new_li = document.createElement('li');
  new_li.innerText = item;
  let new_span = document.createElement('span');
  let new_button = document.createElement('button');
  new_button.innerText = 'Add';
  new_button.setAttribute("id", item);

  new_span.appendChild(new_button);

  new_li.appendChild(new_span);

  element_start.appendChild(new_li);
});


document.getElementById('egg').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'egg';

  element_list.appendChild(new_li2);

});

document.getElementById('milk').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'milk';

  element_list2.appendChild(new_li3);

});

document.getElementById('bread').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'bread';

  element_list3.appendChild(new_li4);

});

document.getElementById('add').addEventListener('click', (event) => {
  let element_list4 = document.getElementById('list');
  let new_li5 = document.createElement('li');
  new_li5.innerText = getNumberOrString(document.getElementById('text').value);

  element_list4.appendChild(new_li5);

});
var images, pages;


pages = ['Once upon a time there lived a lion in a forest. One day after a heavy meal. It was sleeping under a tree. After a while, there came a mouse and it started to play on the lion.', 'Suddenly the lion got up with anger and looked for those who disturbed its nice sleep. Then it saw a small mouse standing trembling with fear. ', 'The lion jumped on it and started to kill it. The mouse requested the lion to forgive it. The lion felt pity and left it. The mouse ran away.', 'On another day, the lion was caught in a net by a hunter. The mouse came there and cut the net. Thus it escaped. There after, the mouse and the lion became friends. They lived happily in the forest afterwards.'];
images = [null, null, null];

images = 0;


document.getElementById('next_page').addEventListener('click', (event) => {
  let element_story = document.getElementById('story');
  pages.push(pages[0]);
  element_story.innerText = pages.shift();

});

document.getElementById('previous_page').addEventListener('click', (event) => {
  let element_story2 = document.getElementById('story');
  pages.unshift(pages.slice(-1)[0]);
  element_story2.innerText = pages.pop();

});
let element_images = document.getElementById('images');
pages.unshift(pages.shift());

const console = document.getElementById("tests");
prettify.toHTML(run(), console);

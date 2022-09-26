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
  element_start.style.backgroundColor = '#ffffff';
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
  element_list4.style.backgroundColor = '#ffffff';
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

var img;

// Describe this function...
function forward() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
}


img = ['https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__480.jpg', 'https://i0.wp.com/thrive50plus.com/wp-content/uploads/2021/12/what-do-you-need-for-your-new-kitten-pet-life-t.jpeg?fit=750%2C500&ssl=1', 'https://i.pinimg.com/originals/af/78/3c/af783c232a225adb7c18e11b3dd57b0d.jpg'];


document.getElementById('next').addEventListener('click', (event) => {
  let element_images = document.getElementById('images');
  img.push(img[0]);
  element_images.setAttribute("src", img.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_images2 = document.getElementById('images');
  img.unshift(img.slice(-1)[0]);
  element_images2.setAttribute("src", img.pop());

});



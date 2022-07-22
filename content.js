const LOGO = 'https://w7.pngwing.com/pngs/185/396/png-transparent-pepe-the-frog-united-states-internet-meme-frowny-frog-s-leaf-vertebrate-grass.png';
const TIME = 200;
const idxs = [];
const imgs = document.querySelectorAll('img');
const ori = [...imgs].map(e => e.src);

const changeImg = () => {
    while (idxs.length != imgs.length) {
        const rnd = Math.floor(Math.random() * imgs.length);

        if (!idxs.includes(rnd)) {
            idxs.push(rnd);
            imgs[rnd].src = LOGO;
            break;
        }
    }
}

let run = true;
let timer = setInterval(changeImg, TIME);

const toggle = () => {
    run ? clearInterval(timer) : timer = setInterval(changeImg, TIME);
    run = !run;
    return run ? "pause" : "resume";
}

const reset = () => {
    idxs.length = 0;
    imgs.forEach((e, i) => e.src = ori[i])
    return "reset";
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    message.type == "toggle" ? sendResponse(toggle()) : sendResponse(reset());
});
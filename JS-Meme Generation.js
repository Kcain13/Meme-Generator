// Create references for HTML elements 
const form = document.querySelector('#form');
const submitButton = document.querySelector('#subButton');
const areaForMeme = document.querySelector('#areaForMeme');
let imageSrc = document.querySelector('#imgSrc')
let topText = document.querySelector('#textOnTop')
let bottomText = document.querySelector('#textOnBottom')

let memes = [];

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (imageSrc.value === '' || topText.value === '' || bottomText.value === '') {
        alert('Please ensure all fields are complete for proper Generation')
    }
    else {
        memeGenerator();
    }
})

function memeGenerator() {
    let meme = document.createElement('div');
    areaForMeme.append(meme);
    meme.classList.add('meme'); // create class for delete button target
    memes.push(meme)

    let memeTopText = document.createElement('div');
    memeTopText.innerHTML = topText.value;
    memeTopText.classList.add('userTopText')
    meme.append(memeTopText);

    let memeBottomText = document.createElement('div');
    memeBottomText.innerHTML = bottomText.value;
    memeBottomText.classList.add('userBottomText');
    meme.append(memeBottomText);

    let image = document.createElement('img');
    image.classList.add('image');
    image.src = imageSrc.value;
    meme.append(image);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete Meme";
    deleteButton.classList.add('delete');
    meme.append(deleteButton);

    meme.onmouseover = function () {
        deleteButton.style.opacity = 100;
    }
    meme.onmouseout = function () {
        deleteButton.style.opacity = 0;
    }
    deleteButton.addEventListener("click", function () {
        meme.remove()
    })

    clearMeme()  // needed to clear input fields
}

function clearMeme() {
    topText.value = ""
    bottomText.value = ""
    imageSrc.value = ""
}










// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then((response) => {
    Object.values(response.data.articles).forEach((item) => {
        item.forEach((item) => {
            const newCard = document.querySelector('.cards-container')
            newCard.appendChild(newCards(item));
        })
    })
    console.log(response);
})

//create elements
function newCards(items) {
    const mainCard = document.createElement('div');
    const mainHead = document.createElement('div');
    const newAuth = document.createElement('div');
    const imgCont = document.createElement('div');
    const newImg = document.createElement('img');
    const newSpan = document.createElement('span');

    //create classes
    mainCard.classList.add('card');
    mainHead.classList.add('headline');
    newAuth.classList.add('author');
    imgCont.classList.add('img-container');

    //text content
    mainHead.textContent = items.headline;
    newImg.src = items.authorPhoto;
    newSpan.textContent = items.authorName;

    //append
    mainCard.appendChild(mainHead);
    mainHead.appendChild(newAuth);
    newAuth.appendChild(newSpan);
    newAuth.appendChild(imgCont);
    imgCont.appendChild(newImg);

    return mainCard;
}
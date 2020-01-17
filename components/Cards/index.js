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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    Object.keys(response.data.articles).forEach((key, index) => {
      response.data.articles[key].forEach(obj => {
        const newArticle = createArticle(obj);
        document.querySelector(".cards-container").append(newArticle);
      });
    });
  })
  .catch(err => console.log(err));

function createArticle(obj) {
  // create
  const mainCardDiv = document.createElement("div");
  mainCardDiv.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = obj.headline;
  const author = document.createElement("div");
  author.classList.add("author");
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = obj.authorPhoto;
  const span = document.createElement("span");
  span.textContent = `By: ${obj.authorName}`;
  // assemble
  mainCardDiv.append(headline);
  imageContainer.append(img);
  author.append(imageContainer);
  author.append(span);
  mainCardDiv.append(author);
  // return
  return mainCardDiv;
}

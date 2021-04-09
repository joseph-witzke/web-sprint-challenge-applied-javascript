import axios from "axios";

const Card = (article) => {
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorSpan = document.createElement("span");
  
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");
  
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(authorSpan);
  imgDiv.appendChild(authorImg);

  headlineDiv.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  authorSpan.textContent = article.authorName;

  cardDiv.addEventListener("click", () => {
    console.log(article.headline);
  })
  
  return cardDiv;
  

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((res) => {
    console.log("RESPONSE, i.e. 'res': \n \n", res);
    // console.log("res.data: \n \n", res.data);
    // console.log("IMAGES: \n \n", res.data.message);
    const newCard = res.data.articles.javascript;

    newCard.forEach((item) => {
      const articleCard = Card(item);
      const cardParent = document.querySelector(".cards-container");
      cardParent.appendChild(articleCard);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
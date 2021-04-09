import axios from "axios";

const Tabs = (topics) => {
  const headerDiv = document.createElement("div");
  const topic1 = document.createElement("div");
  const topic2 = document.createElement("div");
  const topic3 = document.createElement("div");
  const topic4 = document.createElement("div");
  const topic5 = document.createElement("div");

  headerDiv.classList.add("topics");
  topic1.classList.add("tab");
  topic2.classList.add("tab");
  topic3.classList.add("tab");
  topic4.classList.add("tab");
  topic5.classList.add("tab");
  topic1.textContent = topics;
  

  headerDiv.appendChild(topic1);


  return headerDiv;



  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
  .then((res) => {
    // console.log("RESPONSE, i.e. 'res': \n \n", res);
    // console.log("res.data: \n \n", res.data);
    // console.log("IMAGES: \n \n", res.data.message);
    const newTab = res.data.topics;

    newTab.forEach((item) => {
      const newArray = Tabs(item);
      const tabsParent = document.querySelector(".tabs-container");
      tabsParent.appendChild(newArray);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }

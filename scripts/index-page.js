const commentArr = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// comment API:
const commentAPI =
  "https://project-1-api.herokuapp.com/comments?api_key=0f383f02-d3bd-4c8d-9bee-b53825c23122";

// Comments Section
const commentContainer = document.querySelector(
  "#comment-section__card-container"
);

// get comments via promise

getComments = () => {
  axios
    .get(commentAPI)
    .then((results) => {
      results.forEach();
    })
    .catch((err) => console.log(err));
};

// build comment card element

const buildCard = (obj) => {
  const cardEl = document.createElement("article");
  cardEl.classList.add("comment-card");

  const commentName = document.createElement("h3");
  commentName.classList.add("comment-card__name");
  commentName.innerText = obj.name;

  const commentAvatar = document.createElement("figure");
  commentAvatar.classList.add("comment-card__avatar");

  const commentDate = document.createElement("p");
  commentDate.classList.add("comment-card__date");
  commentDate.innerText = obj.date;

  const commentText = document.createElement("p");
  commentText.classList.add("comment-card__text");
  commentText.innerText = obj.text;

  cardEl.appendChild(commentName);
  cardEl.appendChild(commentAvatar);
  cardEl.appendChild(commentDate);
  cardEl.appendChild(commentText);
  commentContainer.appendChild(cardEl);
};

// display comment

const displayComment = () => {
  commentContainer.innerHTML = "";

  for (let i = 0; i < commentArr.length; i++) {
    buildCard(commentArr[i]);
  }
};

// Event listener on submit

const handleCommentSubmit = (event) => {
  event.preventDefault();

  // formatting the date
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let newDate = `${month}/${day}/${year}`;

  const commentData = {
    name: event.target.name.value,
    date: newDate,
    text: event.target.comment.value,
  };

  commentArr.unshift(commentData);
  displayComment();
  formEl.reset();
};

const formEl = document.querySelector("#comment-form");
formEl.addEventListener("submit", handleCommentSubmit);

displayComment();

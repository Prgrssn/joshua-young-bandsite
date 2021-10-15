const commentArr = [
  {
    name: "Connor Walton",
    date: "02 / 17 / 2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01 / 09 / 2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12 / 20 / 2020",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

console.log(commentArr);

// Comments Section

const createCommentCard = (comment) => {
  // creating the comment card <article></article>
  const cardEl = document.createElement("article");
  cardEl.classList.add("comment-card");

  // creating the name header container to the comment card <h3></h3>
  const commentName = document.createElement("h3");
  commentName.classList.add("comment-card__name");
  commentName.innerText = commentArr[i].name;

  // creating the date span container to the comment card <span></span>
  const commentDate = document.createElement("span");
  commentDate.classList.add("comment-card__date");
  commentDate.innerText = commentArr[i].date;

  // creating the comment text container to the comment card <span></span>
  const commentText = document.createElement("span");
  commentText.classList.add("comment-card__comment");
  commentText.innerText = commentArr[i].text;

  // adding the name to the comment card
  cardEl.appendChild(commentName);
  // adding the date to the comment card
  cardEl.appendChild(commentDate);
  // adding the comment to the comment card
  cardEl.appendChild(commentText);
};

createCommentCard();

// const displayComment = (comment) => {
//   const commentContainer = document.getElementById(
//     "comment-section__card-container"
//   );

//   commentContainer.innerHTML = "";

//   for (let i = 0; i < commentArr.length; i++) {
//     const card = createCommentCard(commentArr[i]);
//     commentContainer.appendChild(card);
//   }
// };

// what happens when event is triggered

const handleCommentSubmit = (event) => {
  event.preventDefault();

  const commentData = {
    name: event.target.name.value,
    date: event.timeStamp,
    text: event.target.comment.value,
  };

  commentArr.push(commentData);
  // displayComment();
};

// Event listener on submit
const formEl = document.querySelector("#comment-form");
formEl.addEventListener("submit", handleCommentSubmit);

// displayComment();

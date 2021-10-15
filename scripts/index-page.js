const commentArr = [
  {
    name: "Connor Walton",
    date: "02 / 17 / 2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01 / 09 / 2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12 / 20 / 2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const formEl = document.getElementById("comment-form");
console.log(formEl);

function createCommentCard(comment) {
  const cardEl = document.createElement("article");
  cardEl.classList.add("comment-card");

  const commentName = document.createElement("h3");
  commentName.classList.add("comment-card__name");
  commentName.innerText = comment.name;

  const commentDate = document.createElement("span");
  commentDate.classList.add("comment-card__date");
  commentDate.innerText = comment.date;

  const commentText = document.createElement("span");
  commentDate.classList.add("comment-card__comment");
  commentText.innerText = comment.text;

  cardEl.appendChild(commentName);
  cardEl.appendChild(commentDate);
  cardEl.appendChild(commentText);
}

// const displayComment = (obj) => {

// }

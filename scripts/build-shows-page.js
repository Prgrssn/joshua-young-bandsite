// Shows Array

// const showsArray = [
//   {
//     date: "Mon Sept 06 2021",
//     place: "Ronald Lane  ",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Tue Sept 21 2021",
//     place: "Pier 3 East  ",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Oct 15 2021 ",
//     place: "View Lounge ",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Nov 06 2021 ",
//     place: "Hyatt Agency ",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Nov 26 2021 ",
//     place: "Moscow Center",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Wed Dec 15 2021 ",
//     place: "Press Club   ",
//     location: "San Francisco, CA",
//   },
// ];

// shows API:
const showsAPI =
  "https://project-1-api.herokuapp.com/showdates?api_key=0f383f02-d3bd-4c8d-9bee-b53825c23122";

// Shows Section:
const showSection = document.querySelector(".shows-section");

// Shows Section Header:

const displayShowsSectionHeader = () => {
  const sectionHeader = document.createElement("h2");
  sectionHeader.classList.add("shows-section__header");
  sectionHeader.innerText = "Shows";
  showSection.appendChild(sectionHeader);
};

displayShowsSectionHeader();

// get shows:

// const getComments = (result) => {
//   axios
//     .get(showsAPI)
//     .then((result) => {
//       console.log(result);

//       const commentContent = (element) => {
//         element.forEach(() => {
//           const tableRow = document.createElement("tr");
//           tableRow.classList.add("show-table__show-row");

//           const showDate = document.createElement("td");
//           showDate.classList.add("show-table__text--date");
//           showDate.innerText = element.date;

//           const showVenue = document.createElement("td");
//           showVenue.classList.add("show-table__text");
//           showVenue.innerText = element.place;

//           const showLocation = document.createElement("td");
//           showLocation.classList.add("show-table__text");
//           showLocation.innerText = element.location;

//           const ticketButton = document.createElement("button");
//           ticketButton.classList.add("show-table__button");
//           ticketButton.innerText = "BUY TICKETS";

//           tableRow.appendChild(showDate);
//           tableRow.appendChild(showVenue);
//           tableRow.appendChild(showLocation);
//           tableRow.appendChild(ticketButton);
//           showTableBody.appendChild(tableRow);
//         });
//       };
//     })
//     .catch((err) => {
//       console.log(error);
//     });
// };

// getComments();

// Shows table Construction:

const constructShowTable = () => {
  const showTable = document.createElement("table");
  showTable.classList.add("show-table");

  const showTableHeadRow = document.createElement("thead");
  showTableHeadRow.classList.add("show-table__header");

  const showHeaderTextDate = document.createElement("th");
  showHeaderTextDate.classList.add("show-table__header--date-text");
  showHeaderTextDate.innerText = "DATE";

  const showHeaderTextVenue = document.createElement("th");
  showHeaderTextVenue.classList.add("show-table__header--venue-text");
  showHeaderTextVenue.innerText = "VENUE";

  const showHeaderTextLocation = document.createElement("th");
  showHeaderTextLocation.classList.add("show-table__header--loc-text");
  showHeaderTextLocation.innerText = "LOCATION";

  const showTableBody = document.createElement("tbody");
  showTableBody.classList.add("show-table__body");

  showSection.appendChild(showTable);
  showTable.appendChild(showTableHeadRow);
  showTableHeadRow.appendChild(showHeaderTextDate);
  showTableHeadRow.appendChild(showHeaderTextVenue);
  showTableHeadRow.appendChild(showHeaderTextLocation);
  showTable.appendChild(showTableBody);

  axios
    .get(showsAPI)
    .then((result) => {
      console.log(result);
      const commentContent = result.data.forEach((element) => {
        const tableRow = document.createElement("tr");
        tableRow.classList.add("show-table__show-row");

        const showDate = document.createElement("td");
        showDate.classList.add("show-table__text--date");
        showDate.innerText = element.date;

        const showVenue = document.createElement("td");
        showVenue.classList.add("show-table__text");
        showVenue.innerText = element.place;

        const showLocation = document.createElement("td");
        showLocation.classList.add("show-table__text");
        showLocation.innerText = element.location;

        const ticketButton = document.createElement("button");
        ticketButton.classList.add("show-table__button");
        ticketButton.innerText = "BUY TICKETS";

        showTableBody.appendChild(tableRow);
        tableRow.appendChild(showDate);
        tableRow.appendChild(showVenue);
        tableRow.appendChild(showLocation);
        tableRow.appendChild(ticketButton);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

constructShowTable(showsAPI);

// active row event listener

const activeRow = document.querySelectorAll(".show-table__show-row");

activeRow.forEach((activeRow) => {
  activeRow.addEventListener("click", (event) => {
    activeRow.classList.add("show-table__show-row:active");
  });
});

// axios
//   .get(showsAPI)
//   .then((result) => {
//     console.log(result);
//     const commentContent = (element) => {
//       console.log(commentContent);
//       for (let i = 0; i < showsArray.length; i++) {
//         const tableRow = document.createElement("tr");
//         tableRow.classList.add("show-table__show-row");

//         const showDate = document.createElement("td");
//         showDate.classList.add("show-table__text--date");
//         showDate.innerText = element.date;

//         const showVenue = document.createElement("td");
//         showVenue.classList.add("show-table__text");
//         showVenue.innerText = element.place;

//         const showLocation = document.createElement("td");
//         showLocation.classList.add("show-table__text");
//         showLocation.innerText = element.location;

//         const ticketButton = document.createElement("button");
//         ticketButton.classList.add("show-table__button");
//         ticketButton.innerText = "BUY TICKETS";

//         showTableBody.appendChild(tableRow);
//         tableRow.appendChild(showDate);
//         tableRow.appendChild(showVenue);
//         tableRow.appendChild(showLocation);
//         tableRow.appendChild(ticketButton);
//       }
//     };
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// for (let i = 0; i < showsArray.length; i++) {
//   const tableRow = document.createElement("tr");
//   tableRow.classList.add("show-table__show-row");

//   const showDate = document.createElement("td");
//   showDate.classList.add("show-table__text--date");
//   showDate.innerText = showsArray[i].date;

//   const showVenue = document.createElement("td");
//   showVenue.classList.add("show-table__text");
//   showVenue.innerText = showsArray[i].place;

//   const showLocation = document.createElement("td");
//   showLocation.classList.add("show-table__text");
//   showLocation.innerText = showsArray[i].location;

//   const ticketButton = document.createElement("button");
//   ticketButton.classList.add("show-table__button");
//   ticketButton.innerText = "BUY TICKETS";

//   showTableBody.appendChild(tableRow);
//   tableRow.appendChild(showDate);
//   tableRow.appendChild(showVenue);
//   tableRow.appendChild(showLocation);
//   tableRow.appendChild(ticketButton);
// }

// axios
//   .get(showsAPI)
//   .then((result) => {
//     console.log(result);
//     const commentContent = (element) => {
//       console.log(commentContent);
//       element.forEach(() => {
//         const tableRow = document.createElement("tr");
//         tableRow.classList.add("show-table__show-row");

//         const showDate = document.createElement("td");
//         showDate.classList.add("show-table__text--date");
//         showDate.innerText = element.date;

//         const showVenue = document.createElement("td");
//         showVenue.classList.add("show-table__text");
//         showVenue.innerText = element.place;

//         const showLocation = document.createElement("td");
//         showLocation.classList.add("show-table__text");
//         showLocation.innerText = element.location;

//         const ticketButton = document.createElement("button");
//         ticketButton.classList.add("show-table__button");
//         ticketButton.innerText = "BUY TICKETS";

//         tableRow.appendChild(showDate);
//         tableRow.appendChild(showVenue);
//         tableRow.appendChild(showLocation);
//         tableRow.appendChild(ticketButton);
//         showTableBody.appendChild(tableRow);
//       }
//       );
//     };
//   })
//   .catch((err) => {
//     console.log(err);
//   });

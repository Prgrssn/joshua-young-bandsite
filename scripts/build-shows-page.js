// Shows Array

const showsArray = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane  ",
    Location: "San Francisco, CA",
  },
  {
    Date: "Tue Sept 21 2021",
    Venue: "Pier 3 East  ",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Oct 15 2021 ",
    Venue: "View Lounge ",
    Location: "San Francisco, CA",
  },
  {
    Date: "Sat Nov 06 2021 ",
    Venue: "Hyatt Agency ",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Nov 26 2021 ",
    Venue: "Moscow Center",
    Location: "San Francisco, CA",
  },
  {
    Date: "Wed Dec 15 2021 ",
    Venue: "Press Club   ",
    Location: "San Francisco, CA",
  },
];

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

// Shows table Construction:

const constructShowTable = () => {
  const showTable = document.createElement("table");
  showTable.classList.add("show-table");

  const showTableHead = document.createElement("thead");

  const showTableHeadRow = document.createElement("tr");
  showTableHeadRow.classList.add("show-table__header");

  const showHeaderTextDate = document.createElement("th");
  showHeaderTextDate.classList.add("show-table__header--text");
  showHeaderTextDate.innerText = "DATE";

  const showHeaderTextVenue = document.createElement("th");
  showHeaderTextVenue.classList.add("show-table__header--text");
  showHeaderTextVenue.innerText = "VENUE";

  const showHeaderTextLocation = document.createElement("th");
  showHeaderTextLocation.classList.add("show-table__header--text");
  showHeaderTextLocation.innerText = "LOCATION";

  const showTableBody = document.createElement("tbody");
  showTableBody.classList.add("show-table__body");

  showSection.appendChild(showTable);
  showTable.appendChild(showTableHead);
  showTableHead.appendChild(showTableHeadRow);
  showTableHeadRow.appendChild(showHeaderTextDate);
  showTableHeadRow.appendChild(showHeaderTextVenue);
  showTableHeadRow.appendChild(showHeaderTextLocation);
  showTable.appendChild(showTableBody);

  for (let i = 0; i < showsArray.length; i++) {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("show-table__show-row");

    const showDate = document.createElement("td");
    showDate.classList.add("show-table__text--date");
    showDate.innerText = showsArray[i].Date;

    const showVenue = document.createElement("td");
    showVenue.classList.add("show-table__text");
    showVenue.innerText = showsArray[i].Venue;

    const showLocation = document.createElement("td");
    showLocation.classList.add("show-table__text");
    showLocation.innerText = showsArray[i].Location;

    const ticketButton = document.createElement("button");
    ticketButton.classList.add("show-table__button");
    ticketButton.innerText = "BUY TICKETS";

    showTableBody.appendChild(tableRow);
    tableRow.appendChild(showDate);
    tableRow.appendChild(showVenue);
    tableRow.appendChild(showLocation);
    tableRow.appendChild(ticketButton);
  }
};

constructShowTable(showsArray);

// active row event listener

const activeRow = document.querySelectorAll(".show-table__show-row");

activeRow.forEach((activeRow) => {
  activeRow.addEventListener("click", (event) => {
    activeRow.classList.add("show-table__show-row:active");
  });
});

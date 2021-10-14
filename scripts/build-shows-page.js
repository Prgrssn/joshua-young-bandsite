// Shows Array

const showsArray = [
  {
    ID: 1,
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Francisco, CA",
    Tickets: "Buy Tickets",
  },
  {
    ID: 2,
    Date: "Tue Sept 21 2021",
    Venue: "Pier 3 East ",
    Location: "San Francisco, CA",
    Tickets: "Buy Tickets",
  },
  {
    ID: 3,
    Date: "Fri Oct 15 2021",
    Venue: "View Lounge ",
    Location: "San Francisco, CA",
    Tickets: "Buy Tickets",
  },
  {
    ID: 4,
    Date: "Sat Nov 06 2021",
    Venue: "Hyatt Agency",
    Location: "San Francisco, CA",
    Tickets: "Buy Tickets",
  },
  {
    ID: 5,
    Date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    Location: "San Francisco, CA",
    Tickets: "Buy Tickets",
  },
  {
    ID: 6,
    Date: "Wed Dec 15 2021",
    Venue: "Press Club",
    Location: "San Francisco, CA",
    Tickets: "Buy Tickets",
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

const displayShowsTable = (showsArray) => {
  const showTable = document.createElement("table");
  showTable.classList.add("show-table");
  showSection.appendChild(showTable);

  const tableSubheader = document.createElement("thead");
  tableSubheader.classList.add("show-table__subheader");
  showTable.appendChild(tableSubheader);

  const tableSubheaderDate = document.createElement("td");
  tableSubheaderDate.classList.add("show-table__subheader--text");
  tableSubheaderDate.innerText = "Date";
  tableSubheader.appendChild(tableSubheaderDate);

  const tableSubheaderVenue = document.createElement("td");
  tableSubheaderVenue.classList.add("show-table__subheader--text");
  tableSubheaderVenue.innerText = "Venue";
  tableSubheader.appendChild(tableSubheaderVenue);

  const tableSubheaderLocation = document.createElement("td");
  tableSubheaderLocation.classList.add("show-table__subheader--text");
  tableSubheaderLocation.innerText = "Location";
  tableSubheader.appendChild(tableSubheaderLocation);

  const showTableBody = document.createElement("tbody");
  showTableBody.classList.add("show-table__body");
  showTable.appendChild(showTableBody);
  console.log(showTable);

  for (let i = 0; i < showsArray.length; i++) {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("show-table__row");
    showTableBody.appendChild(tableRow);

    const tableRowDate = document.createElement("td");
    tableRowDate.classList.add("shows-table__dates");
    tableRowDate.innerText = showsArray[i].Date;
    tableRow.appendChild(tableRowDate);

    const tableRowVenue = document.createElement("td");
    tableRowVenue.classList.add("shows-table__row-title");
    tableRowVenue.innerText = showsArray[i].Venue;
    tableRow.appendChild(tableRowVenue);

    const tableRowLocation = document.createElement("td");
    tableRowLocation.classList.add("shows-table__row-title");
    tableRowLocation.innerText = showsArray[i].Location;
    tableRow.appendChild(tableRowLocation);

    const tableRowButton = document.createElement("button");
    tableRowButton.classList.add("shows-table__button");
    tableRowButton.innerText = showsArray[i].Tickets;
    tableRow.appendChild(tableRowButton);
  }
};

displayShowsTable(showsArray);

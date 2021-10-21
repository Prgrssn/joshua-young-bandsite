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
      const showTimes = result.data.forEach((element) => {
        // let timestamp = element.date;
        // let newTimestamp = new Date(timestamp * 1000);
        // let newDate = newTimestamp.write(newDate.toLocaleString());
        // let day = newTimestamp.getDay();
        // let month = newTimestamp.getMonth() + 1;
        // let date = newTimestamp.getDate();
        // let year = newTimestamp.getFullYear();
        // let newDate = `${day}/${month}/${date}/${year}`;

        const tableRow = document.createElement("tr");
        tableRow.classList.add("show-table__show-row");

        const showDate = document.createElement("td");
        showDate.classList.add("show-table__text--date");
        // showDate.innerText = element.date;
        // const newDate = new Date(Number(element.date));
        showDate.innerText = new Date(Number(element.date)).toDateString();

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

constructShowTable();

// active row event listener

const activeRow = document.querySelectorAll(".show-table__show-row");

activeRow.forEach((activeRow) => {
  activeRow.addEventListener("click", (event) => {
    activeRow.classList.add("show-table__show-row:active");
  });
});

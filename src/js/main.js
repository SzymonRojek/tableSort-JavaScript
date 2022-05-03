import {
  getDataFromHtmlTable,
  addFormattedTimeToData,
  toggleArrow,
  getAscendingOrderData,
  getDescendingOrderData,
} from "./helpers";

const row = [...document.querySelectorAll("tbody tr")];
const tableHead = document.querySelector("thead");

const dataTable = getDataFromHtmlTable(row);
const formattedData = addFormattedTimeToData(dataTable);

init();

function init() {
  const sortedData = getAscendingOrderData(formattedData, "formattedTime");
  renderSortedData(sortedData);

  tableHead.addEventListener("click", (event) => {
    toggleArrow(event);

    const direction = event.target.firstChild.classList.contains("fa-caret-up")
      ? "up"
      : "down";

    if (event.target.matches("a")) {
      sortDataHandler(
        event,
        direction,
        event.target.attributes["data-sort"].value
      );
    }
  });
}

function sortDataHandler(_, direction, property) {
  const sortedData =
    direction === "up"
      ? getDescendingOrderData(formattedData, property)
      : getAscendingOrderData(formattedData, property);

  renderSortedData(sortedData);
}

function renderSortedData(data) {
  const tableBody = document.querySelector("tbody");

  tableBody.innerHTML = "";

  return data.forEach(
    ({ title, author, formattedTime }) =>
      (tableBody.innerHTML += `
      <tr class="cursor-pointer animate-smoothChange odd:bg-white even:bg-slate-100 hover:bg-sky-700 hover:text-white transition ease-in-out delay-100">
        <td class="border px-4 py-4">${title}</td>
        <td class="border px-4 py-4">${author}</td>
        <td class="border px-4 py-4">${formattedTime}</td>
      </tr>
  `)
  );
}

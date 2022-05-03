import {
  getDataFromHtmlTable,
  addFormattedTimeToData,
  toggleArrow,
  getAscendingOrderData,
  getDescendingOrderData,
} from "../helpers";

const row = [...document.querySelectorAll("tbody tr")];
const toggleLink = document.querySelectorAll("[data-sort]");

const dataTable = getDataFromHtmlTable(row);
const formattedData = addFormattedTimeToData(dataTable);

init();

function init() {
  const sortedData = getAscendingOrderData(formattedData, "formattedTime");
  renderSortedData(sortedData);

  toggleLink.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      toggleArrow(event);

      const direction = event.target.firstChild.classList.contains(
        "fa-caret-up"
      )
        ? "up"
        : "down";

      switch (index) {
        case 0:
          return sortDataTitleHandler(event, direction);
        case 1:
          return sortDataAuthorHandler(event, direction);
        case 2:
          return sortDataTimeHandler(event, direction);
        default:
          break;
      }
    });
  });
}

function sortDataTitleHandler(_, direction) {
  const sortedData =
    direction === "up"
      ? getDescendingOrderData(formattedData, "title")
      : getAscendingOrderData(formattedData, "title");

  renderSortedData(sortedData);
}

function sortDataAuthorHandler(_, direction) {
  const sortedData =
    direction === "up"
      ? getDescendingOrderData(formattedData, "author")
      : getAscendingOrderData(formattedData, "author");

  renderSortedData(sortedData);
}

function sortDataTimeHandler(_, direction) {
  const sortedData =
    direction === "up"
      ? getDescendingOrderData(formattedData, "formattedTime")
      : getAscendingOrderData(formattedData, "formattedTime");

  renderSortedData(sortedData);
}

function renderSortedData(data) {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  return data.forEach(({ title, author, formattedTime }) => {
    return (tableBody.innerHTML += `
      <tr class="cursor-pointer animate-smoothChange odd:bg-white even:bg-slate-100 hover:bg-sky-700 hover:text-white transition ease-in-out delay-100">
        <td class="border px-4 py-4">${title}</td>
        <td class="border px-4 py-4">${author}</td>
        <td class="border px-4 py-4">${formattedTime}</td>
      </tr>
  `);
  });
}

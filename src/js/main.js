import {
  getDataFromHtmlTable,
  loadData,
  addFormattedTimeToData,
  toggleArrow,
  sortDataTime,
  sortStringData,
} from "../helpers";

const row = [...document.querySelectorAll("tbody tr")];
const buttonTime = document.querySelector("[data-sortTime]");
const buttonAuthor = document.querySelector("[data-sortAuthor");
const buttonModuleTitle = document.querySelector("[data-sortModuleTitle");
const timeCells = document.querySelectorAll("tbody td:last-of-type");

const dataTable = getDataFromHtmlTable(row);
const formattedData = addFormattedTimeToData(dataTable);

init();

function init() {
  loadData(formattedData, timeCells);

  buttonTime.addEventListener("click", sortDataTimeHandler);

  buttonAuthor.addEventListener("click", sortDataAuthorHandler);

  buttonModuleTitle.addEventListener("click", sortDataModuleTitleHandler);
}

function sortDataTimeHandler(e) {
  const arrowIcon = buttonTime.firstChild;
  toggleArrow(arrowIcon);

  const sortedData = sortDataTime(formattedData, buttonTime, "duration");
  renderSortedData(sortedData);
}

function sortDataAuthorHandler() {
  const arrowIcon = buttonAuthor.firstChild;
  toggleArrow(arrowIcon);

  const sortedData = sortStringData(buttonAuthor, formattedData, "author");
  renderSortedData(sortedData);
}

function sortDataModuleTitleHandler() {
  const arrowIcon = buttonModuleTitle.firstChild;
  toggleArrow(arrowIcon);

  const sortedData = sortStringData(buttonModuleTitle, formattedData, "title");
  renderSortedData(sortedData);
}

function renderSortedData(data) {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  return data.forEach(({ title, author, formattedTime }) => {
    return (tableBody.innerHTML += `
      <tr class="animate-smoothChange odd:bg-white even:bg-slate-100 hover:bg-sky-500 hover:ring-sky-500">
        <td class="border px-4 py-2">${title}</td>
        <td class="border px-4 py-2">${author}</td>
        <td class="border px-4 py-2">${formattedTime}</td>
      </tr>
  `);
  });
}

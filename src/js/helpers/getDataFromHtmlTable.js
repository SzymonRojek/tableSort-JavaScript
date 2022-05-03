export default function getDataFromHtmlTable(rowTable) {
  const dataBodyTable = [];

  rowTable.forEach((_, i) => {
    const dataFromTable = {};
    const cells = [
      ...document.querySelectorAll(`tbody tr:nth-child(${i + 1}) td`),
    ];
    const keys = ["title", "author", "duration"];

    cells.map((_, i) => {
      const key = keys[i];
      const cellText = cells[i];

      dataFromTable[key] = cellText.textContent;
    });

    dataBodyTable.push(dataFromTable);
  });

  return dataBodyTable;
}

export default function loadData(data) {
  return data.forEach((cell, i) => {
    cell.textContent = data[i].formattedTime;
  });
}

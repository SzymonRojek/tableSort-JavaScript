export default function sortDataTime(data, element, property) {
  const arrowIcon = element.firstChild;
  const direction = arrowIcon.classList.contains("fa-caret-up") ? "up" : "down";

  return data.sort((a, b) =>
    direction === "down" ? a[property] - b[property] : b[property] - a[property]
  );
}

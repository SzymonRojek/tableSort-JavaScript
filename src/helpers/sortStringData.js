export default function sortStringData(element, data, property) {
  const arrowIcon = element.firstChild;
  const direction = arrowIcon.classList.contains("fa-caret-up") ? "up" : "down";

  return data.sort((a, b) =>
    direction === "down"
      ? a[property].localeCompare(b[property])
      : b[property].localeCompare(a[property])
  );
}

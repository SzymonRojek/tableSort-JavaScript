export default function toggleArrow(event) {
  event.target.firstChild.classList.toggle("fa-caret-up");
  event.target.firstChild.classList.toggle("fa-caret-down");
}

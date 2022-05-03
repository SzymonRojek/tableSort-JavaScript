export default function getDescendingOrderData(data, property) {
  return data.sort((a, b) =>
    b[property].localeCompare(a[property], {
      numeric: true,
      sensitivity: "base",
    })
  );
}

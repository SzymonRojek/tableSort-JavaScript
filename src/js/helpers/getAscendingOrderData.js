export default function getAscendingOrderData(data, property) {
  return data.sort((a, b) =>
    a[property].localeCompare(b[property], {
      numeric: true,
      sensitivity: "base",
    })
  );
}

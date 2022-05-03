export function formatDurationToStandardTime(seconds) {
  const regFormatZero = /\b(\d)\b/g;
  return [
    parseInt(seconds / 60 / 60),
    parseInt((seconds / 60) % 60),
    parseInt(seconds % 60),
  ]
    .join(":")
    .replace(regFormatZero, "0$1");
}

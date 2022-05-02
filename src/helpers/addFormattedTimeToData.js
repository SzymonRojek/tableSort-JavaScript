import { formatDurationToStandardTime } from "./formatDurationToStandardTime.js";

export default function addFormattedTimeToData(data) {
  return data.map((module) => ({
    ...module,
    formattedTime: formatDurationToStandardTime(module.duration),
  }));
}

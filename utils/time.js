export function formatRelativeTime(isoDateString) {
  const date = new Date(isoDateString);

  const thresholds = [
    { max: 1, text: "today" },
    { max: 2, text: "yesterday" },
    { max: 7, text: (d) => `${d} days ago` },
    { max: 14, text: "a week ago" },
    { max: 21, text: "2 weeks ago" },
    { max: 28, text: "3 weeks ago" },
    { max: 60, text: "a month ago" },
  ];

  const rule = thresholds.find((t) => date < t.max);

  if (rule) {
    return typeof rule.text === "function" ? rule.text(date) : rule.text;
  }

  return date.toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

export function formatDate(isoString) {
  const date = new Date(isoString);

  if (isNaN(date)) {
    return "";
  }
  const options = { year: "numeric", month: "long", day: "numeric" };

  return date.toLocaleDateString(undefined, options);
}

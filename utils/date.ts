const currentDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
}).format(new Date());

export default currentDate;

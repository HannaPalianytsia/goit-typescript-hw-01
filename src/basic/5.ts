enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return true;
  } else {
    return false;
  }
};

let someDay: DayOfWeek = DayOfWeek.Friday;
let otherDay: DayOfWeek = DayOfWeek.Sunday;

console.log("basic 5:", isWeekend(someDay), isWeekend(otherDay));

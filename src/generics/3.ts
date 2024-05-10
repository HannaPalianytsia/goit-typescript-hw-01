function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log("generics 3:", merge({ day: "Friday" }, { hours: 5 }));

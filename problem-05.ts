{
  const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
    return obj[key];
  };

  const person = { name: "Alice", age: 30 };
  const car = { model: "Allion", year: "2021" };
  console.log(getProperty(person, "age"));
  console.log(getProperty(car, "model"));
}

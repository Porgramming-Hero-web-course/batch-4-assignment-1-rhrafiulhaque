{
  const sumArray = (arr: number[]): number => {
    const total = arr.reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
      0
    );
    return total;
  };

  console.log(sumArray([1, 2, 3, 4, 5]));
}

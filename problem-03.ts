{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const str: string[] = sentence
      .toLowerCase()
      .split(" ")
      .filter((st) => st === word.toLowerCase());
    return str.length;
  };

  console.log(countWordOccurrences("I love TypeScript", "typescript"));
}

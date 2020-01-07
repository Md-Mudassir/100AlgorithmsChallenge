const allLongestStrings = (inputArray: string[]): string[] => {
  let longestWord = 0;

  inputArray.forEach(
    (word: string) =>
      (longestWord = longestWord < word.length ? word.length : longestWord)
  );

  return inputArray.filter(words => words.length === longestWord);
};

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));

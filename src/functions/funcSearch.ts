import { SINGLE_SYMBOLS, DOUBLE_SYMBOLS } from "./periodicTable";

// Convert elements to uppercase for comparison
const DOUBLE_SYMBOLS_CHECK = DOUBLE_SYMBOLS.map((element) => element.toUpperCase());
const SINGLE_SYMBOLS_CHECK = SINGLE_SYMBOLS.map((element) => element.toUpperCase());

export const findSymbolOnPhrases = (word: string): [string, boolean][] => {
  let result: [string, boolean][] = [];
  let wordUpper = word.toUpperCase();
  let boolSymbolsCheck = false;

  for (let i = 0; i < wordUpper.length - 1; i++) {
    let doubleSymbols = wordUpper.substring(i, i + 2);
    if (DOUBLE_SYMBOLS_CHECK.includes(doubleSymbols) && !boolSymbolsCheck) {
      if (i > 0) result.push([word.substring(0, i), false]);
      result.push([word.substring(i, i + 2).charAt(0).toUpperCase() + word.substring(i, i + 2).charAt(1),
                   true,
      ]);
      boolSymbolsCheck = true;
      if (i + 2 < word.length) result.push([word.substring(i + 2), false]);
      return result;
    }
  }

  if (!boolSymbolsCheck) {
    for (let i = 0; i < wordUpper.length; i++) {
      let singleSymbols = wordUpper.substring(i, i + 1);
      if (SINGLE_SYMBOLS_CHECK.includes(singleSymbols) && !boolSymbolsCheck) {
        if (i > 0) result.push([word.substring(0, i).toUpperCase(), false]);
        result.push([word.substring(i, i + 1), true]);
        if (i + 1 < word.length) result.push([word.substring(i + 1), false]);
        return result;
      }
    }
  }

  if (!boolSymbolsCheck) {
    result.push([word, false]);
  }

  return result;
};
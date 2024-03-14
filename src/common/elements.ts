import { SINGLE_SYMBOLS, DOUBLE_SYMBOLS } from "./periodicTable";
import { NamePartTuple } from '../types';

// Convert elements to uppercase for comparison
const DOUBLE_SYMBOLS_CHECK = DOUBLE_SYMBOLS.map((element) => element.toUpperCase());
const SINGLE_SYMBOLS_CHECK = SINGLE_SYMBOLS.map((element) => element.toUpperCase());

export const highlightName = (name: string): NamePartTuple[] => {
    let result: NamePartTuple[] = [];
    let wordUpper = name.toUpperCase();
    let boolSymbolsCheck = false;
  
    for (let i = 0; i < wordUpper.length - 1; i++) {
      let doubleSymbols = wordUpper.substring(i, i + 2);
      if (DOUBLE_SYMBOLS_CHECK.includes(doubleSymbols) && !boolSymbolsCheck) {
        if (i > 0) result.push([name.substring(0, i), false]);
        result.push([name.substring(i, i + 2).charAt(0).toUpperCase() + name.substring(i, i + 2).charAt(1),
                     true,
        ]);
        boolSymbolsCheck = true;
        if (i + 2 < name.length) result.push([name.substring(i + 2), false]);
        return result;
      }
    }
  
    if (!boolSymbolsCheck) {
      for (let i = 0; i < wordUpper.length; i++) {
        let singleSymbols = wordUpper.substring(i, i + 1);
        if (SINGLE_SYMBOLS_CHECK.includes(singleSymbols) && !boolSymbolsCheck) {
          if (i > 0) result.push([name.substring(0, i).toUpperCase(), false]);
          result.push([name.substring(i, i + 1), true]);
          if (i + 1 < name.length) result.push([name.substring(i + 1), false]);
          return result;
        }
      }
    }
  
    if (!boolSymbolsCheck) {
      result.push([name, false]);
    }
  
    return result;
};
  
// src/types/index.ts

// Tuple representing a part of a name and whether it is an element symbol
export type NamePartTuple = [string, boolean];

// State shape for highlighted names
export interface HighlightedNameState {
  firstNameParts: NamePartTuple[];
  lastNameParts: NamePartTuple[];
}

// Action payload for setting names
export interface NamePayload {
  first: string;
  last: string;
}

// Define more custom types and interfaces as needed for your app

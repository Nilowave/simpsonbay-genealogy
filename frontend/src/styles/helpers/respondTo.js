export const respondTo = (query, orientation) =>
  `only screen and ${query} ${
    orientation ? `and (orientation: ${orientation})` : ""
  }`;

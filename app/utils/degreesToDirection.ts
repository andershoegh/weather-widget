const directions = [
  "Nord",
  "Nord-øst",
  "Øst",
  "Syd-øst",
  "Syd",
  "Syd-vest",
  "Vest",
  "Nord-vest",
];

export function degreesToDirection(degrees: number) {
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

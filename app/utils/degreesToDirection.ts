const directions = [
  "Nord", // 45
  "Nord-øst", // 90
  "Øst", // 135
  "Syd-øst", // 180
  "Syd", // 225
  "Syd-vest", // 270
  "Vest", // 315
  "Nord-vest", // 360
];

export function degreesToDirection(degrees: number) {
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

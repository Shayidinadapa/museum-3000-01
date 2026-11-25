import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "Parking meter, c. 2024. Citizens fed it coins to rent time from the street, then sprinted back before their minutes expired and their car was taken.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label + "\n", "utf8");

import subtract from "./calc/subtract";
import sum from "./calc/sum";

console.log("app running");

const added = sum(1, 2);
const subtracted = subtract(2, 1);
const subtracted2 = subtract(2, 1);

console.log({ added, subtracted });

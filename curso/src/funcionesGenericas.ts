const STATUS: boolean = true;

function saveDataIntoFile<T>(path: string, data: T): boolean {
  console.log("Save at: " + path);
  
  console.log(typeof data, data);
  return true;
}

saveDataIntoFile<number[]>("./", [1, 2, 3, 4, 5]);

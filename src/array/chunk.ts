export function chunk<T>(array: T[], size: number = 1): T[][] {
  const arraySize = array.length;
  const numberOfIterations = arraySize / size;
  const chunked: T[][] = [];

  for (let iteration = 0; iteration < numberOfIterations; iteration++) {
    const startIndex = iteration * size;
    const endIndex = startIndex + size;
    chunked[iteration] = array.slice(startIndex, endIndex);
  }

  return chunked;
}

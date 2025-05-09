export async function mockDataFetch(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("example-data");
    }, 3000);
  });
}

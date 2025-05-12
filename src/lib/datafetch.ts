export async function mockDataFetch() {
  await new Promise((r) => setTimeout(r, 2000));
  return `example-data-after-${2000}ms`;
}

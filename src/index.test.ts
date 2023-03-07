import makeSafe from './';

describe('makeSafe wrapper', () => {
  const safeJSONParse = makeSafe(JSON.parse);
  test('should return an object with value and ok: true if func executes without errors', () => {
    const validJSON = `{
      "name": "John",
      "age": 30
    }`;
    expect(safeJSONParse(validJSON)).toEqual({
      value: {
        name: 'John',
        age: 30,
      },
      ok: true,
    });
  });

  test('should return an object with error and ok: false if func throws an error', () => {
    // add a trailing comma to make the JSON invalid
    const invalidJSON = `{
      "name": "John",
      "age": 30,
    }`;
    expect(safeJSONParse(invalidJSON)).toEqual({
      error: expect.any(Error),
      ok: false,
    });
  });
});

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Result<T> =
  | {
      ok: true;
      value: T;
    }
  | {
      ok: false;
      error: unknown;
    };
/**
 * function wrapper that returns a Result type
 * @example
 * ```typescript
 * const randomlyFail = makeSafe((input: number) => {
 *  if (input > 0.5) {
 *    throw new Error('oops');
 *  }
 *  return {
 *    input,
 *  };
 * });
 *
 * const result = randomlyFail(Math.random());
 * // result is of type Result<{ input: number }>
 * if (result.ok) {
 *  console.log(result.value);
 * } else {
 *  console.error(result.error);
 * }
 * ```
 * @param func - a function to wrap
 */
const makeSafe =
  <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn) =>
  (...args: TArgs): Result<TReturn> => {
    try {
      return {
        value: func(...args),
        ok: true,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  };

export default makeSafe;

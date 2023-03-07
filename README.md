# MakeSafe

[![Continuous Integrations](https://github.com/goldsrc/makesafe/actions/workflows/continuous-integrations.yaml/badge.svg?branch=main)](https://github.com/goldsrc/makesafe/actions/workflows/continuous-integrations.yaml)
[![License](https://badgen.net/github/license/goldsrc/makesafe)](./LICENSE)
[![Package tree-shaking](https://badgen.net/bundlephobia/tree-shaking/makesafe)](https://bundlephobia.com/package/makesafe)
[![Package minified & gzipped size](https://badgen.net/bundlephobia/minzip/makesafe)](https://bundlephobia.com/package/makesafe)
[![Package dependency count](https://badgen.net/bundlephobia/dependency-count/makesafe)](https://bundlephobia.com/package/makesafe)

## Acknowledgements

- [This wonderful tweet](https://twitter.com/mattpocockuk/status/1633064377518628866)
- [Typescript library boilerplate](https://github.com/VitorLuizC/typescript-library-boilerplate)

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install makesafe --save

# For Yarn, use the command below.
yarn add makesafe
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/makesafe"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/makesafe"></script>

<script>
  // UMD module is exposed through the "makeSafe" global variable.
  console.log(makeSafe);
</script>
```

## Description

### **What does this package do?**

This is a TypeScript packag that defines a **`Result`** type and a
**`makeSafe`** function that takes a function as its argument and returns a new
function that wraps the original function with error-handling logic. The wrapped
function returns a **`Result`** object that contains either the result of the
original function or an error object if the original function throws an error.

### **What is the `Result` type?**

The **`Result`** type is a union type that represents either a successful result
or a failure result. It has two properties: **`ok`**, which is a boolean that
indicates whether the result is successful or not, and either a **`value`**
property or an **`error`** property, depending on whether the result is
successful or not.

If **`ok`** is true, then the **`value`** property will contain the successful
result of the function call. If **`ok`** is false, then the **`error`** property
will contain an unknown error object that was thrown by the original function.

### **What is the `makeSafe` function?**

The **`makeSafe`** function takes a function as its argument and returns a new
function that wraps the original function with error-handling logic. The wrapped
function returns a **`Result`** object that contains either the result of the
original function or an error object if the original function throws an error.

The **`makeSafe`** function is a higher-order function that returns a new
function. The returned function has the same argument types as the original
function, and its return type is a **`Result`** object that wraps the return
type of the original function.

### **How to use the `makeSafe` function?**

To use the **`makeSafe`** function, you need to pass a function to it as an
argument. The function should take some arguments and return some value.

Once you have the wrapped function, you can call it like a normal function,
passing the same arguments that you would pass to the original function. The
wrapped function will return a **`Result`** object that contains either the
result of the original function or an error object if the original function
throws an error.

You can check whether the result is successful or not by checking the value of
the **`ok`** property. If **`ok`** is true, then the **`value`** property will
contain the successful result of the function call. If **`ok`** is false, then
the **`error`** property will contain an unknown error object that was thrown by
the original function.

### **Example usage**

```ts
const randomlyFail = makeSafe((input: number) => {
  if (input > 0.5) {
    throw new Error('oops');
  }
  return {
    input,
  };
});

const result = randomlyFail(Math.random());
// result is of type Result<{ input: number }>
if (result.ok) {
  console.log(result.value);
} else {
  console.error(result.error);
}
```

In this example, we create a new function **`randomlyFail`** by passing an
anonymous function to the **`makeSafe`** function. The anonymous function takes
a number as its argument and returns an object with an **`input`** property.

We then call **`randomlyFail`** with a random number generated by
**`Math.random()`**. The result of the function call is stored in the
**`result`** variable.

We then check whether the result is successful or not by checking the value of
the **`ok`** property. If **`ok`** is true, then we log the **`value`** property
to the console. If **`ok`** is false, then we log the **`error`** property to
the console.

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).

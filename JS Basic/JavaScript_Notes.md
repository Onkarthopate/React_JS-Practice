# JavaScript Notes

## 1. JavaScript Basics

- **JavaScript** is a high-level, dynamic programming language primarily used for adding interactivity to web pages.
- **Runs in any browser** using its JS engine:
  - Chrome → V8 Engine
  - Firefox → SpiderMonkey
  - Safari → JavaScriptCore
  - Edge → ChakraCore
  - Opera → V8 Engine

### Key Facts:
- **Father of JavaScript**: Brendan Eich
- **Developed by**: Netscape Communication Corporation
- **JS Execution Environment**: Browser (client-side), and with Node.js, it can also run server-side.

### Advantages (Pros):
1. Fast and responsive (client-side execution).
2. Platform-independent.
3. Single-threaded and asynchronous.
4. Flexible for dynamic applications.

### Disadvantages (Cons):
1. Browser compatibility issues.
2. Security risks (browser code is exposed to users).

## 2. Variables in JavaScript

JavaScript provides three ways to declare variables: `var`, `let`, and `const`.

### Characteristics:

| Feature       | `var`                | `let`                 | `const`               |
|---------------|----------------------|------------------------|------------------------|
| Scope         | Function/Global      | Block                 | Block                 |
| Redeclaration | Yes                  | No                    | No                    |
| Reassignment  | Yes                  | Yes                   | No                    |
| Hoisting  | Yes, initialized as `undefined` | Yes, but not initialized | Yes, but not initialized |
| Example       | `var a = 10;`        | `let b = 10;`         | `const c = 10;`       |


- Use `let` and `const` to avoid bugs and follow modern JS best practices.
- `const` is used for constants – value can’t be reassigned.

## 3. Data Types in JavaScript

JavaScript has two categories of data types:

### A. Primitive Data Types:
Store single, immutable values. Stored by value.

1. **String** – `"Hello"` or `'World'`
2. **Number** – `42`, `3.14`
3. **Boolean** – `true` or `false`
4. **BigInt** – For large integers: `1234567890123456789012345678901234567890n`
5. **Undefined** – Variable declared but not assigned.
6. **Null** – Represents intentional absence of value.
7. **Symbol** – Unique identifier (often used as object keys).

### B. Non-Primitive Data Types:
Can store multiple values and are mutable. Stored by reference.

1. **Object** – e.g., `{ name: "Mike", age: 25 }`
2. **Array** – e.g., `[1, 2, 3]`
3. **Function** – e.g., `function greet() { console.log("Hello"); }`
4. **Date, RegExp**, etc.


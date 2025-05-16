
# 🧠 How JavaScript Code Gets Executed 

## 📌 1. Browser doesn’t understand JavaScript directly
- You write JavaScript (JS) in your code.
- The browser needs to **convert it into the computer understands** (machine code).
- This is done by the **JavaScript engine** inside the browser (Chrome uses **V8**),
(MS Edge **ChakraCore**),(FireFox **SpiderMonkey**).

---

## 📌 2. What happens when the browser sees JavaScript?

- When the browser sees a `<script>` tag or something like `onClick="..."`, it sends that code to the **JS engine**.

---

## 📌 3. The JavaScript engine prepares an environment
That environment is called the **Execution Context**.

---

# 🧰 There are TWO types of Execution Contexts:

## 1. Global Execution Context (GEC)

- Created **automatically** when your JS file starts.
- Runs **all the code that’s not inside a function**.
- There is **only ONE GEC** per JS file.

---

## 2. Function Execution Context (FEC)

- Created **every time a function is called**.
- **Each function call gets its own new FEC**.
- After the function finishes running, its FEC is removed.

---


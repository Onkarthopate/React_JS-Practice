# 🧠 Event Handling in JavaScript: Direct Listeners vs Event Delegation

---

## 🔹 What is Event Bubbling?

Event bubbling is the process where an event starts from the **target element** and bubbles up to its **parent elements** in the DOM tree.

Example:
- You click a `<button>`, the event goes to the `<div>` containing it, then to `<body>`, etc.

---

## 🔹 What is Event Delegation?

Event delegation is a technique where instead of adding event listeners to individual elements, you:
- Add a single listener to a **common parent**
- Use `event.target` to check which child triggered the event

It **relies on event bubbling**.

---

## 🔸 1. Direct Event Listeners (Manual Approach)

### ⚠️ Problems with Direct Listeners:
- You must manually add a listener to **each new button**
- Not scalable for many elements
- Repetitive code

---

## 🔸 2. Event Delegation (Recommended Approach)

### ✅ Benefits of Event Delegation:
- One event listener handles all child buttons
- Works even with dynamically added buttons
- Cleaner and more efficient

---

---

##  Conclusion

Use **event delegation** when:
- You have many similar child elements
- Elements are added dynamically
- You want cleaner and more efficient code

Use **direct listeners** only for:
- A few static elements
- where bubbling is not needed

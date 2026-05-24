# React JSX Syntax Assignment

This project is created using Vite + React.

## How to Run

```bash
npm install
npm run dev
```

Open the localhost URL shown in the terminal.

## Project Structure

```text
react_jsx_syntax_assignment/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   └── app-icon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── index.css
```

## JSX Syntax Changes Compared to HTML

| HTML Syntax | JSX Syntax |
|---|---|
| `class="container"` | `className="container"` |
| `for="courseInput"` | `htmlFor="courseInput"` |
| `<br>` | `<br />` |
| `<img src="image.png">` | `<img src="image.png" />` |
| `onclick="myFunction()"` | `onClick={myFunction}` |
| `style="color:red"` | `style={{ color: "red" }}` |
| `<!-- comment -->` | `{/* comment */}` |

## Important JSX Points

1. JSX allows us to write HTML-like code inside JavaScript.
2. JSX must return a single parent element.
3. Multiple elements can be wrapped using a fragment: `<>...</>`.
4. All tags must be closed.
5. JavaScript expressions are written inside curly braces `{}`.
6. CSS properties in inline styles use camelCase, for example `backgroundColor`.
7. Event names use camelCase, for example `onClick`.

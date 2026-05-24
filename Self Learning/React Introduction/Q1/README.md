# React Application using Vite

This assignment creates a simple React application using the Vite build tool.
The application displays the basic project structure and descriptions of each important file and folder.

## How to Create a React App using Vite

```bash
npm create vite@latest react-vite-project -- --template react
cd react-vite-project
npm install
npm run dev
```

## How to Run This Submitted Project

```bash
npm install
npm run dev
```

After running the command, open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Project Structure

```text
react_vite_project/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── public/
│   └── app-icon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Header.jsx
        └── ProjectStructure.jsx
```

## Project Structure Description

| File / Folder | Description |
|---|---|
| index.html | Main HTML file. It contains the root div where the React app is loaded. |
| package.json | Stores project details, npm scripts, and dependencies like React and Vite. |
| vite.config.js | Vite configuration file. It adds the React plugin to the project. |
| .gitignore | Lists files and folders ignored by Git, such as node_modules and dist. |
| public/ | Stores static files that can be directly accessed by the browser. |
| public/app-icon.svg | Static image used in the application header. |
| src/ | Main source folder that contains React code and CSS files. |
| src/main.jsx | Entry point of the React application. It renders App.jsx into index.html. |
| src/App.jsx | Main React component of the application. |
| src/App.css | CSS file used for styling the App component. |
| src/index.css | Global CSS file used across the application. |
| src/components/ | Folder used to store reusable React components. |
| src/components/Header.jsx | Header component of the application. |
| src/components/ProjectStructure.jsx | Component that displays the project structure table. |

## Important npm Scripts

| Command | Use |
|---|---|
| npm run dev | Starts the development server. |
| npm run build | Creates a production-ready build in the dist folder. |
| npm run preview | Previews the production build locally. |

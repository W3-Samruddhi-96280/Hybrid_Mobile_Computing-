import Header from './components/Header.jsx';
import ProjectStructure from './components/ProjectStructure.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="intro-card">
          <h2>React Application using Vite</h2>
          <p>
            This simple application is created using the Vite build tool. It explains
            the basic files and folders present in a React + Vite project.
          </p>
        </section>

        <ProjectStructure />
      </main>
    </div>
  );
}

export default App;

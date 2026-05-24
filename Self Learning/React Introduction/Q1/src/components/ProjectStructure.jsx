const structure = [
  {
    item: 'index.html',
    description: 'Main HTML file. It contains the root div where the React app is loaded.'
  },
  {
    item: 'package.json',
    description: 'Stores project information, scripts, and dependencies like React and Vite.'
  },
  {
    item: 'vite.config.js',
    description: 'Configuration file for Vite. It connects the React plugin with Vite.'
  },
  {
    item: 'public/',
    description: 'Stores static files such as images or icons that are directly available to the browser.'
  },
  {
    item: 'src/',
    description: 'Main source folder where React components, CSS, and application code are written.'
  },
  {
    item: 'src/main.jsx',
    description: 'Entry point of the React app. It renders the App component into the root div.'
  },
  {
    item: 'src/App.jsx',
    description: 'Main React component of the application.'
  },
  {
    item: 'src/components/',
    description: 'Folder used to store reusable React components.'
  },
  {
    item: 'src/App.css',
    description: 'CSS file used for styling the App component.'
  },
  {
    item: 'src/index.css',
    description: 'Global CSS file used for common styles across the application.'
  },
  {
    item: '.gitignore',
    description: 'Lists files and folders that should not be uploaded to Git, such as node_modules.'
  }
];

function ProjectStructure() {
  return (
    <section className="structure-card">
      <h2>Project Structure Description</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>File / Folder</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {structure.map((row, index) => (
              <tr key={index}>
                <td>{row.item}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProjectStructure;

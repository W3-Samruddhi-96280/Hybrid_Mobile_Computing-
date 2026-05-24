import "./App.css";

function App() {
  const studentName = "Rahul";
  const courseName = "PG-DAC";
  const isAvailable = true;

  const courseStyle = {
    backgroundColor: "#f2f2f2",
    padding: "15px",
    borderRadius: "10px"
  };

  function showMessage() {
    alert("Welcome to JSX syntax example");
  }

  return (
    <>
      <h1>JSX Syntax Example</h1>

      <div className="container" style={courseStyle}>
        <h2>Student Details</h2>

        <p>Student Name: {studentName}</p>
        <p>Course Name: {courseName}</p>

        <label htmlFor="courseInput">Enter Course:</label>
        <input type="text" id="courseInput" placeholder="Enter course name" />

        <br />

        <button onClick={showMessage}>Click Me</button>

        <p>Course Status: {isAvailable ? "Available" : "Not Available"}</p>

        <img src="/app-icon.svg" alt="React App Icon" width="100" />

        {/* This is a JSX comment */}
      </div>
    </>
  );
}

export default App;

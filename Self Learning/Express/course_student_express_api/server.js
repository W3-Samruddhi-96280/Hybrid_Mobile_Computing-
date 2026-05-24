const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let courses = [
    { id: 1, name: "PG-DAC", duration: "6 Months", fees: 90000 },
    { id: 2, name: "PG-DBDA", duration: "6 Months", fees: 115000 },
    { id: 3, name: "PG-DITISS", duration: "6 Months", fees: 100000 }
];

let students = [
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", courseId: 1 },
    { id: 2, name: "Priya Patil", email: "priya@gmail.com", courseId: 2 },
    { id: 3, name: "Amit Verma", email: "amit@gmail.com", courseId: 3 }
];

function generateId(dataArray) {
    if (dataArray.length === 0) {
        return 1;
    }
    return Math.max(...dataArray.map(item => item.id)) + 1;
}

app.get("/", (req, res) => {
    res.json({
        message: "Course and Student Express API is running",
        routes: {
            courses: "/courses",
            students: "/students"
        }
    });
});


app.get("/courses", (req, res) => {
    res.status(200).json(courses);
});

app.get("/courses/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(course => course.id === id);

    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
});

app.post("/courses", (req, res) => {
    const { name, duration, fees } = req.body;

    if (!name || !duration || !fees) {
        return res.status(400).json({ message: "name, duration and fees are required" });
    }

    const newCourse = {
        id: generateId(courses),
        name: name,
        duration: duration,
        fees: fees
    };

    courses.push(newCourse);

    res.status(201).json({
        message: "Course added successfully",
        course: newCourse
    });
});

app.put("/courses/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, duration, fees } = req.body;

    const course = courses.find(course => course.id === id);

    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    if (!name || !duration || !fees) {
        return res.status(400).json({ message: "name, duration and fees are required" });
    }

    course.name = name;
    course.duration = duration;
    course.fees = fees;

    res.status(200).json({
        message: "Course updated successfully",
        course: course
    });
});

app.delete("/courses/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.id === id);

    if (courseIndex === -1) {
        return res.status(404).json({ message: "Course not found" });
    }

    const deletedCourse = courses.splice(courseIndex, 1)[0];

    students = students.filter(student => student.courseId !== id);

    res.status(200).json({
        message: "Course deleted successfully",
        course: deletedCourse
    });
});


app.get("/students", (req, res) => {
    res.status(200).json(students);
});

app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});

app.post("/students", (req, res) => {
    const { name, email, courseId } = req.body;

    if (!name || !email || !courseId) {
        return res.status(400).json({ message: "name, email and courseId are required" });
    }

    const course = courses.find(course => course.id === parseInt(courseId));

    if (!course) {
        return res.status(400).json({ message: "Invalid courseId. Course does not exist" });
    }

    const newStudent = {
        id: generateId(students),
        name: name,
        email: email,
        courseId: parseInt(courseId)
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, courseId } = req.body;

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    if (!name || !email || !courseId) {
        return res.status(400).json({ message: "name, email and courseId are required" });
    }

    const course = courses.find(course => course.id === parseInt(courseId));

    if (!course) {
        return res.status(400).json({ message: "Invalid courseId. Course does not exist" });
    }

    student.name = name;
    student.email = email;
    student.courseId = parseInt(courseId);

    res.status(200).json({
        message: "Student updated successfully",
        student: student
    });
});

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(studentIndex, 1)[0];

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});

app.use((req, res) => {
    res.status(404).json({ message: "API route not found" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

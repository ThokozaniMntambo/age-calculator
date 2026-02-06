import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm.jsx";
import StudentList from "./components/StudentList.jsx";

const initialFormState = {
  fullName: "",
  email: "",
  course: "",
};

const App = () => {
  const [students, setStudents] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const fetchStudents = async () => {
    try {
      const response = await fetch("/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      setStatusMessage("Unable to load students. Please try again.");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("");

    const payload = {
      fullName: formValues.fullName.trim(),
      email: formValues.email.trim(),
      course: formValues.course.trim(),
    };

    try {
      const response = await fetch(
        editingId ? `/students/${editingId}` : "/students",
        {
          method: editingId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormValues(initialFormState);
      setEditingId(null);
      await fetchStudents();
    } catch (error) {
      setStatusMessage("Unable to save student. Please try again.");
    }
  };

  const handleEdit = (student) => {
    setFormValues({
      fullName: student.fullName,
      email: student.email,
      course: student.course,
    });
    setEditingId(student._id);
    setStatusMessage("");
  };

  const handleDelete = async (id) => {
    setStatusMessage("");
    try {
      const response = await fetch(`/students/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      if (editingId === id) {
        setEditingId(null);
        setFormValues(initialFormState);
      }

      await fetchStudents();
    } catch (error) {
      setStatusMessage("Unable to delete student. Please try again.");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormValues(initialFormState);
    setStatusMessage("");
  };

  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">Student Manager</p>
        <h1>Manage your student roster in one place.</h1>
        <p className="subtitle">
          Add new students, update details, or remove outdated records with a
          simple workflow.
        </p>
      </header>

      <main className="content">
        <StudentForm
          formValues={formValues}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isEditing={Boolean(editingId)}
        />

        {statusMessage && <p className="status-message">{statusMessage}</p>}

        <StudentList
          students={students}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;

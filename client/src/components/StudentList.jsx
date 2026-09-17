const StudentList = ({ students, onEdit, onDelete }) => {
  if (!students.length) {
    return (
      <section className="card empty-state">
        <h2>No students yet</h2>
        <p>Add your first student to get started.</p>
      </section>
    );
  }

  return (
    <section className="card list-card">
      <h2>Student Records</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.fullName}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <div className="actions">
                    <button type="button" onClick={() => onEdit(student)}>
                      Edit
                    </button>
                    <button
                      type="button"
                      className="danger"
                      onClick={() => onDelete(student._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudentList;

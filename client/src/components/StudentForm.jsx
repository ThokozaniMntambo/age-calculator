const StudentForm = ({
  formValues,
  onChange,
  onSubmit,
  onCancel,
  isEditing,
}) => {
  return (
    <section className="card form-card">
      <h2>{isEditing ? "Edit Student" : "Add a New Student"}</h2>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={formValues.fullName}
            onChange={onChange}
            placeholder="e.g., Jordan Smith"
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={onChange}
            placeholder="e.g., jordan@email.com"
            required
          />
        </label>

        <label>
          Course
          <input
            type="text"
            name="course"
            value={formValues.course}
            onChange={onChange}
            placeholder="e.g., Computer Science"
            required
          />
        </label>

        <div className="form-actions">
          <button className="primary" type="submit">
            {isEditing ? "Save Changes" : "Create Student"}
          </button>
          {isEditing && (
            <button className="ghost" type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default StudentForm;

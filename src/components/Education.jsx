import { useState } from "react";

const emptyForm = { school: "", title: "", date: "" };

function Education() {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState(emptyForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const handleEdit = () => setIsEditing(true);

    if (isEditing) {
        return (
            <section className="section">
                <h2>Education</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        School Name
                        <input
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Title of Study
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Date of Study
                        <input
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }

    return (
        <section className="section">
            <h2>Education</h2>
            <p>
                <strong>School:</strong> {formData.school}
            </p>
            <p>
                <strong>Title:</strong> {formData.title}
            </p>
            <p>
                <strong>Date:</strong> {formData.date}
            </p>
            <button onClick={handleEdit}>Edit</button>
        </section>
    );
}

export default Education;

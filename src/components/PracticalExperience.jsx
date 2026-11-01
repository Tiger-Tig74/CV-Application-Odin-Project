import { useState } from "react";

const emptyForm = {
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
};

function PracticalExperience() {
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
                <h2>Practical Experience</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Company Name
                        <input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Position Title
                        <input
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Main Responsibilities
                        <textarea
                            name="responsibilities"
                            value={formData.responsibilities}
                            onChange={handleChange}
                            rows={4}
                        />
                    </label>
                    <label>
                        From
                        <input
                            name="from"
                            value={formData.from}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        To
                        <input
                            name="to"
                            value={formData.to}
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
            <h2>Practical Experience</h2>
            <p>
                <strong>Company:</strong> {formData.company}
            </p>
            <p>
                <strong>Position:</strong> {formData.position}
            </p>
            <p>
                <strong>Responsibilities:</strong> {formData.responsibilities}
            </p>
            <p>
                <strong>Dates:</strong> {formData.from} – {formData.to}
            </p>
            <button onClick={handleEdit}>Edit</button>
        </section>
    );
}

export default PracticalExperience;

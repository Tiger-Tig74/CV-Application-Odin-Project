import { useState } from "react";

const emptyForm = { name: "", email: "", phone: "" };

function GeneralInfo() {
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
                <h2>General Information</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone
                        <input
                            name="phone"
                            value={formData.phone}
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
            <h2>General Information</h2>
            <p>
                <strong>Name:</strong> {formData.name}
            </p>
            <p>
                <strong>Email:</strong> {formData.email}
            </p>
            <p>
                <strong>Phone:</strong> {formData.phone}
            </p>
            <button onClick={handleEdit}>Edit</button>
        </section>
    );
}

export default GeneralInfo;

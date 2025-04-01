import { useState } from react;


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("")
    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setError('All fields are required')
            return;
        }
        setError("");
    console.log("Form submitted:", formData);
    }
}
export default RegistrationForm


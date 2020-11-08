import { useState } from "react";

export const useForm = initialState => {
    const [values, setValues] = useState(initialState);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = event => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        setShowSuccessMessage(true);
    };

    const clearForm = () => {
        setValues(initialState);
    };

    return[values, showSuccessMessage, handleChange, handleSubmit, clearForm]
};
import React, { useState } from "react";

const FormEvents = () => {
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [Date, setDate] = useState("");
    const [Country, setCountry] = useState("");
    const [Remember, setRemember] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`
            name: ${Name}
            Password: ${Password}
            Date: ${Date}
            Country: ${Country}`);

        setName("");
        setCountry("");
        setDate("");
        setPassword("");
        setRemember("");
    };
    return (
        <div className="mt-4 p-3">
            <div className="text-center">
                <h1>***********************</h1>
                <h2>FORM EVENTS</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name : <span className="text-danger"> {Name} </span>
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        value={Name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password : <span className="text-danger"> {Password} </span>
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="password"
                        value={Password}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Date: <span className="text-danger"> {Date} </span>
                    </label>
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        type="datetime-local"
                        className="form-control"
                        id="date"
                    value={Date}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Country" className="form-label">
                        Country :<span className="text-danger"> {Country} </span>
                    </label>
                    <select
                        onChange={(e) => setCountry(e.target.value)}
                        className="form-select"
                    value={Country}
                    >
                        <option>Countries</option>
                        <option value="tr">Türkiye</option>
                        <option value="ger">Germany</option>
                        <option value="usa">USA</option>
                    </select>
                </div>
                <div className="mb-3 form-check">
                    <input
                        onChange={(e) => setRemember(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                        Remember Me :{" "}
                        <span className="text-danger"> {Remember.toString()} </span>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" value={Remember}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormEvents;

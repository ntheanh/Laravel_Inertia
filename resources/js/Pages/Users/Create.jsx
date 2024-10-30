import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const Create = () => {
    const [form, setForm] = useState({});
    const { errors } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        router.post("/users/create", form);
    };
    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    console.log(errors);
    return (
        <>
            <h2>Create User</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        onChange={handleChangeValue}
                    />
                    {errors.name && (
                        <span className="text-danger">{errors.name}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        onChange={handleChangeValue}
                    />
                    {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChangeValue}
                    />
                    {errors.password && (
                        <span className="text-danger">{errors.password}</span>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    SAVE
                </button>
            </form>
        </>
    );
};

export default Create;

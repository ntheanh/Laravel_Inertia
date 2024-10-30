import React, { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";

const Edit = ({ user }) => {
    const [form, setForm] = useState({});
    const { errors } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        router.put("/users/" + user.id + "/edit", form);
    };
    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setForm({ ...user });
    }, []);

    return (
        <>
            <h2>Update User</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={form.name ?? ""}
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
                        value={form.email ?? ""}
                        placeholder="Your email"
                        onChange={handleChangeValue}
                    />
                    {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    SAVE
                </button>
            </form>
        </>
    );
};

export default Edit;

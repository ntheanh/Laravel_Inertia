import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React from "react";

const Show = ({ users }) => {
    console.log(users);
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th width="5%">ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th width="5%">Edit</th>
                        <th width="5%">Delete</th>
                    </tr>
                </thead>
                <thead>
                    {users?.data?.map((user, index) => (
                        <tr key={user?.id}>
                            <td>{index + 1}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                                <Link href={`/users/${user.id}/edit`}>
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <Link href={`/users/${user.id}/delete`}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </thead>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {users.links.map((link, index) => {
                        let label = link.label;
                        if (index === 0) {
                            label = "Previous";
                        }
                        if (index === users.links.length - 1) {
                            label = "Next";
                        }
                        return (
                            <li
                                className={clsx(
                                    "page-item",
                                    link.active && "active",
                                    !link.url && "disabled"
                                )}
                                key={label}
                            >
                                <Link className="page-link" href={link.url}>
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Show;

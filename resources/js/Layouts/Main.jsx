import { Link } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = ({ children }) => {
    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-3">
                    <h3>Menu</h3>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/user">User</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-9">{children}</div>
            </div>
        </div>
    );
};

export default Main;

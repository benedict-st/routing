import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="container">
            <ul className="nav">
                <li className="nav-item">
                    <Link class="nav-link active" to="/">
                        Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        Users
                    </Link>
                </li>
            </ul>
        </div>
    );
}

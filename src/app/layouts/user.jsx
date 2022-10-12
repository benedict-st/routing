import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import QualitiesList from "../components/qualitiesList";
import { useHistory } from "react-router-dom";
const User = ({ id }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    const HandleReturn = () => {
        history.replace("/users");
    };
    if (user) {
        return (
            <>
                <h1>
                    {user ? (
                        <>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h5>{user.name}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5>Профессия {user.profession.name}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5>
                                        <QualitiesList
                                            qualities={user.qualities}
                                        />
                                    </h5>
                                </li>
                                <li className="list-group-item">
                                    <h5>
                                        completedMeetings{" "}
                                        {user.completedMeetings}
                                    </h5>
                                </li>
                                <li className="list-group-item">
                                    <h5>rate {user.rate}</h5>
                                </li>
                            </ul>
                            <button
                                className="btn btn-primary "
                                onClick={() => {
                                    HandleReturn();
                                }}
                            >
                                Все пользователи
                            </button>
                        </>
                    ) : (
                        `не найден пользователь с ID: ${id}`
                    )}
                </h1>
            </>
        );
    }
    return <div className="spinner-border text-warning" role="status"></div>;
};
User.propTypes = {
    users: PropTypes.array.isRequired,
    id: PropTypes.toString.isRequired,
    getUsesrById: PropTypes.func.isRequired,
    user: PropTypes.array.isRequired
};
export default User;

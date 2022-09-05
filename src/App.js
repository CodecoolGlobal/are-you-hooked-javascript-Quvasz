import { useState } from "react";
import users from "./fake_data";

const App = () => {
    const [filteredEmployees, setFilteredEmployees] = useState(users);

    return (
        <>
            <header>
                <div className="container">
                    <h1 className="logo">Are you Hooked?</h1>
                </div>
            </header>

            <section>
                <div className="container">
                    <p className="error">Passwords do not match</p>
                    <p className="error">Password needs to be more complex</p>
                    <input
                        type="password"
                        placeholder="Enter your password"
                    />
                    <input
                        type="password"
                        placeholder="Verify your password"
                    />
                </div>
            </section>

            <section>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>
                                    <input
                                            type="text"
                                            placeholder="Name..."
                                    />
                                </th>
                                <th>Age</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map(
                                (employee) => (
                                    <tr key={employee.id}>
                                        <th>{employee.id}</th>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>
                                            <button>
                                                -
                                            </button>
                                            <span>{employee.salary}</span>
                                            <button>
                                                +
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>
                        API provided by{" "}
                        <a href="http://www.dummy.restapiexample.com/">
                            Dummy sample REST API
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default App;

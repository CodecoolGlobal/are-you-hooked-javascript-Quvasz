import { useState } from "react";
import users from "./fake_data";

const App = () => {
    const [filteredEmployees, setFilteredEmployees] = useState(users);
    const [filterText, setFilterText] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [validPasswordMatch, setValidPasswordMatch] = useState(false);
    const [passwordComplexityError, setPasswordComplexityError] = useState(false);
    const [complexityErrorText, setcomplexityErrorText] = useState("");
    const [passwordIsComplex, setPasswordIscomplex] = useState(false);
    const [passwordTexts, setPasswordTexts] = useState(["", ""]);
    let usersTmp = users;

    function filterEmployees() {
        return usersTmp.filter(employee => employee.name.toLowerCase().includes(filterText));
    }

    function searchFieldInput(e) {
        setFilterText(e.target.value.toLowerCase());
        setFilteredEmployees(filterEmployees());
    }

    function increaseSalary(id) {
        usersTmp = usersTmp.map(employee => {
            if (employee.id === id) employee.salary += 100;
            return employee;
        })
        setFilteredEmployees(filterEmployees());
    }

    function decreaseSalary(id) {
        usersTmp = usersTmp.map(employee => {
            if (employee.id === id) employee.salary -= 100;
            return employee;
        })
        setFilteredEmployees(filterEmployees());
    }

    function passwordInput(text1, text2) {
        const newTexts = passwordTexts;
        if (text1 !== null) newTexts[0] = text1;
        if (text2 !== null) newTexts[1] = text2;

        setPasswordTexts(newTexts);
    }

    function checkPasswordsMatch() {
        if (passwordTexts[0] !== "" && passwordTexts[1] !== "") {
            setPasswordMatchError(passwordTexts[0] !== passwordTexts[1]);
            setValidPasswordMatch(passwordTexts[0] === passwordTexts[1]);
        }
        else {
            setPasswordMatchError(false);
            setValidPasswordMatch(false);
        }
    }

    function checkComplexity() {
        let textResult = "Password must: be";
        let complex = true;
        let error = false;
        const errorTexts = [];
        if (passwordTexts[0].length < 8) errorTexts.push(" be at least 8 characters long");
        if (passwordTexts[0].search(/[!@#$%^&*]/) === -1) errorTexts.push(" contain a special symbol");
        if (passwordTexts[0].search(/[A-Z]/) === -1) errorTexts.push(" contain a capital letter");
        if (passwordTexts[0].search(/[0-9]/) === -1) errorTexts.push(" contain a number");

        if (errorTexts.length > 0) {
            textResult += errorTexts.join(" &");
            setcomplexityErrorText(textResult);
            complex = false;
            error = true;
        }
        setPasswordComplexityError(error);
        setPasswordIscomplex(complex);
    }


    return (
        <>
            <header>
                <div className="container">
                    <h1 className="logo">Are you Hooked?</h1>
                </div>
            </header>

            <section>
                <div className="container">
                    {passwordIsComplex === true && <p className="valid">Good choice of password!</p>}
                    {validPasswordMatch === true && <p className="valid">Access granted</p>}
                    {passwordMatchError === true && <p className="error">Passwords do not match</p>}
                    {passwordComplexityError === true && <p className="error">{complexityErrorText}</p>}
                    <input
                        type="password"
                        placeholder="Enter your password"
                        onInput={(e) => {
                            passwordInput(e.target.value, null);
                            checkPasswordsMatch();
                            checkComplexity();
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Verify your password"
                        onInput={(e) => {
                            passwordInput(null, e.target.value);
                            checkPasswordsMatch();
                        }}
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
                                        onInput={searchFieldInput}
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
                                            <button onClick={() => { decreaseSalary(employee.id) }}>
                                                -
                                            </button>
                                            <span>{employee.salary}</span>
                                            <button onClick={() => { increaseSalary(employee.id) }}>
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

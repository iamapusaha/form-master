import { useState } from "react";



const StateFullForm = () => {

    const [name, setName] = useState('akash');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState();

    const handleSubmit = e => {
        e.preventDefault();

        if (password.length <= 6) {
            setError('password should be 6 or more Character')
        } else {
            console.log(name, email, password);
        }

    }
    const handleChangeName = e => {
        setName(e.target.value)
    }
    const handleChangeEmail = e => {
        setEmail(e.target.value)
    }
    const handleChangePassword = e => {

        setPassword(e.target.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeName} value={name} className="p-3 bg-orange-300" type="text" name="name" id="" placeholder="Enter your name" /> <br />
                <input onChange={handleChangeEmail} value={email} className="p-3 bg-orange-300" type="email" name="name" id="" placeholder="Enter your name" /> <br />
                <input onChange={handleChangePassword} value={password} className="p-3 bg-orange-300" type="text" name="password" id="" placeholder="Enter your placeholder" required /><br />
                <input className="bg-blue-700 p-3" type="submit" value="Submit" />
                {
                    <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;
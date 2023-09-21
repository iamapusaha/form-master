import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    useEffect(() => {
        nameRef.current.focus()
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} className="p-3 bg-orange-300" type="text" name="name" id="" placeholder="Enter your name" /> <br />
            <input ref={emailRef} className="p-3 bg-orange-300" type="text" name="email" id="" placeholder="Enter your email" /><br />
            <input ref={passwordRef} className="p-3 bg-orange-300" type="text" name="password" id="" placeholder="Enter your password" /><br />
            <input className="bg-blue-700 p-3" type="submit" value="Submit" />
        </form>
    );
};

export default RefForm;
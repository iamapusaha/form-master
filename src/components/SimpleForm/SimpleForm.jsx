
// import PropTypes from 'prop-types';

const SimpleForm = () => {
    const handleSubmit = e => {
        const target = e.target;
        e.preventDefault();
        console.log(target.name.value);
        console.log(target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="p-3 bg-orange-300" type="text" name="name" id="" placeholder="Enter your name" /> <br />
                <input className="p-3 bg-orange-300" type="text" name="email" id="" placeholder="Enter your placeholder" /><br />
                <input className="bg-blue-700 p-3" type="submit" value="Submit" />
            </form>
        </div>
    );
};

SimpleForm.propTypes = {

};

export default SimpleForm;
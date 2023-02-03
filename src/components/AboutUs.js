import '../stylesheets/AboutUS.css';

import logo from '../images/logo.png';

function AboutUs() {
    return (
        <>
            <div>
                <h2 className="title">
                    If you want to be a volunteer, you can complete this form.
                    Thank you!
                </h2>
            </div>
            <div className="img-logo">
                <img className="img-about" src={logo} alt="logo" />
            </div>
            <form onSubmit={''}>
                <input type="text" placeholder="Name" name="name" />
                <input type="email" placeholder="Email" name="email" />
                <textarea placeholder="Message" name="message" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default AboutUs;

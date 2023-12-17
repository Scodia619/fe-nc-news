import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="header">
            <h1>NC News</h1>
            <Link to="/login" id="loginLink"><h1 id="login">Login</h1></Link>
        </section>
    )
}

export default Header;
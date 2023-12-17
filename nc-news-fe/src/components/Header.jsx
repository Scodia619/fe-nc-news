import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="header">
            <h1>NC News</h1>
            <Link to="/"><h2 className="header-links">Articles</h2></Link>
            <Link to="/login" id="loginLink"><h2 className="header-links">Login</h2></Link>
        </section>
    )
}

export default Header;
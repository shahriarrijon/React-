import { Component } from "react";
import NavItem from "./nav-item";
class NavBar extends Component {
    handleLogout = () => {
        console.log("logout");
        localStorage.removeItem("loggedinuser");
        window.location.reload();
        window.location.href("/login");
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <NavItem content={"Counter"} Url = {"/counter"} />
                            <NavItem content = {"Login"} Url= {"/login"}/>
                            <NavItem content = {"Log Out"}  onClick = {this.handleLogout}/>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default NavBar
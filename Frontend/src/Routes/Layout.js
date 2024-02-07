import { Outlet, Link } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <nav>
        {/* <div> */}
            <ul>
                <li>
                    <Link to="/Search">Search</Link>
                </li>
                <li>
                    <Link to="/Register">Register </Link>
                </li>
                <li>
                    <Link to="/UserLogin">Login </Link>
                </li>
                <li>
                    <Link to="/UserDisplay">Profile </Link>
                </li>
            </ul>
        
        {/* </div> */}
        </nav>
        </>
    )
}

export default Layout
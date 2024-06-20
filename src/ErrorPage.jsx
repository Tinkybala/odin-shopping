import { Link } from "react-router-dom";

function ErrorPage(){
    return(
        <div>
            <h1>Oopsies!</h1>
            <p>The item has not been added to the system yet</p>
            <Link to="..">Click here to go back</Link>
        </div>
    )
}

export default ErrorPage;
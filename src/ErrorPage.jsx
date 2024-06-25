import { Link } from "react-router-dom";

function ErrorPage(){
    return(
        <div>
            <h1>Oopsies!</h1>
            <p>This section is still in progress</p>
            <Link to="..">Click here to go back</Link>
        </div>
    )
}

export default ErrorPage;
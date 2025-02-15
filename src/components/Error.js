import { useRouteError } from "react-router";

const Error = () =>{
    const err = useRouteError();
    return (
        <div className="error-div">
            <h1>{err.status +" : "+ err.statusText}  </h1>
        </div>
    );
}

export default Error;
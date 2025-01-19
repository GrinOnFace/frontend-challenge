import { FC } from "react";
import { Link } from "react-router-dom";

export const App = (() => {
    return (
        <div className='app'>
            <Link to="/likes">Любимые котята</Link>
        </div>
    );
});


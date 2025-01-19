import { FC } from 'react';
import { Link } from 'react-router-dom';

export const App: FC = () => {
    return (
        <div>
            Hello World
			<Link to={"/likes"}>Link</Link>
        </div>
    );
};
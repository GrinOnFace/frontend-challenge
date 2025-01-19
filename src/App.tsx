import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';
import { catApi } from './api/catAPI';

export const App: FC = () => {
	const [page, setPage] = useState(2);

	useEffect(() => {
		catApi.getCatList({ page }).then(
			data => console.log(data)
		);
	}, []);

    return (
        <div>
            <Link to={'/likes'}>Link</Link>
			<Loader></Loader>
        </div>
    );
};

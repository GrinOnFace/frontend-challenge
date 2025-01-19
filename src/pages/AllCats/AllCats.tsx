import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '@/atoms/Loader/Loader';
import { catApi } from '@/api/catAPI';
import { CatImage } from '@/types/types';
import { CatItem } from '@/molecules/CatItem/CatItem';
import { CatGrid } from '@/organisms/CatGrid/CatGrid';

const AllCats: FC = () => {
	const [page, setPage] = useState(2);
	const [cats, setCats] = useState<CatImage[]>([]);

	useEffect(() => {
		catApi.getCatList({ page })
		.then(
			data => {
				setCats(data);
				console.log(data);
			}
		)
		.catch(error => console.error(error));
	}, []);

    return (
        <>
            <Link to={'/likes'}>Link</Link>
			<CatGrid cats={cats} />
        </>
    );
};

export default AllCats;
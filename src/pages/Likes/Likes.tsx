import { ErrorMessage } from '@/atoms/ErrorMessage/ErrorMessage';
import { Header } from '@/organisms/Header/Header';
import { FC } from 'react';
import { useFavorites } from '@/hooks/useFavorites';
import { CatGrid } from '@/organisms/CatGrid/CatGrid';

const Likes: FC = () => {
    const { favorites } = useFavorites();

    if (!favorites.length) {
        return (
            <>
                <Header />
                <ErrorMessage message='У вас пока нет любимых котиков :(' />
            </>
        );
    }
	
    return (
        <>
            <Header />
            <CatGrid cats={favorites} />
        </>
    );
};

export default Likes;

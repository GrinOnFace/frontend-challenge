import { FC } from 'react';
import { ErrorMessage } from '@/atoms/ErrorMessage/ErrorMessage';
import { useFavorites } from '@/hooks/useFavorites';
import { CatGrid } from '@/organisms/CatGrid/CatGrid';
import { BaseTemplate } from '@/templates/BaseTemplate/BaseTemplate';

const Likes: FC = () => {
    const { favorites } = useFavorites();

    if (!favorites.length) {
        return (
            <BaseTemplate>
                <ErrorMessage message='У вас пока нет любимых котиков :(' />
            </BaseTemplate>
        );
    }

    return (
        <BaseTemplate>
            <CatGrid cats={favorites} status={false}/>
        </BaseTemplate>
    );
};

export default Likes;

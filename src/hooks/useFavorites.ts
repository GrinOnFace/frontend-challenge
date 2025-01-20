import { useState, useEffect, useCallback } from 'react';
import { CatImage } from '@/types/types';

const FAVORITES_KEY = 'favoriteCats';

interface UseFavoritesReturn {
    favorites: CatImage[];
    isLiked: (id: string) => boolean;
    toggleFavorite: (cat: CatImage) => void;
}

export const useFavorites = (): UseFavoritesReturn => {
	// Хук для работы с избранным
    const [favorites, setFavorites] = useState<CatImage[]>(() => {
        const saved = localStorage.getItem(FAVORITES_KEY);
        return saved ? JSON.parse(saved) : [];
    });

	// Сохранение в localStorage при изменении favorites
    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]); 

	// Проверка на наличие в избранном
    const isLiked = useCallback(
        (id: string) => {
            return favorites.some((cat) => cat.id === id);
        },
        [favorites],
    );

	// Добавление/удаление из избранного
    const toggleFavorite = useCallback((cat: CatImage) => {
        setFavorites((prev) => {
            const isExist = prev.some((item) => item.id === cat.id);

            if (isExist) {
                return prev.filter((item) => item.id !== cat.id);
            }

            return [...prev, cat];
        });
    }, []);

    return {
        favorites,
        isLiked,
        toggleFavorite,
    };
};

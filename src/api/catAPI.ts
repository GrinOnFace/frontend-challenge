import { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { CatImage } from '@/types/types';
import { CatListParams } from './types';
import { constantsCatAPI } from '@/constants/constants';

const DEFAULT_PARAMS: CatListParams = {
	order: constantsCatAPI.order,
    limit: constantsCatAPI.limit,
    page: constantsCatAPI.page,
};

export const catApi = {
    async getCatList({ page, limit = DEFAULT_PARAMS.limit, order = DEFAULT_PARAMS.order }: CatListParams): Promise<CatImage[]> {
        const response: AxiosResponse<CatImage[]> = await axiosInstance.get('search', {
            params: {
                limit,
                page,
				order,
            },
        });

        return response.data;
    },
};
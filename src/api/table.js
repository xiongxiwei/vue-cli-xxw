import request from '@/utils/request';

export const fetchData = query => {
    return request({
        url: '/table/list',
        method: 'get',
        params: query
    });
};
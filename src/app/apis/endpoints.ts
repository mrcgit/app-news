

const CORS_PROXY = 'https://corsproxy.io/?';
export const NEWS_FEED = {url: 'https://ok.surf/api/v1/cors/news-feed', method: 'GET'};

export const NEWS_SECTIONS_NAMES = {url: 'https://ok.surf/api/v1/cors/news-section-names', method: 'GET'};


export type NEWS_SECTIONS_PARAMS = {
    url: string,
    method: 'POST' | 'GET' | 'DELETE'| 'PUT',
    payload: {sections: string[]} 
}
export const NEWS_SECTIONS: NEWS_SECTIONS_PARAMS = {url: CORS_PROXY+'https://ok.surf/api/v1/news-section', method: 'POST', payload: {sections: []} }


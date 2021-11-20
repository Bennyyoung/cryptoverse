import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
 'x-bingapis-sdk': 'true',
 'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
 'x-rapidapi-key': 'd963bf08c0msha8e252441475c0ep195538jsne8e87b751918',
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
 reducerPath: 'cryptoNewsApi',
 baseQuery: fetchBaseQuery({ baseUrl }),
 endpoints: (builder) => ({
  getCryptoNews: builder.query({
   query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
  })
 })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
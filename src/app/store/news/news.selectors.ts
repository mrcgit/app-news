import { NewsState } from "./news.reducer";

type AppState = {
    slice: NewsState
}


export const selectFeeds = (state: AppState) => state.slice.feeds;

export const selectSectionNames = (state: AppState) => state.slice.sections;

export const selectNews = (state: AppState) => state.slice.news;




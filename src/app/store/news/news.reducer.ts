import { createFeature, createReducer, on } from "@ngrx/store";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Inject, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, mergeMap, of } from "rxjs";
import { NewsSections } from "../../model/news.types";
import { NewsActions } from "./news.actions";


export type NewsState = {
    sections: string[],
    feeds: NewsSections,
    news: NewsSections
}

const initialState: NewsState = {
    sections: [],
    feeds: {},
    news: {}
}

export const newsReducer = createReducer(
    initialState,
    on(NewsActions.loadFeedNewsSuccess, (state,action)=> ({...state, feeds: action.payload})),
    on(NewsActions.loadSectionsNamesSuccess, (state, action) => ({...state, sections: action.payload})),
    on(NewsActions.loadSectionsNewsSuccess, (state, action) => ({...state, news: action.payload})),
)



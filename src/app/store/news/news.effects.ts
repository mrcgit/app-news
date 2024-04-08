import { HttpClient } from "@angular/common/http";
import { Inject, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { NewsActions } from "./news.actions";
import { NewsService } from "../../services/news.service";



export const loadFeedNews = createEffect(
    (
      actions$ = inject(Actions),
      service$ = inject(NewsService)
    ) => {
        return actions$
          .pipe(
            ofType(NewsActions.loadFeedNews),
            mergeMap(
              () => service$.getNewsFeed()
                .pipe(
                  map((response) => {
                    return NewsActions.loadFeedNewsSuccess({ payload: response })
                  }),
                  catchError(() => of(NewsActions.loadError()))
                )
            ),
          )
      },
      {
        functional: true
      }
    )

    export const loadSectionsNames = createEffect(
      (
        actions$ = inject(Actions),
        service$ = inject(NewsService)
      ) => {
          return actions$
            .pipe(
              ofType(NewsActions.loadSectionsNames),
              mergeMap(
                () => service$.getSectionsNames()
                  .pipe(
                    map((response) => {
                      return NewsActions.loadSectionsNamesSuccess({ payload: response })
                    }),
                    catchError(() => of(NewsActions.loadError()))
                  )
              ),
            )
        },
        {
          functional: true
        }
      )


      export const loadSectionsNews = createEffect(
        (
          actions$ = inject(Actions),
          service$ = inject(NewsService)
        ) => {
            return actions$
              .pipe(
                ofType(NewsActions.loadSectionsNews),
                mergeMap(
                  (action) => service$.getNewsBySections({sections: [action.payload]})
                    .pipe(
                      map((response) => {
                        return NewsActions.loadSectionsNewsSuccess({ payload: response })
                      }),
                      catchError(() => of(NewsActions.loadError()))
                    )
                ),
              )
          },
          {
            functional: true
          }
        )


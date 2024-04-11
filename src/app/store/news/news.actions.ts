import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { NewsSections, SectionType } from "../../model/news.types";




export const NewsActions = createActionGroup(
    {
        source: 'news',
        events: {
            'loadFeedNews' : emptyProps(),
            'loadSectionsNews' : props<{payload: string}>(),
            'loadSectionsNames' : emptyProps(),
            'loadFeedNewsSuccess':  props<{payload: NewsSections}>(),
            'loadSectionsNewsSuccess': props<{payload: NewsSections}>(),
            'loadSectionsNamesSuccess':  props<{payload: string[]}>(),
            'loadCurrentSectionSuccess' : props<{payload: SectionType}>(),
            'loadError': emptyProps(),
        }
    }

)
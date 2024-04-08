export interface NewsSections {
    Business?: Article[]
    Entertainment?: Article[]
    Health?: Article[]
    Science?: Article[]
    Sports?: Article[]
    Technology?: Article[]
    US?: Article[]
    World?: Article[]
  }

  export interface Article{
    link: string
    og: string
    source: string
    source_icon: string
    title: string
  }

export type SectionType = 'Business' | 'Entertainment' | 'Health' | 'Science' |'Sports' |'Technology' | 'US' | 'World'
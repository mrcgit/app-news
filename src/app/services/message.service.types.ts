export interface MessageServiceEvent<T = void> {
    eventName: string,
    payload?: T
  }
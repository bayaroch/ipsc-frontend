export enum MATCH_STATUS {
  MATCH_PREVIEW = 0,
  MATCH_PUBLISH = 1,
  MATCH_POSTPONE = 2,
  MATCH_CANCEL = 3,
}

export const MATCH_STATUS_TEXT = [
  {
    id: 0,
    value: 'Preview',
  },
  {
    id: 1,
    value: 'Publish',
  },
  {
    id: 2,
    value: 'Postpone',
  },
  {
    id: 3,
    value: 'Cancel',
  },
]

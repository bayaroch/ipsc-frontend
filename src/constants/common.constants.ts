export enum MATCH_STATUS {
  MATCH_PREVIEW = 0,
  MATCH_PUBLISH = 1,
  MATCH_POSTPONE = 2,
  MATCH_CANCEL = 3,
}

export const MATCH_STATUS_TEXT = {
  0: 'DRAFT',
  1: 'PUBLISHED',
  2: 'POSTPONE',
  3: 'CANCELLED',
}

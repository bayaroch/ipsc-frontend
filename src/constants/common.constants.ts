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

export enum MEMBER_TYPE {
  USER_ADMIN = 9,
  USER_REGULAR = 1,
  USER_STUDENT = 0,
}

export const MEMBER_TYPE_DATA = [
  {
    id: MEMBER_TYPE.USER_ADMIN,
    value: 'Админ',
  },
  {
    id: MEMBER_TYPE.USER_REGULAR,
    value: 'Энгийн',
  },
  {
    id: MEMBER_TYPE.USER_STUDENT,
    value: 'Сурагч',
  },
]

export const CLASS_TYPE_DATA = [
  {
    id: 1,
    shorthand: 'U',
    name: 'Unclassified',
    remark: '(Спортыг цол, зэрэггүй)',
  },
  {
    id: 2,
    shorthand: 'M',
    name: 'M Class',
    remark: '(ОУХМастер)',
  },
  {
    id: 3,
    shorthand: 'A',
    name: 'A Class',
    remark: '(Спортын мастер)',
  },
  {
    id: 4,
    shorthand: 'B',
    name: 'B Class',
    remark: '(Спортын дэд мастер)',
  },
  {
    id: 5,
    shorthand: 'C',
    name: 'C Class',
    remark: '(Спортын 1-р зэрэг)',
  },
  {
    id: 6,
    shorthand: 'S',
    name: 'D Class',
    remark: '(Спортын 2-р зэрэг)',
  },
]

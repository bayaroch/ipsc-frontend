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

export enum MATCH_PROGRESS_STATUS {
  READY = 1,
  REGISTERING = 2,
  REGISTERING_CLOSED = 3,
  IN_PROGRESS = 4, //started
  COMPLETED = 5, // finished
  CANCELLED = 6,
  UNKNOWN = 7,
}

export const MATCH_PROGRESS_STATUS_TITLE = [
  {
    id: MATCH_PROGRESS_STATUS.READY,
    value: 'Бүртгэл эхлээгүй',
  },
  {
    id: MATCH_PROGRESS_STATUS.REGISTERING,
    value: 'Бүртгэл эхэлсэн',
  },
  {
    id: MATCH_PROGRESS_STATUS.REGISTERING_CLOSED,
    value: 'Бүртгэл хаагдсан',
  },
  {
    id: MATCH_PROGRESS_STATUS.IN_PROGRESS,
    value: 'Явагдаж байна',
  },
  {
    id: MATCH_PROGRESS_STATUS.COMPLETED,
    value: 'Явагдаж дууссан',
  },
  {
    id: MATCH_PROGRESS_STATUS.COMPLETED,
    value: 'Цуцлагдсан',
  },
  {
    id: MATCH_PROGRESS_STATUS.UNKNOWN,
    value: '',
  },
]

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

export const CLASS = [
  {
    id: 1,
    shorthand: 'U',
    name: 'Unclassified',
    remark: '(Спортыг цол, зэрэггүй)',
  },
  { id: 2, shorthand: 'M', name: 'M Class', remark: '(ОУХМастер)' },
  { id: 3, shorthand: 'A', name: 'A Class', remark: '(Спортын мастер)' },
  {
    id: 4,
    shorthand: 'B',
    name: 'B Class',
    remark: '(Спортын дэд мастер)',
  },
  { id: 5, shorthand: 'C', name: 'C Class', remark: '(Спортын 1-р зэрэг)' },
  { id: 6, shorthand: 'D', name: 'D Class', remark: '(Спортын 2-р зэрэг)' },
]
export const DIVISIONS = [
  { id: 1, shorthand: 'OP', name: 'Open', remark: null },
  { id: 2, shorthand: 'ST', name: 'Standard', remark: null },
  { id: 3, shorthand: 'CL', name: 'Classic', remark: null },
  { id: 4, shorthand: 'PROD', name: 'Production', remark: null },
  { id: 5, shorthand: 'PO', name: 'Production Optics', remark: null },
]

export const BADGES = [
  { id: 1, shorthand: 'RO', name: 'Range Officer', remark: '' },
  { id: 2, shorthand: 'CRO', name: 'Chief Range Officer', remark: '' },
  {
    id: 3,
    shorthand: 'TCI',
    name: 'Training Course Instructor',
    remark: '',
  },
  { id: 4, shorthand: 'RM', name: 'Range Master', remark: '' },
  { id: 5, shorthand: 'MD', name: 'Match Director', remark: '' },
]

export const CATEGORIES = [
  {
    id: 1,
    name: 'Uncategorized (Аль ч категорид хамаарахгүй)',
    shorthand: 'U',
  },
  {
    id: 2,
    name: 'Super Junior (16-с доош насны)',
    shorthand: 'Super Junior',
  },
  {
    id: 3,
    name: 'Junior (21-с доош насны)',
    shorthand: 'Junior',
  },
  {
    id: 4,
    name: 'Senior (50-с дээш насны)',
    shorthand: 'Senior',
  },
  {
    id: 5,
    name: 'Super Senior (60-с дээш насны)',
    shorthand: 'Super Senior',
  },
  {
    id: 6,
    name: 'Lady (Эмэгтэй)',
    shorthand: 'Lady',
  },
]

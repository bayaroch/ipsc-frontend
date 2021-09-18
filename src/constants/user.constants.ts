export enum USER_TYPE {
  USER_ADMIN = 9,
  USER_REGULAR = 1,
  USER_STUDENT = 0,
}

export enum PF {
  PF_MAJOR = 'MAJOR',
  PF_MINOR = 'MINOR',
}

export const STATUS = {
  ENABLED: true,
  DISABLED: false,
}

export enum GENDER {
  FEMALE = 1,
  MALE = 0,
}

export const GENDER_DATA = [
  {
    id: GENDER.FEMALE,
    value: 'Эр',
  },
  {
    id: GENDER.MALE,
    value: 'Эм',
  },
]

export enum CATEGORY {
  UNCATEGORIZED = 1,
  SUPER_JUNIOR = 2,
  JUNIOR = 3,
  SENIOR = 4,
  SUPER_SENIOR = 5,
  LADY = 6,
}

export const CAT_DATA = [
  {
    id: 1,
    name: '',
  },
  {
    id: 2,
    name: 'Super Junior',
  },
  {
    id: 3,
    name: 'Junior',
  },
  {
    id: 4,
    name: 'Senior',
  },
  {
    id: 5,
    name: 'Super Senior',
  },
  {
    id: 6,
    name: 'Lady',
  },
]

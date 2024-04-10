import { red, orange, blue, purple, green } from '@mui/material/colors'

export enum USER_TYPE {
  USER_ADMIN = 9,
  USER_REGULAR = 1,
  USER_STUDENT = 0,
}

export enum USER_VERIFICATION_STATUS {
  VERIFIED = 1,
  UNVERIFIED = 0,
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
  FEMALE = 0,
  MALE = 1,
}

export const GENDER_DATA = [
  {
    id: GENDER.FEMALE,
    value: 'Эм',
  },
  {
    id: GENDER.MALE,
    value: 'Эр',
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
    name: '-',
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

interface IObjectKeys {
  [key: number]: string
}

export const badgeColor: IObjectKeys = {
  1: blue[500],
  2: purple[500],
  3: green[500],
  4: orange[500],
  5: red[500],
}

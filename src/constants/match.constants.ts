import { MatchCreateInputType } from '@containers/Admin/MatchCreateContainer/useCreateMatch'
import { helper } from '@utils/helpers/common.helper'
import moment from 'moment'
import { MATCH_STATUS } from '.'

const match_start = helper.getNextDayOfWeek(new Date(), 6)
const match_end = helper.getNextDayOfWeek(new Date(), 0)

const registration_start = helper.getNextDayOfWeek(new Date(), 3)
const registration_end = helper.getNextDayOfWeek(new Date(), 5)

export const weekly: MatchCreateInputType = {
  name: 'Action Air Club Match (Lv1)',
  match_start: moment(match_start).format('YYYY-MM-DDTHH:mm'),
  match_end: moment(match_end).format('YYYY-MM-DDTHH:mm'),
  registration_start: moment(registration_start).format('YYYY-MM-DDTHH:mm'),
  registration_end: moment(registration_end).format('YYYY-MM-DDTHH:mm'),
  lvl: 1,
  point_multiplier: 0,
  is_public: false,
  per_squad: 10,
  tax: 1,
  stage_number: 4,
  status: MATCH_STATUS.MATCH_PUBLISH,
  min_point: '',
  additional_info: `
  Нэг ээлжинд 8-10 буудагч байна.
  Чансаа: х1 тооцогдож бүртгэгдэнэ.
  Ангилал: OP, ST, CL, PD, PO
  Ангилалд тавигдах шаардлага: Байхгүй
  Шагналт байр: Байхгүй`,
  sponsor_info: '',
}

// export type TournamentStatusTime =
//   | 'RegisterStartIn'
//   | 'RegisterEndIn'
//   | 'MatchStartIn'
//   | 'MatchEndIn'
//   | 'Completed'
//   | 'Draft'

export enum TournamentStatusTimeText {
  RegisterStartIn = 'Бүртгэл эхлэхэд',
  RegisterEndIn = 'Бүртгэл хаагдахад',
  MatchStartIn = 'Тэмцээн эхлэхэд',
  MatchEndIn = 'Тэмцээн дуусахад',
  Completed = 'Дууссан',
}

export type TournamentStatusTime = {
  eventTime: string | null
  eventText: TournamentStatusTimeText
}

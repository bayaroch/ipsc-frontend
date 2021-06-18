import { List, Add } from '@material-ui/icons'

export const ADMIN_MENU_LARGE = [
  {
    id: 1,
    route: '/admin/matches',
    name: 'Тэмцээн жагсаалт',
    icon: List,
  },
  {
    id: 2,
    route: '/admin/matches/create',
    name: 'Тэмцээн үүсгэх',
    icon: Add,
  },
]

export const MEMBER_MENU_LARGE = [
  {
    id: 1,
    route: '/member/matches',
    name: 'Тэмцээн',
    icon: List,
  },
]

import { List, Add, People, MilitaryTech } from '@mui/icons-material'

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
  {
    id: 3,
    route: '/admin/members',
    name: 'Гишүүд',
    icon: People,
  },
]

export const MEMBER_MENU_LARGE = [
  {
    id: 1,
    route: '/member/matches',
    name: 'Тэмцээн',
    icon: List,
  },
  {
    id: 2,
    route: '/member/list',
    name: 'Клубын гишүүд',
    icon: People,
  },
  {
    id: 3,
    route: '/member/ranks',
    name: 'Чансаа',
    icon: MilitaryTech,
  },
]

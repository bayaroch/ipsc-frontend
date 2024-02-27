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
  {
    id: 4,
    route: '/admin/match-types',
    name: 'Match Types',
    icon: List,
  },
  {
    id: 5,
    route: '/admin/divisions',
    name: 'Divisions',
    icon: List,
  },
]

//comment

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

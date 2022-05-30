export const topmenu = [
  {
    label: 'Танилцуулга',
    is_parent: true,
    child_menu: [
      {
        label: 'IPSC гэж юу вэ?',
        route: '/about_ipsc',
      },
      {
        label: 'IPSC ACTION AIR',
        route: '/about_aasc',
      },
      {
        label: 'ACTION AIR SHOOTING CLUB',
        route: '/about_us',
      },
    ],
  },
  {
    label: 'Тэмцээн',
    route: '/match',
  },
  {
    label: 'Cпортын дүрэм',
    route: '/rules',
  },
  {
    label: 'Cургалт',
    route: '/course',
  },
  {
    label: 'Гишүүнчлэл',
    route: '/membership',
  },
  {
    label: 'Бусад',
    isMember: true,
    is_parent: true,
    child_menu: [
      {
        label: 'ЧАНСАА ТОДОРХОЙЛОХ ЖУРАМ',
        route: '/rules-rating',
      },
      {
        label: 'МПБХ-ны тэмцээн явуулах журам',
        route: '/rules-match',
      },
      {
        label: 'Спортын цол, зэрэг олгох болзол',
        route: '/rules-rank',
      },
    ],
  },
]

export const mainmenu = [
  {
    label: 'IPSC Action Air',
    route: '/about_aasc',
  },
  {
    label: 'Action Air Shooting Club',
    route: '/about_us',
  },
  {
    label: 'Cпортын дүрэм',
    route: '/rules',
  },
  {
    label: 'Cургалт',
    route: '/course',
  },
  {
    label: 'Гишүүнчлэл',
    route: '/membership',
  },
  {
    label: 'Бусад',
    route: '/rules-rating',
  },
]

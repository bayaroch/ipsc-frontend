const DOMAIN = 'https://ipsc.babyzone.mn'
const REST_API_PATH = '/api/v1/'
const API_ROOT = REST_API_PATH

const currYear = new Date().getFullYear()

export const URI = {
  DOMAIN,
  LOGIN: API_ROOT + 'auth/login',
  MATCH: API_ROOT + 'matches',
  PARTICIPANT: API_ROOT + 'participants',
  PARTICIPANT_STAT: API_ROOT + 'participants/stats/:id',
  BADGES: API_ROOT + 'badges',
  DIVISIONS: API_ROOT + 'divisions',
  CLASS: API_ROOT + 'classifications',
  SQUADS: API_ROOT + 'squads',
  SQUADSJOIN: API_ROOT + 'squad_members',
  ACCOUNT: API_ROOT + 'users',
  EXPORT: API_ROOT + 'practiscores/:id',
  MATCH_SCORE: API_ROOT + 'match_scores',
  RANKS: API_ROOT + 'ranks',
  RANKS_BY_DIVISION: API_ROOT + 'ranks?division_id=:id',
  RANKS_BY_LAST_YEAR: API_ROOT + `ranks/division/last40?cur_year=${currYear}`,
  MATCH_PUBLIC: API_ROOT + 'public_match_list',
  PARTICIPANT_GUEST: API_ROOT + 'participants/create_guest',
  MATCH_FILES: API_ROOT + 'match_files?match_id=:id',
}

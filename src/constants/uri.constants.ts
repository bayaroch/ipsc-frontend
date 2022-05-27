const DOMAIN = 'https://ipsc.babyzone.mn'
const REST_API_PATH = '/api/v1/'
const API_ROOT = REST_API_PATH

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
}

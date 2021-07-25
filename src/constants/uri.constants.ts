const DOMAIN = 'https://morning-garden-98261.herokuapp.com/'
const REST_API_PATH = '/api/v1/'
const API_ROOT = DOMAIN + REST_API_PATH

export const URI = {
  LOGIN: API_ROOT + 'auth/login',
  MATCH: API_ROOT + 'matches',
  PARTICIPANT: API_ROOT + 'participants',
  BADGES: API_ROOT + 'badges',
  DIVISIONS: API_ROOT + 'divisions',
  CLASS: API_ROOT + 'classifications',
}

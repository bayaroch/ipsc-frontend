export interface MatchItem {
  id: number
  name: string
  match_start: string
  match_end: string
  registration_start: string
  registration_end: string
  lvl: number
  point_multiplier: number
  tax: number
  tax_info?: string
  min_point?: string
  additional_info?: string
  sponsor_info?: string
  per_squad: number
  is_public: boolean
  status: number
  last_modified_by: number
}

export enum MATCH_ACTION_TYPE {
  GET_MATCHES = 'match/getMatches',
}

import api from './api'
import { URI } from '@constants/uri.constants'

export type MathSscoreBadgeParams = {
  id?: number
  badges?: string
}

export const badgeServices = {
  setMatchScoreBadge: async (params: MathSscoreBadgeParams): Promise<any> => {
    const formData = new FormData()
    if (params.badges) {
      formData.append('badges', params.badges)
    }
    const res = await api.put(URI.MATCH_SCORE + '/' + params.id, params, {
      headers: { 'Content-Type': 'application/json' },
    })
    return res
  },
}

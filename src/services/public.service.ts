import { publicApi } from './api'

export const contentServices = {
  getPageContent: async (id: string): Promise<any> => {
    const { data } = await publicApi.get<any>(`/posts/${id}`)
    return data
  },
}

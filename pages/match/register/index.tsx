import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import { useRouter } from 'next/router'
import { Box } from '@mui/material'
import PublicMatchRegister from '@containers/PublicMatchRegister'
import usePublicMatch from '@containers/PublicMatchListContainer/usePublicMatch'
import { useEffect } from 'react'
import _ from 'lodash'
import { BasicLoader } from '@components/common/Loader'
import useAuth from '@utils/hooks/useAuth'

const MatchDetail: PageWithLayoutType = () => {
  const router = useRouter()
  const { id } = router.query

  const { list, getList, meta } = usePublicMatch()
  const { isLoggedIn } = useAuth()

  const data = _.find(list, (l) => l.id == Number(id as string))

  useEffect(() => {
    getList()
  }, [])

  useEffect(() => {
    if (isLoggedIn === true) {
      if (id) router.push(`/member/matches/${id}`)
    }
  }, [isLoggedIn, id])

  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Тэмцээний бүртгэл'} />
      <ContentWrapper topSpace={true}>
        <>
          <Box>
            <BasicLoader meta={meta} />
            {data && isLoggedIn === false ? (
              <PublicMatchRegister id={id as string} title={data?.name} />
            ) : null}
          </Box>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default MatchDetail
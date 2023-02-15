import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import { useEffect } from 'react'
import usePublicMatch from '@containers/PublicMatchListContainer/usePublicMatch'
import { BasicLoader } from '@components/common/Loader'
import { useRouter } from 'next/router'
import _ from 'lodash'
import { Box } from '@mui/material'
import PublicMatchDetail from '@containers/PublicMatchDetail'

const MatchDetail: PageWithLayoutType = () => {
  const { list, getList, meta, support } = usePublicMatch()
  const router = useRouter()
  const { id } = router.query

  const data = _.find(list, (l) => l.id == Number(id as string))

  useEffect(() => {
    getList({ per_page: 100, page: 1 })
  }, [])

  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={data?.name} />
      <ContentWrapper topSpace={true}>
        <>
          <BasicLoader meta={meta} />
          <Box>
            {!meta.pending && meta.loaded && data ? (
              <PublicMatchDetail detail={data} meta={meta} support={support} />
            ) : null}
          </Box>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default MatchDetail

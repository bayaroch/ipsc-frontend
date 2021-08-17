import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import ContentHeader from '@components/elements/ContentHeader'
import MembershipContainer from '@containers/Pages/Membership'

const Membership: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Гишүүнчлэл'} />
      <ContentWrapper>
        <MembershipContainer />
      </ContentWrapper>
    </MainLayout>
  )
}

export default Membership

import { BasicLoader } from '@components/common/Loader'
import useAccount from '@containers/Admin/MemberListContainer/useAccount'
import { Grid } from '@mui/material/'
import { UserCreateParams } from '@services/account.services'
import { useConfirm } from 'material-ui-confirm'
import GeneralInfo from './Elements/GeneralInfo'
import UserContent from './Elements/UserContent'
import useProfileDetail from './useProfileDetail'

interface ProfileDetailProps {
  id: string
}

const ProfileDetailContainer: React.FC<ProfileDetailProps> = ({ id }) => {
  const { meta, detail, support, current } = useProfileDetail(id)

  const confirm = useConfirm()
  const { update } = useAccount()

  const onSubmitUpdate = (data: UserCreateParams) => {
    confirm({
      title: 'Мэдээлэл шинэчлэх үү',
      confirmationText: 'Тийм',
      cancellationText: 'Үгүй',
    })
      .then(() => {
        if (data)
          update({
            data: data,
            id: current.id,
          })
      })
      .catch(() => null)
  }

  return (
    <>
      {detail && (
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            pr={{ lg: 4, md: 2, sm: 1, xs: 0 }}
            lg={5}
            xl={4}
          >
            <GeneralInfo support={support} userDetail={detail} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7} xl={8}>
            <UserContent
              detail={detail}
              current={current}
              support={support}
              onUpdate={onSubmitUpdate}
            />
          </Grid>
        </Grid>
      )}
      <BasicLoader meta={meta} />
    </>
  )
}

export default ProfileDetailContainer

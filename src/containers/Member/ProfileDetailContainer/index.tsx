import { BasicLoader } from '@components/common/Loader'
import { Grid } from '@mui/material/'
import GeneralInfo from './Elements/GeneralInfo'
import UserContent from './Elements/UserContent'
import useProfileDetail from './useProfileDetail'

interface ProfileDetailProps {
  id: string
}

const ProfileDetailContainer: React.FC<ProfileDetailProps> = ({ id }) => {
  const { meta, detail, support } = useProfileDetail(id)

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
            <UserContent />
          </Grid>
        </Grid>
      )}
      <BasicLoader meta={meta} />
    </>
  )
}

export default ProfileDetailContainer

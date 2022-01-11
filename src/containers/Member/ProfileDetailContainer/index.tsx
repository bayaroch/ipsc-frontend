import { BasicLoader } from '@components/common/Loader'
import { Box, Grid } from '@mui/material/'
import ProfileHeader from './Elements/ProfileHeader'
import useProfileDetail from './useProfileDetail'

interface ProfileDetailProps {
  id: string
}

const ProfileDetailContainer: React.FC<ProfileDetailProps> = ({ id }) => {
  const { meta, detail } = useProfileDetail(id)

  return (
    <>
      {detail && (
        <Box sx={{ width: '100%' }}>
          <ProfileHeader userDetail={detail} />
          <Grid container>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
                  flexBasis: '100%',
                  maxWidth: '100%',
                },
              }}
            >
              <Box mb={6}>detail</Box>
              <Box mb={6}>asdasd</Box>
              <Box mb={6}>asd</Box>
            </Grid>
          </Grid>
        </Box>
      )}
      <BasicLoader meta={meta} />
    </>
  )
}

export default ProfileDetailContainer

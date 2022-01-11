import { Box } from '@mui/material/'

interface ProfileDetailProps {
  id: string
}

const ProfileDetailContainer: React.FC<ProfileDetailProps> = ({ id }) => {
  return <Box>{id}</Box>
}

export default ProfileDetailContainer

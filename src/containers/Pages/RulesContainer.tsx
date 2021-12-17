import SideBarMenu from '@components/common/SideBarMenu'
import { rulescontent } from '@constants/rules.constants'
import { Grid, Box } from '@mui/material/'

const RulesContainer: React.FC = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid md={9} sm={12} xs={12} item>
          <Box sx={{ paddingRight: '50px', paddingBottom: '100px' }}>
            <div className="content">{children}</div>
          </Box>
        </Grid>
        <Grid md={3} sm={12} xs={12} item>
          <SideBarMenu title="Спортын Дүрэм" data={rulescontent} />
        </Grid>
      </Grid>
    </>
  )
}

export default RulesContainer

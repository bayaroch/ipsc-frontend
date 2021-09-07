import SideBarMenu from '@components/common/SideBarMenu'
import { rulescontent } from '@constants/rules.constants'
import { makeStyles, Grid, Box, Theme } from '@material-ui/core/'

const RulesContainer: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid md={9} sm={12} xs={12} item>
          <Box className={classes.innerContent}>
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

const useStyles = makeStyles((theme: Theme) => ({
  innerContent: {
    paddingRight: 50,
    paddingBottom: 100,
  },
  root: {
    width: '100%',
  },
  heading: {},
  accordion: {
    marginTop: 20,
    marginBottom: 20,
  },
  [theme.breakpoints.down('sm')]: {
    innerContent: {
      paddingRight: 0,
      paddingBottom: 20,
      textAlign: 'justify',
    },
  },
}))

export default RulesContainer

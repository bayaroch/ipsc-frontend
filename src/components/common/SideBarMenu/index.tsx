import React from 'react'
import {
  Box,
  Paper,
  List,
  ListItem,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import _ from 'lodash'

export type MenuList = {
  title: string
  route: string
}

interface SideBarMenuProps {
  data: MenuList[]
  title?: string
}

const SideBarMenu: React.FC<SideBarMenuProps> = ({ data, title }) => {
  const router = useRouter()
  const classes = useStyles()
  return (
    <Box>
      {!_.isEmpty(title) ? (
        <Typography className={classes.title} variant="h3" component="h3">
          {title}
        </Typography>
      ) : null}
      <Paper>
        <List className={classes.menu}>
          {data &&
            data.map((item, i) => {
              return (
                <ListItem
                  className={classes.menuItem}
                  onClick={() => item.route && router.push(item.route)}
                  key={i}
                  button
                >
                  {item.title}
                </ListItem>
              )
            })}
        </List>
      </Paper>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  menuItem: {
    fontSize: 14,
    borderBottom: '1px solid #eee',
    '&:last-child': {
      borderBottom: '0 none',
    },
  },
  menu: {
    padding: 0,
  },
  title: {
    marginBottom: 20,
  },
}))

SideBarMenu.defaultProps = {
  data: [],
}

export default SideBarMenu

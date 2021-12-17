import React from 'react'
import { Box, Paper, List, ListItem, Typography } from '@mui/material/'
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

  return (
    <Box>
      {!_.isEmpty(title) ? (
        <Typography sx={{ marginBottom: '20px' }} variant="h3" component="h3">
          {title}
        </Typography>
      ) : null}
      <Paper sx={{ marginBottom: '20px', width: '100%' }}>
        <List sx={{ padding: 0 }}>
          {data &&
            data.map((item, i) => {
              return (
                <ListItem
                  selected={router.pathname === item.route ? true : false}
                  sx={{
                    fontSize: 14,
                    borderBottom: '1px solid #eee',
                    '&:last-child': {
                      borderBottom: '0 none',
                    },
                  }}
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

SideBarMenu.defaultProps = {
  data: [],
}

export default SideBarMenu

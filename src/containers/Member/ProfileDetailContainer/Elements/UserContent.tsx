import { Box, Paper, Tabs, Tab, BoxProps } from '@mui/material'
import { MemberItem, UserCreateParams } from '@services/account.services'
import { UserData } from '@services/auth.services'
import { SupportState } from '@store/support/reducers'
import { useState } from 'react'
import EditInfo from './EditInfo'

interface TabPanelProps extends BoxProps {
  value: number
  index: number
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface UserContentProps {
  current: UserData
  detail: MemberItem
  support: SupportState
  onUpdate: (data: UserCreateParams) => void
}

const UserContent: React.FC<UserContentProps> = ({
  current,
  detail,
  support,
  onUpdate,
}) => {
  const [value, setValue] = useState<number>(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue)
  }

  return (
    <Paper sx={{ padding: 0 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Үзүүлэлт" {...a11yProps(0)} />
          {current.id === detail.id ? (
            <Tab label="Профайл шинэчлэх" {...a11yProps(1)} />
          ) : null}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          alignItems="center"
          justifyContent="center"
          display="flex"
          minHeight={450}
        >
          No Data
        </Box>
      </TabPanel>
      {current.id === detail.id ? (
        <TabPanel value={value} index={1}>
          <EditInfo
            userDetail={detail}
            current={current}
            support={support}
            onUpdate={onUpdate}
          />
        </TabPanel>
      ) : (
        <></>
      )}
    </Paper>
  )
}

export default UserContent

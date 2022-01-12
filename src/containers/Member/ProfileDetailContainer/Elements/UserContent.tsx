import { Box, Paper, Tabs, Tab, BoxProps } from '@mui/material'
import { useState } from 'react'

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

const UserContent: React.FC = () => {
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
          <Tab label="Тэмцээнүүд" {...a11yProps(1)} />
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
      <TabPanel value={value} index={1}>
        No Data
      </TabPanel>
    </Paper>
  )
}

export default UserContent

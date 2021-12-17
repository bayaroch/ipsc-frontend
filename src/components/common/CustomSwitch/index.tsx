import Switch from '@mui/material/Switch'

export interface SwitchIOSProps {
  title?: string
  checked: boolean
  name?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomSwitch: React.FC<SwitchIOSProps> = ({
  checked,
  handleChange,
  ...rest
}) => {
  return (
    <Switch
      sx={{
        root: {
          width: 63,
          height: 36,
          padding: 0,
          display: 'flex',
        },
        switchBase: {
          padding: 4,
          color: (theme) => theme.palette.grey[500],
          '&$checked': {
            transform: 'translateX(28px)',
            color: (theme) => theme.palette.common.white,
            '& + $track': {
              opacity: 1,
              backgroundColor: (theme) => theme.palette.primary.main,
              borderColor: (theme) => theme.palette.primary.main,
            },
          },
        },
        thumb: {
          width: 28,
          height: 28,
          boxShadow: 'none',
        },
        track: {
          border: `1px solid palette.grey[500]`,
          borderRadius: 2,
          opacity: 1,
          backgroundColor: (theme) => theme.palette.common.white,
        },
      }}
      checked={checked}
      onChange={handleChange}
      {...rest}
    />
  )
}

export default CustomSwitch

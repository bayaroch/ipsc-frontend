import { makeStyles, Box, Button } from '@material-ui/core/'
import CustomInput from '@components/common/Input'
import { useRouter } from 'next/router'

const MatchCreateContainer: React.FC = () => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Box className={classes.container}>
      <CustomInput
        labelPrimary="Match Name"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Match Start"
        type="datetime-local"
        placeholder={'Эхлэх огноо'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Match End"
        type="datetime-local"
        placeholder={'Дуусах огноо'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Registration Start"
        type="datetime-local"
        placeholder={'Бүртгэл эхлэх огноо'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Registration End"
        type="datetime-local"
        placeholder={'Бүртгэл хаагдах огноо'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="LvL"
        placeholder={'Тэмцээны lvl'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Point multiplier"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Stage number"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Tax"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="TaxInfo"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Min Point"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Additional Info"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Sponsor Info"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Per Squad"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Public"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Status"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  container: {},
}))

export default MatchCreateContainer

// "point_multiplier": 2,
// "stage_number": 6,
// "tax": 40000,
// "tax_info": "(RO free etc)",
// "min_point": "200",
// "additional_info": "-",
// "sponsor_info": "-",
// "per_squad": 6,
// "is_public": 0,
// "status": 1,
// "last_modified_by": 1

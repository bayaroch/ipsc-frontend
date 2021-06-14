import {
  makeStyles,
  Box,
  Button,
  Divider,
  FormControl,
  ButtonGroup,
} from '@material-ui/core/'
import CustomSwitch from '@components/common/CustomSwitch'
import CustomInput from '@components/common/Input'
import { CustomLabel } from '@components/common/Input'
import { useRouter } from 'next/router'

const MatchCreateContainer: React.FC = () => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Box className={classes.container}>
      <CustomInput
        required={true}
        labelPrimary="Match Name"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        required={true}
        labelPrimary="Match Start"
        type="datetime-local"
        placeholder={'Эхлэх огноо'}
        fullWidth={true}
      />
      <CustomInput
        required={true}
        labelPrimary="Match End"
        type="datetime-local"
        placeholder={'Дуусах огноо'}
        fullWidth={true}
      />
      <CustomInput
        required={true}
        labelPrimary="Registration Start"
        type="datetime-local"
        placeholder={'Бүртгэл эхлэх огноо'}
        fullWidth={true}
      />
      <CustomInput
        required={true}
        labelPrimary="Registration End"
        type="datetime-local"
        placeholder={'Бүртгэл хаагдах огноо'}
        fullWidth={true}
      />
      <CustomInput
        required={true}
        labelPrimary="LvL"
        placeholder={'Тэмцээны lvl'}
        fullWidth={true}
      />
      <CustomInput
        required={true}
        labelPrimary="Point multiplier"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />

      <CustomInput
        required={true}
        labelPrimary="Per Squad"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <Divider className={classes.divider} />
      <CustomInput
        labelPrimary="Tax"
        type="number"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="TaxInfo"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
        multiline
        rows={3}
        rowsMax={10}
      />
      <CustomInput
        type="number"
        labelPrimary="Stage number"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        type="number"
        labelPrimary="Min Point"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Additional Info"
        placeholder={'Тэмцээны нэр'}
        multiline
        rows={3}
        rowsMax={10}
        fullWidth={true}
      />
      <CustomInput
        labelPrimary="Sponsor Info"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
        multiline
        rows={3}
        rowsMax={10}
      />
      <FormControl>
        <CustomLabel text={'Is Public'} id={'public'} />
        <CustomSwitch handleChange={() => {}} checked={true} name="Is Public" />
      </FormControl>
      <CustomInput
        labelPrimary="Status"
        placeholder={'Тэмцээны нэр'}
        fullWidth={true}
      />
      <ButtonGroup
        disableElevation
        variant="contained"
        color="primary"
      ></ButtonGroup>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  container: {},
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
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

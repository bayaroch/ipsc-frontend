import { ChangeEvent, forwardRef, useEffect, useState } from 'react'
import {
  Dialog,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
  ButtonGroup,
  Slide,
  Divider,
  SlideProps,
  Typography,
  SelectChangeEvent,
  Box,
  FormControl,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  Checkbox,
  ListItem
} from '@mui/material/'
import { SupportItem } from '@services/support.services'
import { Colors } from '@theme/colors'
import { useConfirm } from 'material-ui-confirm'
import { SquadHelper } from '@store/squads/reducers/helpers'
import {
  SquadChangeParams,
  SquadJoinParams,
  SquadListData,
} from '@services/squad.services'
import { UserData } from '@services/auth.services'
import { Meta } from '@store/metadata/actions/types'
import SquadList from '@components/admin/SquadList'
import _ from 'lodash'
import { TeamItem } from '@services/team.service'
import ESSelect from '@components/common/Select'
import { ParticipantsItem } from '@services/participant.service'
import { DivisionsItem } from '@services/match.services'
import { CATEGORIES } from '@constants/common.constants'

interface PickerProps {
  open: boolean
  id: string
  divisions: SupportItem[]
  match_divisions: DivisionsItem[]
  maxSquad: number
  handleClose: () => void
  userData: UserData
  isRo: boolean
  onRegisterThenJoin: (
    id: number,
    category_id: number,
    is_ro: number,
    team: number | null,
    squadParams: SquadJoinParams
  ) => void
  onRegister: (id: number, is_ro: number, team: number | null) => void
  validate?: (v: string) => void
  isOpenOnly?: boolean
  squadList: SquadListData[]
  myTeams: TeamItem[]
  squadMeta: Meta
  change: (params: SquadChangeParams) => void
  join: (params: SquadJoinParams) => void
  isRegistered: boolean
  onUpdate: (id: number, category_id: number, is_ro: number, team: number | null) => void
  myRegistration?: ParticipantsItem | undefined
  isRegsiterActive: boolean
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const MatchRegistration: React.FC<PickerProps> = (props) => {
  const {
    open,
    divisions,
    match_divisions,
    handleClose,
    isRo,
    change,
    isRegsiterActive,
    validate,
    userData,
    myTeams,
    isOpenOnly,
    squadList,
    squadMeta,
    join,
    onUpdate,
    myRegistration,
    onRegisterThenJoin,

    isRegistered,
    maxSquad,
  } = props

  const confirm = useConfirm()
  const [selected, choose] = useState<number>(-1)
  const [roField, setRoField] = useState<number>(0)
  const [showSquad, setShowSquad] = useState<boolean>(false)
  const [catIds, setCatIds] = useState<string[]>([])
  const [catIsMulti, setCatIsMulti] = useState<boolean>(false)
  // const [teamAllowed, setCTeamAllowed] = useState<boolean>(false)
  const [newSquad, setNewSquad] = useState<null | SquadJoinParams>(null)
  const [team, setValueId] = useState<string>('')

  const filteredTeams = _.filter(myTeams, (m) => m.division.id === selected)

  // eslint-disable-next-line no-console
  console.log(isRegistered)

  const renderWarning = () => {
    if (
      myRegistration &&
      myRegistration.team !== null &&
      selected !== myRegistration.team?.division.id
    ) {
      return (
        <Alert color="warning">
          Та багаасаа өөр ангилал сонгох гэж байна багаасаа гарна уу
        </Alert>
      )
    }
    return null
  }
  useEffect(() => {
    if (myRegistration) {
      choose(myRegistration.division_id)
      setChecked([myRegistration.category_id])
      if (myRegistration.team) {
        setValueId(myRegistration.team.id.toString())
      }
    }
  }, [myRegistration])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoField(Number(e.target.value))
  }

  const handleNext = () => {
    if (selected === -1) {
      validate && validate('Division сонгоно уу')
    } else {
      setShowSquad(true)
    }
  }

  const handleSubmit = () => {
    if (!isRegistered && newSquad) {
      onRegisterThenJoin(
        selected,
        checked[0],
        roField,
        _.isEmpty(team) ? null : Number(team),
        newSquad
      )
    } else if (isRegistered && newSquad) {
      onUpdate(selected, checked[0], roField, _.isEmpty(team) ? null : Number(team))
      join(newSquad)
    } else if (!isRegistered && !newSquad) {
      confirm({
        title: 'Скуад сонголт',
        description: 'Аль нэг скуад заавал сонгоно уу',
        confirmationText: 'Ойлголоо',
        cancellationText: null,
      })
        .then(() => null)
        .catch(() => null)
      //onRegister(selected, roField, _.isEmpty(team) ? null : Number(team))
    } else {
      onUpdate(selected, checked[0], roField, _.isEmpty(team) ? null : Number(team))
    }
  }

  const renderList = () => {
    if (
      !_.isEmpty(squadList) &&
      !squadMeta.pending &&
      squadMeta.loaded &&
      !squadMeta.error &&
      showSquad
    ) {
      return (
        <Box>
          <SquadList
            tempId={newSquad?.squad_id}
            isEdit={isRegsiterActive}
            userId={userData.id}
            onSelectChange={(id) => onSelectChange(id)}
            onExpandMembers={() => null}
            list={squadList}
          />
        </Box>
      )
    }
    return null
  }

  const onSelectChange = (id: number) => {
    const existSquad = SquadHelper.isExist(squadList, userData.id)

    const existInThis = SquadHelper.isExistInThis(squadList, userData.id, id)
    const selected = _.filter(squadList, (s) => s.id == id)[0].squad_members
    const max = selected.length >= maxSquad

    if (!existInThis && !max) {
      confirm({
        title: 'Скуад сонголт',
        description: existSquad
          ? 'Та скуад өөрчлөх гэж байна.'
          : 'Та шинээр скуад сонгож байна',
        confirmationText: 'Тийм',
        cancellationText: 'Үгүй',
      })
        .then(() => {
          if (existSquad) {
            const params: SquadChangeParams = {
              data: {
                squad_id: id,
                user_id: userData.id,
                is_rm: false,
                is_ro: false,
                notify_squad_id: null,
              },
              id: existSquad,
            }

            change(params)
          } else {
            const params: SquadJoinParams = {
              squad_id: id,
              user_id: userData.id,
              is_rm: false,
              is_ro: false,
              notify_squad_id: null,
            }
            setNewSquad(params)
          }
        })
        .catch(() => {
          // setSelectedData(undefined)
        })
    } else if (max && !existInThis) {
      confirm({
        title: 'Скуад дүүрсэн байна.',
        description: `Тэмцээний нэг скуадад орох оролцогчдын хязгаар: ${maxSquad}.`,
        confirmationText: 'Ок',
        cancellationText: null,
      })
        .then(() => null)
        .catch(() => {
          // setSelectedData(undefined)
        })
    }
  }  

  const renderRoSection = () => {
    if (isRo)
      return (
        <>
          <Box
            sx={{
              display: 'flex',
              padding: '20px 10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
                value={roField}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={0}
                  control={<Radio />}
                  label="Буудагчаар оролцох"
                />
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Шүүгчээр давхар ажиллах"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Divider />
        </>
      )
  }

  const renderCatSection = () => {
    if (selected !== -1)
      
      return (
        <>
          <Typography
            variant="h3"
            sx={{ textAlign: 'center', p: 1, borderBottom: '1px solid #eee' }}
          >
            Категори сонгох {catIsMulti ? 'Анхааруулга:(Олон категори сонгох боломжтой)' : '(Зөвхөн нэгийг сонгоно)'}
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
            
            CATEGORIES.filter(item => catIds.includes(item.id.toString())).map((item, index) => {
              const labelId = `checkbox-list-label-${index.toString()}`;

              return (
                <ListItem
                  key={index}
                  disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(item.id)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(item.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${item.name}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </>
      )
  }

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {

    if (catIsMulti) {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    } else {
      setChecked([value]);
    }
    
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <ButtonGroup
        fullWidth
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button
          style={{ borderRadius: 0, borderColor: Colors.white }}
          onClick={() =>
            showSquad === true ? setShowSquad(false) : handleClose()
          }
        >
          Буцах
        </Button>
        {showSquad ? (
          <Button
            style={{ borderRadius: 0, borderColor: Colors.white }}
            onClick={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            {isRegistered ? 'Шинэчлэх' : 'Бүртгүүлэх'}
          </Button>
        ) : (
          <Button
            style={{ borderRadius: 0, borderColor: Colors.white }}
            onClick={() => handleNext()}
          >
            Баталгаажуулах
          </Button>
        )}
      </ButtonGroup>
      <Divider />
      {renderRoSection()}
      {isOpenOnly ? (
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pt: 2,
              pb: 2,
            }}
          >
            <Alert severity="info">
              Тэмцээний бүртгэл хаагдсанаас хойш ангилал өөрчлөхгүй бөгөөд
              өөрчлөх бол зөвхөн Open ангилалруу шилжих боломжтой.
            </Alert>
          </Box>
          <Divider />
        </>
      ) : (
        ''
      )}
      {showSquad === false ? (
        <Box>
          <Typography
            variant="h3"
            sx={{ textAlign: 'center', p: 1, borderBottom: '1px solid #eee' }}
          >
            Ангилал сонгох
          </Typography>
          <List>
            { match_divisions.length > 0 ?
            match_divisions.map((item, i) => {
              const disabled = isOpenOnly && item.division_id !== 1
              return (
                <Box key={i}>
                  <ListItemButton
                    disabled={disabled}
                    // sx={{
                    //   opacity: disabled ? 0.2 : 1,
                    //   cursor: disabled ? 'inherit' : 'pointer',
                    // }}
                    selected={item.division_id === selected ? true : false}
                    onSelect={() => setShowSquad(true)}
                    onClick={() => {
                      setChecked([0])
                      setCatIsMulti(item.is_multi_cat)
                      // setCTeamAllowed(item.is_team_result)
                      setCatIds(item.categories)
                      if (isOpenOnly) {
                        item.division_id === 1 && choose(item.division_id)
                      } else {
                        choose(item.division_id)
                      }
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      secondary={item.division.shorthand}
                    />
                  </ListItemButton>
                  <Divider />
                </Box>
              )
            }) : 
            divisions.map((item, i) => {
              const disabled = isOpenOnly && item.id !== 1
              return (
                <Box key={i}>
                  <ListItemButton
                    disabled={disabled}
                    // sx={{
                    //   opacity: disabled ? 0.2 : 1,
                    //   cursor: disabled ? 'inherit' : 'pointer',
                    // }}
                    selected={item.id === selected ? true : false}
                    onSelect={() => setShowSquad(true)}
                    onClick={() => {
                      if (isOpenOnly) {
                        item.id === 1 && choose(item.id)
                      } else {
                        choose(item.id)
                      }
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      secondary={item.shorthand}
                    />
                  </ListItemButton>
                  <Divider />
                </Box>
              )
            })
            }
          </List>
          {renderWarning()}

          {renderCatSection()}

          {!_.isEmpty(myTeams) ? (
            <Box>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  p: 1,
                  borderBottom: '1px solid #eee',
                }}
              >
                Багаар оролцох
              </Typography>
              <Box sx={{ p: 1 }}>
                <ESSelect
                  sx={{ width: 300 }}
                  value={team}
                  onChange={(e: SelectChangeEvent<any>) =>
                    setValueId(e.target.value)
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {filteredTeams.map((item, i) => (
                    <MenuItem key={i} value={item.id.toString()}>
                      <ListItemText primary={item.name} />
                    </MenuItem>
                  ))}
                </ESSelect>
              </Box>
            </Box>
          ) : null}
        </Box>
      ) : null}

      {renderList()}
    </Dialog>
  )
}

export default MatchRegistration

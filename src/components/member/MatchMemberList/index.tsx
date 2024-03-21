import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material/'
import Pagination from '@mui/material//Pagination'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import _ from 'lodash'
import { Meta } from '@store/metadata/actions/types'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'
import MatchListItem from '@components/common/MatchListItem'
import CustomList from '@components/common/List'
import { MatchItem } from '@store/match/actions/types'
import { UserData } from '@services/auth.services'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { SupportState } from '@store/support/reducers'
import { support as sup } from '@store/support/selectors'
import { useSelector } from 'react-redux'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface MatchListProps {
  getList: (params: MatchPageMeta) => void
  list: GroupedMatchListItem[]
  pagination: MatchPaginationMeta
  onEditClick: (id: number) => void
  meta: Meta
  currentUser: UserData
}

const defaultPerPage = 10

const MatchList: React.FC<MatchListProps> = (props) => {
  const { getList, list, pagination, meta, currentUser } = props
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage] = useState<number>(defaultPerPage)
  const [matchType, setMatchType] = useState<string>('-1')
  const [isPractice, setIsPractice] = useState<string>('-1')
  const support: SupportState = useSelector(sup)

  const matchTypes = support && support.matchTypes ? support.matchTypes : []


  useEffect(() => {
    getList({
      page: page,
      per_page: rowsPerPage,
      sort_direction: 'desc',
      sort_column: 'match_start',
      match_type_id: Number(matchType),
      is_practice: Number(isPractice),
    })
  }, [page, isPractice, matchType])

  const handleChangePage = (
    _event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage)
  }

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newVal: string,
  ) => {
    setIsPractice(newVal);
  };

  const selectHandleChange = (event: SelectChangeEvent) => {
    setMatchType(event.target.value as string);
  };

  const renderLoader = () => {
    if (!meta.loaded && meta.pending && !meta.error) {
      return (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
          }}
        >
          <Box className="dot-flashing" />
        </Box>
      )
    }
    return null
  }

  const renderRow = (item: MatchItem) => {
    return <MatchListItem key={item.id} item={item} user={currentUser} />
  }

  const renderList = () => {
    if (!_.isEmpty(list) && meta.loaded && !meta.error && !meta.pending) {
      return (
        <Box>
          <Box sx={{ width: 300, m: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">MatchType</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={matchType}
                label="MatchType"
                onChange={selectHandleChange}
              >
                <MenuItem value={-1}>All</MenuItem>
                {matchTypes.map((item) => {
                  return (
                    <MenuItem value={item.id.toString()} key={item.id}>
                      {item.name}
                    </MenuItem>
                  )
                })}
                
              </Select>
            </FormControl>
          </Box>

          <ToggleButtonGroup
            color="primary"
            value={isPractice}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="-1">All</ToggleButton>
            <ToggleButton value="0">Official</ToggleButton>
            <ToggleButton value="1">Practices</ToggleButton>
          </ToggleButtonGroup>

          {list.map((g, i) => {
            return (
              <Box key={i}>
                <Typography
                  sx={{ padding: '20px 0 30px 0' }}
                  variant="h2"
                  component="h2"
                  align="center"
                >
                  {g.groupTitle}
                </Typography>
                <Box>
                  <CustomList data={g.data} renderRow={renderRow} />
                </Box>
              </Box>
            )
          })}

          {pagination ? (
            <Pagination
              count={pagination.total_pages}
              page={page}
              sx={{
                position: 'relative',
                justifyContent: 'space-between',
                padding: 5,
                width: '100%',
                '& .MuiPagination-ul': {
                  width: '100%',
                  justifyContent: 'center',
                },
              }}
              onChange={handleChangePage}
            />
          ) : null}
        </Box>
      )
    }
    return null
  }

  return (
    <>
      {renderList()}
      {renderLoader()}
    </>
  )
}

export default MatchList

import React, { useEffect } from 'react'
import { 
  Box,
  Button,
  Alert,
} from '@mui/material/'
import { MatchPaginationMeta, MatchPageMeta } from '@services/match.services'
import _ from 'lodash'
import { Meta } from '@store/metadata/actions/types'
import { GroupedMatchListItem } from '@store/match/selectors/helpers'
import { UserData } from '@services/auth.services'
import { useDispatch, useSelector } from 'react-redux'
import VerificationInput from "react-verification-input";
import { resend, updateVerify, initProfile } from '@store/account/actions'
import searchStore from '@store/account'
import { useRouter } from 'next/router'

const { selectors } = searchStore

export interface MatchListProps {
  getList: (params: MatchPageMeta) => void
  list: GroupedMatchListItem[]
  pagination: MatchPaginationMeta
  onEditClick: (id: number) => void
  meta: Meta
  currentUser: UserData
}

const MemberVerification: React.FC<MatchListProps> = (props) => {
  const router = useRouter()
  const { meta, currentUser } = props
  const dispatch = useDispatch()
  const msg = useSelector(selectors.getVerifyMsg)
  const profile = useSelector(selectors.getProfile)
  
  const newPin = () => {
    dispatch(resend(currentUser.id.toString()))
  }

  const submitPin = (inputCode: string) => {

    dispatch(updateVerify({
      data: { code: inputCode},
      id: currentUser.id,
    }));
  }

  useEffect(() => {
    console.log('effect')
    if (profile && profile.verified === true) {
      console.log('effect verified & diaptching init profile then switch route');
      dispatch(initProfile(currentUser.id.toString()));
      router.push('/member/matches');
    }
  }, [profile]);

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

  const renderList = () => {
    if (meta.loaded && !meta.error && !meta.pending) {
      return (
        <Box>
          <Box style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <VerificationInput
              length={4}
              onComplete={(input) => submitPin(input)}
              classNames={{
                container: "container",
                character: "character",
                characterInactive: "character--inactive",
                characterSelected: "character--selected",
                characterFilled: "character--filled",
              }}
            />
          </Box>
          <Button
            type="submit"
            onClick={() => newPin()}
            variant="contained"
            color="secondary"
          >
            Get a new pin
          </Button>
          {msg && (
            <Alert severity="info">
              {msg.msg}
            </Alert>
          )}
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

export default MemberVerification

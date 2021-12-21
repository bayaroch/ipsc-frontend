import { Snackbar, Alert } from '@mui/material'
import * as selectors from '@store/support/selectors'
import * as actions from '@store/support/actions'
import { useSelector, useDispatch } from 'react-redux'
import { AlertColor } from '@mui/material/Alert'

export type toastProps = {
  message: string
  severity: AlertColor | undefined
  uuid: string
}

const ToastContainer: React.FC = () => {
  const dispatch = useDispatch()
  const toasts = useSelector(selectors.getToasts)
  const removeToast = (uuid: string) => dispatch(actions.removeToast(uuid))
  return (
    <>
      {toasts &&
        toasts.map((t: toastProps, idx: number) => (
          <Snackbar
            key={idx}
            open={true}
            autoHideDuration={6000}
            onClose={() => removeToast(t.uuid)}
          >
            <Alert
              elevation={6}
              variant="filled"
              onClose={() => removeToast(t.uuid)}
              severity={t.severity}
            >
              {t.message}
            </Alert>
          </Snackbar>
        ))}
    </>
  )
}

export default ToastContainer

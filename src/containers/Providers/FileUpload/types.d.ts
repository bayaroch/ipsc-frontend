import * as React from 'react'
import { DialogProps } from '@material-ui/core/Dialog'

export interface UploadOptions {
  title?: React.ReactNode
  dialogProps?: Omit<DialogProps, 'open'>
  backDropClose?: boolean
  maxSize?:number
  quality?:number
}

export interface ConfirmProviderProps {
  defaultOptions?: ConfirmOptions
}

export const ConfirmProvider: React.ComponentType<ConfirmProviderProps>

export const useConfirm: () => (options?: ConfirmOptions) => Promise<void>

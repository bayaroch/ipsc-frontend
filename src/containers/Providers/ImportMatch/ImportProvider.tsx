/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useCallback, Fragment } from 'react'
import UploaderContext from './UploaderContext'
import ImportDialog from './ImportDialog'
import { UploadOptions } from './types'

const DEFAULT_OPTIONS: UploadOptions = {
  title: 'Оноо оруулах',
  dialogProps: {},
}

const buildOptions = (
  defaultOptions: UploadOptions,
  options: UploadOptions
): UploadOptions => {
  const dialogProps = {
    ...(defaultOptions.dialogProps || DEFAULT_OPTIONS.dialogProps),
    ...(options.dialogProps || {}),
  }

  return {
    ...DEFAULT_OPTIONS,
    ...defaultOptions,
    ...options,
    dialogProps,
  }
}

const ImportProvider = ({ children, defaultOptions = {} }: any) => {
  const [options, setOptions] = useState<UploadOptions>({
    ...DEFAULT_OPTIONS,
    ...defaultOptions,
  })
  const [resolveReject, setResolveReject] = useState<any>([])
  const [resolve, reject] = resolveReject

  const confirm = useCallback((options: UploadOptions = {}): Promise<void> => {
    return new Promise((resolve, reject) => {
      setOptions(buildOptions(defaultOptions, options))
      setResolveReject([resolve, reject])
    })
  }, [])

  const handleClose = useCallback(() => {
    setResolveReject([])
  }, [])

  const handleCancel = useCallback(() => {
    if (reject) {
      reject()
      handleClose()
    }
  }, [reject, handleClose])

  const handleConfirm = useCallback(() => {
    if (resolve) {
      resolve()
      handleClose()
    }
  }, [resolve, handleClose])

  return (
    <Fragment>
      <UploaderContext.Provider value={confirm}>
        {children}
      </UploaderContext.Provider>
      <ImportDialog
        open={resolveReject.length === 2}
        options={options}
        onClose={() => {
          handleClose()
        }}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </Fragment>
  )
}

export default ImportProvider

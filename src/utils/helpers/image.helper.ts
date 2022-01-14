import Resizer from 'react-image-file-resizer'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const resizeFile = (file: File, quality?: number, size?: number): any =>
  new Promise((resolve) => {
    const q = quality ? quality : 460
    const s = size ? size : 460
    Resizer.imageFileResizer(
      file,
      s,
      s,
      'jpg',
      q,
      0,
      (uri) => {
        resolve(uri)
      },
      'file'
    )
  })

export const image = {
  resizeFile,
}

import { useState } from 'react'
import { useS3Upload } from 'next-s3-upload'
import { image } from '@utils/helpers/image.helper'
import { useUpload } from '@containers/Providers/FileUpload'

const Test = () => {
  const [imageUrl, setImageUrl] = useState<string>('')
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload()

  const upload = useUpload()

  const handleFileChange = async (file: File) => {
    try {
      const resized = await image.resizeFile(file)
      const { url } = await uploadToS3(resized as File)
      setImageUrl(url)
    } catch (err) {}
  }

  const handleUpload = () => {
    upload()
      .then(() => {
        alert('upload')
      })
      .catch(() => null)
  }

  return (
    <div>
      <FileInput onChange={handleFileChange} />
      <button onClick={openFileDialog}>Upload file</button>
      {imageUrl && <img src={imageUrl} />}
      <button onClick={handleUpload}>Upload Dialog</button>
    </div>
  )
}

export default Test

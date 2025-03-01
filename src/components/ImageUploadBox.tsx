import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

interface ImageUploadBoxProps {
  onImageUpload: (file: File) => void
}

export default function ImageUploadBox({ onImageUpload }: ImageUploadBoxProps) {
  const [preview, setPreview] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    onImageUpload(file)
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }, [onImageUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {'image/*': []} })

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors w-full h-48 flex items-center justify-center ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      {preview ? (
        <div className="relative w-full h-full">
          <Image src={preview} alt="Preview" layout="fill" objectFit="contain" className="rounded-lg" />
        </div>
      ) : (
        <p className="text-gray-300">Drag and drop an image here, or click to select a file</p>
      )}
    </div>
  )
}


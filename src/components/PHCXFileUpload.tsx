import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FileIcon } from 'lucide-react'

interface PHCXFileUploadProps {
  onFileUpload: (file: File) => void
}

export default function PHCXFileUpload({ onFileUpload }: PHCXFileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    onFileUpload(file)
    setFileName(file.name)
  }, [onFileUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/octet-stream': ['.phcx']
    },
    maxFiles: 1
  })

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors w-full h-48 flex flex-col items-center justify-center ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      {fileName ? (
        <div className="text-white">
          <FileIcon className="w-12 h-12 mb-2 mx-auto" />
          <p>{fileName}</p>
        </div>
      ) : (
        <div className="text-gray-300">
          <FileIcon className="w-12 h-12 mb-2 mx-auto" />
          <p>Drag and drop a .phcx file here, or click to select a file</p>
        </div>
      )}
    </div>
  )
}


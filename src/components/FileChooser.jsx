// src/components/FileChooser.jsx
import { useState } from 'react'
import { uploadFile } from '../services/api'

export default function FileChooser() {
  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [responseData, setResponseData] = useState(null)

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setFileName(file.name)
    setLoading(true)
    setError(null)
    setResponseData(null)

    try {
      const data = await uploadFile(file)
      setResponseData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bloco-arquivo flex flex-col items-center gap-2">
      <label htmlFor="foto" className="botao-arquivo cursor-pointer">
        {loading ? 'Enviando…' : 'Selecionar arquivo'}
        <input
          id="foto"
          name="foto"
          className="input-arquivo hidden"
          onChange={handleFileChange}
        />
      </label>

      {fileName && !loading && (
        <span id="imagem-arquivo" className="visivel text-sm text-[var(--background)]">
          {fileName}
        </span>
      )}

      {error && (
        <p className="text-red-600 text-sm mt-1">
          Erro: {error}
        </p>
      )}

      {responseData && (
        <div className="mt-4 w-full max-w-md p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Resposta do servidor:</h2>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(responseData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

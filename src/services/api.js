// src/services/api.js
import axios from 'axios'

const API_BASE = 'http://127.0.0.1:8000/api/indentified_payments/'

/**
 * Envia um arquivo para o endpoint via POST e retorna o JSON da resposta.
 */
export async function uploadFile(file) {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await axios.post(API_BASE, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response.data
  } catch (err) {
    const message =
      err.response?.data?.detail ||
      err.response?.data ||
      err.message ||
      'Erro desconhecido'
    throw new Error(message)
  }
}

/**
 * Busca todos os registros já identificados via GET.
 * Retorna o array de objetos (ou o que sua API devolver).
 */
export async function getIdentifiedPayments() {
  try {
    const response = await axios.get(API_BASE)
    return response.data
  } catch (err) {
    const message =
      err.response?.data?.detail ||
      err.response?.data ||
      err.message ||
      'Erro ao buscar dados'
    throw new Error(message)
  }
}

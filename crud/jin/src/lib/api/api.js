import axios from 'axios'

const url = 'http://localhost/surfitData'

const getContentsAPI = async () => {
  try {
    const { data } = await axios.get(url)
    console.log('[SUCCESS] get data', data) // data
    return data
  } catch (e) {
    console.log('[FAIL] get data')
  }
}

export { getContentsAPI }

const api = { getContentsAPI }

export default api

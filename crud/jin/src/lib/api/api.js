import axios from 'axios'

const url = 'http://localhost/surfitData'

const getContentsAPI = async () => {
  try {
    const { data } = await axios.get(url)
    console.log('[SUCCESS] get contents', data) // data
    return data
  } catch (e) {
    console.log('[FAIL] get contents')
  }
}

const getContentAPI = async id => {
  try {
    const { data } = await axios.get(`${url}/${id}`)
    console.log('[SUCCESS] get content', data) // data
    return data
  } catch (e) {
    console.log('[FAIL] get content')
  }
}

const updateContent = async (id, body) => {
  try {
    const { data } = await axios.put(`${url}/${id}`, body)
    console.log('[SUCCESS] update content')
  } catch (e) {
    console.log('[FAIL] update content')
  }
}

export { getContentsAPI, getContentAPI, updateContent }

const api = { getContentsAPI, getContentAPI, updateContent }

export default api

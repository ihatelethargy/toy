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

const createContent = async body => {
  try {
    const { data } = await axios.post(`${url}`, body)
    return data
    console.log('[SUCCESS] create content')
  } catch (e) {
    console.log('[FAIL] create content')
  }
}

const deleteContent = async id => {
  try {
    const { data } = await axios.delete(`${url}/${id}`)
    console.log('[SUCCESS] delete content')
    return data
  } catch (e) {
    console.log('[FAIL] update content')
  }
}

export {
  getContentsAPI,
  getContentAPI,
  updateContent,
  createContent,
  deleteContent,
}

const api = {
  getContentsAPI,
  getContentAPI,
  updateContent,
  createContent,
  deleteContent,
}

export default api

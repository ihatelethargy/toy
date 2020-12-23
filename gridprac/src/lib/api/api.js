import axios from 'axios'

const url = 'http://localhost:81/testData'

const getTestsApi = async () => {
  const { data } = await axios.get(url)
  try {
    console.log('[SUCCESS] get tests', data)
    return data
  } catch (e) {
    console.log('[FAIL] get tests')
  }
}

const getTestApi = async id => {
  const { data } = await axios.get(`${url}/${id}`)
  try {
    console.log('[SUCCESS] get test', data)
    return data
  } catch (e) {
    console.log('[FAIL] get test')
  }
}

export { getTestsApi, getTestApi }

const api = { getTestsApi, getTestApi }

export default api

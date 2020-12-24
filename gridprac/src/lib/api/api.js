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

const createTest = async body => {
  const { data } = await axios.post(`${url}`, body)
  try {
    console.log('[SUCCESS] create test')
    return data
  } catch (e) {
    console.log('[FAIL] create test')
  }
}

export { getTestsApi, getTestApi, createTest }

const api = { getTestsApi, getTestApi, createTest }

export default api

import nivedan from 'nivedan'
import { getUrl } from './urls'

nivedan.defaultConfig({
  baseURL: getUrl(),
  errorExpand: true,
  headers: {
    common: { 'Content-Type': 'application/json' },
  },
  errorMessageKey: 'error_message',
  rollbarToken: process.env.REACT_APP_ROLLBAR || '',
  rollbarConfig: {
    status: [403, 500], // track particular http error code in rollbar otherwise it will track all error code and exception
  },
})

nivedan.middleware.request.use(
  function (config) {
    const newConfig = { ...config }
    // add token if you want to add
    return newConfig
  },
  function (error) {
    return Promise.reject(error)
  }
)

nivedan.middleware.response.use(
  (response) => response,
  (err) => {
    if (err.status === 401) {
      window.location.href = '/'
    }
    return Promise.reject(err)
  }
)

export default nivedan

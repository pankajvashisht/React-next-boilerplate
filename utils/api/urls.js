import { isBrowser } from 'utils'
export const getUrl = () => {
  if (isBrowser) {
    return window.location.hostname === 'localhost'
      ? process.env.REACT_APP_BASE_URL
      : `${window.location.origin}/admins`
  }
  return false
}

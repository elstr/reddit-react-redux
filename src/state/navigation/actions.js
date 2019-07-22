export const SET_MOBILE = 'SET_MOBILE'

export function setMobile(isMobile) {
  return {
    type: SET_MOBILE,
    payload: {
      isMobile
    }
  }
}

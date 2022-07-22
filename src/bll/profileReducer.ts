
const initialState = {
  profile: null,
  status: ''
}
export const profileReducer = (state: any = initialState, action: ProfileReducerAT) => {
  switch (action.type) {
    case "PROFILE/SET-PROFILE":
      return {
        ...state,
        profile: action.profile
      }
    case "PROFILE/SET-STATUS":
      return {
        ...state,
        status: action.status

      }
  }
  return state
}




export const setProfileAC = (profile: any) => ({type: 'PROFILE/SET-PROFILE', profile} as const)
export const setProfileStatusAC = (status: any) => ({type: 'PROFILE/SET-STATUS', status} as const)

//TYPE
export type ProfileReducerAT = SetProfileAT | SetProfileStatusAT
type SetProfileAT = ReturnType<typeof setProfileAC>
type SetProfileStatusAT = ReturnType<typeof setProfileStatusAC>
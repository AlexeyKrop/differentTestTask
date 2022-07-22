

export const profileReducer = (state: any, action: ProfileReducerAT) => {
  return state
}




export const setProfileAC = (id: number) => ({type: 'PROFILE/SET-PROFILE'})

//TYPE
export type ProfileReducerAT = SetProfileAT
type SetProfileAT = ReturnType<typeof setProfileAC>
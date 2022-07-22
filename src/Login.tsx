import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {authAPI, profileAPI} from "./dal/api";
import {useDispatch} from "react-redux";
import {setProfileAC, setProfileStatusAC} from "./bll/profileReducer";

type Inputs = {
  email: string,
  password: string,
  rememberMe?: boolean
};
export const Login = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    let {email, password, rememberMe} = data
    authAPI.login(email, password, rememberMe)
      .then(res =>
        authAPI.me()
          .then(res => profileAPI.getProfile(res.data.data.id))
          .then(res => dispatch(setProfileAC(res.data)))
          .then(res => profileAPI.getProfileStatus(res.profile.userId))
          .then(res => dispatch(setProfileStatusAC(res.data)))
      )
  }

  (watch("email")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("email")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", {required: true})} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      <input type='checkbox' {...register("rememberMe", {required: false})}/>
      <input type="submit"/>
    </form>
  )
};

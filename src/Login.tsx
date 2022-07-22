import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {authAPI} from "./dal/api";

type Inputs = {
  email: string,
  password: string,
  rememberMe?: boolean
};
export const Login = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    let {email, password, rememberMe} = data
    authAPI.login(email, password, rememberMe)
      .then(res =>
        authAPI.me()
          .then(res => console.log(res.data.data.id))

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

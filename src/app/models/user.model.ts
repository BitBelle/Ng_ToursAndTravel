export interface User{
  username: string
  password: string,
  email: string

}
export interface SignUpResponse{
  message: string
}

export interface LogInRequest{
  username: string,
  password: string
}



export interface LogInResponse{
  message: string,
  token: string,

}
export interface ActionResponse<T> {
  message: string
  success: boolean
  code: number
  registerForm?: T
  loginForm?: T
}
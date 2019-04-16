import { AxiosResponse } from 'axios'
import { Action } from 'redux'

// --- Actions ---
export interface LoginAction<T> extends Action<T> {
  response: AxiosResponse
}

// --- State ---
export interface LoginState {
  readonly user: any
}
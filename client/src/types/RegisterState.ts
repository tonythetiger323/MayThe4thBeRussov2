import { AxiosResponse } from 'axios'
import { Action } from 'redux'

// --- Actions ---
export interface RegisterAction<T> extends Action<T> {
  response: AxiosResponse
}

// --- State ---
export interface RegisterState {
  readonly user: any
}

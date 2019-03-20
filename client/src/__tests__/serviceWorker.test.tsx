import { isLocalhost } from '../serviceWorker'

describe('isLocalHost', () => {
  it('should be true if development', () => {
    if (process.env.NODE_ENV === 'development') {
      expect(isLocalhost).toEqual(true)
    }
  })
})

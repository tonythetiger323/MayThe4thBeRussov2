export const mockSomethingCrispy = jest.fn()
const mock = jest.fn().mockImplementation(() => {
  return { SomethingCrispy: mockSomethingCrispy }
})
export default mock

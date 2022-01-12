/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react'

import Home from '../pages/index'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        totalPrice: '0',
        data: [],
      }),
  } as any)
)

describe('Home page', () => {
  it('should render correctly', () => {
    render(<Home />)
  })
})

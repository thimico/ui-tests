
import React from 'react';
import { render, fireEvent, waitForElement, wait, getByAltText } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import { App } from '../app'
import { getGifts } from '../api'

jest.mock('../api')

afterEach(() => {
  jest.resetAllMocks()
});

test('gets images by default value and display result from mocked web API', async () => {
  const mockData = {
    data: [
      {
        id: 1,
        title: 'Test image 1',
        images: {
          preview_gif: {
            url: 'source url'
          }
        }
      },
      {
        id: 2,
        title: 'Test image 2',
        images: {
          preview_gif: {
            url: 'source url'
          }
        }
      }
    ]
  }

  getGifts.mockResolvedValueOnce({data: mockData})

  const {getByTestId, getByText, queryAllByAltText, getAllByAltText} = render(<App />)
  const queryInput = getByTestId('query-input')
  
  fireEvent.keyPress(queryInput, { key: 'Enter', code: 13 })

  expect(queryInput.value).toEqual('dog')
  expect(getGifts).toHaveBeenCalledTimes(1)
  expect(getByText(/Loading.../i)).toBeInTheDocument();

  const images = await waitForElement(() => getAllByAltText(/test image */i))

  // OR
  // await wait()
  // const images = queryAllByAltText(/test image */i)

  
  expect(images.map(img => img.title)).toEqual(['Test image 1', 'Test image 2'])
})

test('gets images by defined value and display result from mocked web API', async () => {
  const mockData = {
    data: [
      {
        id: 1,
        title: 'Test image 1',
        images: {
          preview_gif: {
            url: 'source url'
          }
        }
      },
      {
        id: 2,
        title: 'Test image 2',
        images: {
          preview_gif: {
            url: 'source url'
          }
        }
      }
    ]
  }

  const query = 'cat'
  getGifts.mockResolvedValueOnce({data: mockData})

  const {getByTestId, getByText, getAllByAltText} = render(<App />)
  const queryInput = getByTestId('query-input')
  
  fireEvent.change(queryInput, {target: {value: query}})
  fireEvent.keyPress(queryInput, { key: 'Enter', code: 13 })

  expect(queryInput.value).toEqual(query)
  expect(getGifts).toHaveBeenCalledTimes(1)
  expect(getByText(/Loading.../i)).toBeInTheDocument();

  const images = await waitForElement(() => getAllByAltText(/test image */i))

  expect(images.map(img => img.title)).toEqual(['Test image 1', 'Test image 2'])
})

test('an error is rendered if there is problem getting a list of gifts', async () => {
  getGifts.mockRejectedValueOnce({})

  const {getByText, getByTestId} = render(<App />)
  const queryInput = getByTestId('query-input')

  fireEvent.keyPress(queryInput, { key: 'Enter', code: 13 })

  expect(getGifts).toHaveBeenCalledTimes(1)
  expect(getByText(/loading/i)).toBeInTheDocument();

  await wait(() => expect(getByText(/something went wrong/i)).toBeInTheDocument())
})

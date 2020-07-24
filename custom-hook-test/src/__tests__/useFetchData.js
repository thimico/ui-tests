import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useFetchData } from "../hooks";

describe('useFetchData', () => {
	test('gets data from web API', async() => {
		const initialValue = {data: []};
		const mock = new MockAdapter(axios);
	
		const mockData = {data: ['response', 'with', 'list', 'of', 'data']};
		const url = 'http://mock_url';
		mock.onGet(url).reply(200, mockData);
	
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchData(url, initialValue)
		);
		
		expect(result.current[0].isLoading).toBeTruthy();
		expect(result.current[0].data).toEqual({data: []});
		
		await waitForNextUpdate();
	
		expect(result.current[0].isLoading).toBeFalsy();
		expect(result.current[0].data).toEqual({data: ['response', 'with', 'list', 'of', 'data']});
	});
	
	test('returns loading to false and error notification to true when network error occurs', async() => {
		const initialValue = {data: []};
		const mock = new MockAdapter(axios);
	
		const url = 'http://mock_url';
		mock.onGet(url).networkError();
	
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchData(url, initialValue)
		);
	
		expect(result.current[0].data).toEqual({data: []});
		expect(result.current[0].isLoading).toBeTruthy();
	
		await waitForNextUpdate();
	
		expect(result.current[0].isLoading).toBeFalsy();
		expect(result.current[0].isError).toBeTruthy();
	});
});

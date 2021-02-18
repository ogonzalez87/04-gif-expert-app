import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";

import { renderHook } from "@testing-library/react-hooks";

describe("Test on hook useFetchGifs", () => {
  test("should return initial state", async() => {
    const { result ,waitForNextUpdate} = renderHook(() => useFetchGifs("One Punch"));

    const { data, loading } = result.current;

    await waitForNextUpdate();
    console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should should return img array', async() => {
    const { result,waitForNextUpdate } = renderHook(() => useFetchGifs("One Punch"));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })
  
});

//npm install --save-dev @testing-library/react-hooks

import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";

import { renderHook } from "@testing-library/react-hooks";

describe("Test on hook useFetchGifs", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    const { data, loading } = result.current;
    console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});

//npm install --save-dev @testing-library/react-hooks

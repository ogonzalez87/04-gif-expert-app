import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("GifGrid test", () => {
  const category = "goku";
  // test("should load component", () => {
  //   const gifs = [
  //     {
  //       id: "adc",
  //       url: "google.com",
  //       title: "cosa",
  //     },
  //   ];

  //   useFetchGifs.mockReturnValue({});
  //   const wrapper = shallow(<GifGrid category={category} />);
  //   expect(wrapper).toMatchSnapshot();
  // });

  test("should  show items on useFetchGifs", () => {
    // const gifs = [
    //   {
    //     id: "adc",
    //     url: "google.com",
    //   },
    // ];

    // useFetchGifs.mockReturnValue({});
    // const wrapper = shallow(<GifGrid category={category} />);
    // expect(wrapper.find("p").exists()).toBe(false);
  });
});

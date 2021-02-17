import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
const title = "Un título";
const url = "https://google.com";
const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe("<GifGridItem/>", () => {
  test("should load commponent", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have tittle", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test('should have img with src and alt', () => {
    const img= wrapper.find('img');

    
  })
  
});

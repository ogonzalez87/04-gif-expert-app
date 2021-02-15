import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("<GifGridItem/>", () => {
  test("should load commponent", () => {
    const wrapper = shallow(<GifGridItem />);

    expect(wrapper).toMatchSnapshot();
  });
});

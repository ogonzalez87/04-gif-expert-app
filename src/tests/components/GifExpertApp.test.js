import React from "react"; 
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifExpertApp } from "../../GifExpertApp";

describe("GifExpertApp", () => {
  test("should match snapshoot", () => {
    const wrapper = shallow(<GifExpertApp   />);

    expect(wrapper).toMatchSnapshot();
  });
});

test('should show categories list', () => {
    const categories = [ 'One Pounch', 'Goku'];
    const wrapper = shallow(<GifExpertApp defaultCategories = {categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length)

})

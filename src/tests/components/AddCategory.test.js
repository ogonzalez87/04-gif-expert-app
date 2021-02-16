import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
describe("AddCategory", () => {
  const setCategories = () => {};
  test("should be showed correctly", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    expect(wrapper).toMatchSnapshot();
  });
});

import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
describe("AddCategory", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);
  test("should be showed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should evaluate changes of the text box", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value)

    
  });
});

import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
describe("AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("should be showed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should evaluate changes of the text box", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("should not post the info on submmit", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {
        console.log("handleSubmit");
      },
    });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and clean the text box", () => {
    const textbox = wrapper.find("input");
    textbox.simulate("change", { target: { value: "Goku" } });

    // simular inputChange
    // simular el submit
    wrapper.find("form").simulate("submit", {
      preventDefault() {
        // console.log(textbox.html());
      },
    });
    // setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled();

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // el valor del imput debe de estar vacio

    expect(textbox.text()).toBe("");
  });
});

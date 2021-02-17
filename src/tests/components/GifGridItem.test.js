import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
const title = "Un título";
const url = "https://google.com";
const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe("<GifGridItem/>", () => {
  const title = "Un titulo";
  const url = "google.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should load commponent", () => {
    expect(wrapper).toMatchSnapshot();
  });
<<<<<<< HEAD

  test("should have tittle", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
=======

  test("should work p", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });
  test("should work img", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should have fadein", () => {
    const div = wrapper.find("div");

    // console.log( div.html()); 

    const className = div.prop("className");

    expect(className.includes("animate__bounce")).toBe(true);
>>>>>>> f08c3ee30ceb030fc5ed63dac3c9031de4155439
  });

  test('should have img with src and alt', () => {
    const img= wrapper.find('img');

    
  })
  
});

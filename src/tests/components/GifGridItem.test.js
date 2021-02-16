import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("<GifGridItem/>", () => {
  const title = "Un titulo";
  const url = "google.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should load commponent", () => {
    expect(wrapper).toMatchSnapshot();
  });

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
    console.log(div.prop("className"));

    const className = div.prop("className");

    expect(className.includes("animate__bounce")).toBe(true);
  });
});

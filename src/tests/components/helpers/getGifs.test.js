import { shallow } from "enzyme";
import { getGifs } from "../../../helpers/getGifs";

describe("Test helpers getGifs Fetch", () => {
  const wrapper = shallow(<getGifs />);

  test("should load getGifs with 10 elements", async () => {
    const gifs = await getGifs("Goku");

    expect(gifs.length).toBe(10);
  });

  test("should not load getGifs with 10 elements", async () => {
    const gifs = await getGifs("");

    console.log(gifs);

    expect(gifs.length).toBe(0);
  });
});

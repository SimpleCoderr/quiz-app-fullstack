import { getKeyFromValue } from "../lib/getKeyFromValue"

const countries: any = {
    Russia: "Moscow",
    Hungry: "Budapesht",
    France: "Paris"
}

test('find Russia key by Moscow value', () => {
    expect(getKeyFromValue(countries, "Moscow")).toBe("Russia")
})
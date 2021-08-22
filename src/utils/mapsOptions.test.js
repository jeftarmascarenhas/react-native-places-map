const mapsOptions = require("./mapsOptions")
// @ponicode
describe("mapsOptions.default.placeUrlParser", () => {
    test("0", () => {
        let callFunction = () => {
            mapsOptions.default.placeUrlParser("and Sons", 1234567890123456789012345678901234567890)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapsOptions.default.placeUrlParser("and Sons", "someRandomApiKey")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapsOptions.default.placeUrlParser("and Sons", "zaCELgL. 0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapsOptions.default.placeUrlParser("Inc", "someRandomApiKey")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapsOptions.default.placeUrlParser("Inc", 1234567890123456789012345678901234567890)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapsOptions.default.placeUrlParser(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

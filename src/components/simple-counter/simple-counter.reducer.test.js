const rewire = require("rewire")
const simple_counter_reducer = rewire("./simple-counter.reducer")
const initialState = simple_counter_reducer.__get__("initialState")
// @ponicode
describe("initialState", () => {
    test("0", () => {
        let callFunction = () => {
            initialState()
        }
    
        expect(callFunction).not.toThrow()
    })
})

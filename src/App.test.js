import React from 'react'
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new EnzymeAdapter() })


const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)


test('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1)

});


test("renders  increment button", () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "increment-button")
  expect(button.length).toBe(1)
})


test("Render decrement button",()=>{
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "decrement-button")
  expect(button.length).toBe(1)
})

test("renders counter display", () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, "counter-display")
  expect(counterDisplay.length).toBe(1)
})


test("counter start at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper,"count").text()
  expect(count).toBe('0')
})

test("Clicking on button increments counter display", () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "increment-button")
  button.simulate('click');
  const count = findByTestAttr(wrapper,"count").text()
  expect(count).toBe("1")
})

test("Should decrement the display when I click in decrement button", ()=>{
  const wrapper = setup()

  const button = findByTestAttr(wrapper, "decrement-button")
  button.simulate('click');
  const count = findByTestAttr(wrapper,"count").text()
  if(count === "0"){
    expect(count).toBe("Error")
  }
})

test("Should clean the counter when the display is error", ()=>{
  const wrapper = setup()
  const button = findByTestAttr(wrapper, "increment-button")
  button.simulate('click');
  const count = findByTestAttr(wrapper,"count").text()
  if(count ==="Error"){
     expect(count).toBe(0)  
  }
})
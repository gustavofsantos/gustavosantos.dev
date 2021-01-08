import { RadioGroup } from './radio'

const Wrapper = ({ children }) => (
  <div className="p-4 border border-gray-200 rounded">{children}</div>
)

export const DemoGuitar = () => (
  <Wrapper>
    <RadioGroup onSelect={console.log}>
      <h3 className="text-gray-700 text-lg mb-4">
        Choose your ultimate instrument
      </h3>

      <RadioGroup.Item id="acoustic_guitar">Acoustic Guitar</RadioGroup.Item>
      <RadioGroup.Item id="electric_guitar">Electric Guitar</RadioGroup.Item>
    </RadioGroup>
  </Wrapper>
)

export const DemoGeneric = () => (
  <Wrapper>
    <RadioGroup onSelect={console.log}>
      <h3 className="text-gray-700 text-lg mb-4">Choose your option</h3>

      <RadioGroup.Item id="one">
        <span className="text-red-600">Option one</span>
      </RadioGroup.Item>
      <RadioGroup.Item id="two">
        <span className="text-green-700">Option two</span>
      </RadioGroup.Item>
      <p className="text-gray-600 pt-2 pb-2">Some message</p>
      <RadioGroup.Item id="ultimate">
        <span className="text-purple-800 underline">Ultimate option</span>
      </RadioGroup.Item>
    </RadioGroup>
  </Wrapper>
)

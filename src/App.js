import React, { useState, useCallback } from "react";
import Portal from "./Portal";
import Tabs from "./Tabs";
import "./styles.css";

const Search = ({ onChange, counter }) => {
  const [value, setValue] = useState("");
  const handleChange = useCallback(
    ({ target: { value } }) => {
      setValue(value);
      onChange(value);
    },
    [setValue, onChange]
  );
  return (
    <>
      <input value={value} onChange={handleChange} className="m-b-1" />
      <h1>input value inside portal {value}</h1>
      <h1>counter value inside portal {counter}</h1>
    </>
  );
};

Search.defaultProps = {
  onChange: f => f
};

const One = ({ portalRef }) => {
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(0);
  const handleIncrement = useCallback(() => {
    setCounter(currentValue => currentValue + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    setCounter(currentValue => currentValue - 1);
  }, []);
  return (
    <>
      {portalRef && (
        <Portal mountNode={portalRef}>
          <h2>Start typing to see the magic happen!</h2>
          <Search counter={counter} onChange={setInputValue} />
        </Portal>
      )}
      <h1>one</h1>
      <div>one is active</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <h1>input value outside portal {inputValue}</h1>
      <h1>counter value outside portal {counter}</h1>
    </>
  );
};

const Two = () => (
  <>
    <h1>two</h1>
    <div>two is active</div>
  </>
);

const Header = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <h1>Hello CodeSandbox</h1>
  </div>
));

export default function App() {
  const [ref, setRef] = useState();
  return (
    <div className="App">
      <Header ref={setRef} />
      <Tabs initllActive={1}>
        <Tabs.Tab value={1}>one</Tabs.Tab>
        <Tabs.Tab value={2}>two</Tabs.Tab>
        <Tabs.Content when={1}>
          <One portalRef={ref} />
        </Tabs.Content>
        <Tabs.Content when={2}>
          <Two />
        </Tabs.Content>
      </Tabs>
    </div>
  );
}

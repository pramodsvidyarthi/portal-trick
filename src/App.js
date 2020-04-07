import React, { useState } from "react";
import Portal from "./Portal";
import Tabs from "./Tabs";
import "./styles.css";

const One = ({ portalRef }) => {
  const [value, setValue] = useState();
  return (
    <>
      <Portal mountNode={portalRef}>
        <h2>Start typing to see the magic happen!</h2>
        <input
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          className="m-b-1"
        />
      </Portal>
      <h1>one</h1>
      <div>one is active</div>
      {value}
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
  const [portalRef, setRef] = useState();
  return (
    <div className="App">
      <Header ref={setRef} />
      <Tabs initllActive={2}>
        <Tabs.Tab value={1}>one</Tabs.Tab>
        <Tabs.Tab value={2}>two</Tabs.Tab>
        <Tabs.Content when={1}>
          <One portalRef={portalRef} />
        </Tabs.Content>
        <Tabs.Content when={2}>
          <Two />
        </Tabs.Content>
      </Tabs>
    </div>
  );
}

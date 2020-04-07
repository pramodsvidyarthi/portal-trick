import React, { useState, useContext } from "react";

const TabContext = React.createContext();

const Tabs = ({ children, initllActive }) => {
  const [activeTab, setActiveTab] = useState(initllActive);

  return (
    <TabContext.Provider value={[activeTab, setActiveTab]}>
      {children}
    </TabContext.Provider>
  );
};

const Tab = ({ children, value }) => {
  const [activeTab, setActiveTab] = useContext(TabContext);
  const isActive = activeTab === value;
  return (
    <>
      <button
        onClick={() => setActiveTab(value)}
        className={isActive ? "active" : ""}
      >
        {children}
      </button>
    </>
  );
};

const Content = ({ children, when }) => {
  const [activeTab] = useContext(TabContext);
  const isActive = activeTab === when;
  return isActive ? children : null;
};

Tabs.Tab = Tab;
Tabs.Content = Content;

export default Tabs;

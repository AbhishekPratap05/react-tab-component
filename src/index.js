import React from "react";
import ReactDOM from "react-dom";

import Tabs, { TabList, Tab, TabPanels, TabPanel } from "./Tabs";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab A</Tab>
        <Tab>Tab B</Tab>
        <Tab isDisabled>Tab C</Tab>
        <Tab active>Tab D</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          This is tab A{" "}
          <span role="img" aria-label="Rocket ship">
            🚀
          </span>
        </TabPanel>
        <TabPanel>
          This is tab B{" "}
          <span role="img" aria-label="Diamond">
            💎
          </span>
        </TabPanel>
        <TabPanel>
          This is tab C{" "}
          <span role="img" aria-label="Ghost">
            👻
          </span>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Tab A</Tab>
              <Tab>Tab B</Tab>
              <Tab isDisabled>Tab C</Tab>
              <Tab>Tab D</Tab>
              <Tab active>Tab E</Tab>
              <Tab>Tab F</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                This is tab A{" "}
                <span role="img" aria-label="Rocket ship">
                  🚀
                </span>
              </TabPanel>
              <TabPanel>
                This is tab B{" "}
                <span role="img" aria-label="Diamond">
                  💎
                </span>
              </TabPanel>
              <TabPanel>
                This is tab C{" "}
                <span role="img" aria-label="Ghost">
                  👻
                </span>
              </TabPanel>
              <TabPanel>
                This is tab D{" "}
                <span role="img" aria-label="Smile">
                  😄
                </span>
              </TabPanel>
              <TabPanel>
                This is tab E{" "}
                <span role="img" aria-label="Building">
                  🏗
                </span>
              </TabPanel>
              <TabPanel>
                This is tab F{" "}
                <span role="img" aria-label="Skull">
                  💀
                </span>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

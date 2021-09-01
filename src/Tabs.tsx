import * as React from "react";
import { DISABLE_TAB, TAB, ACTIVE_TAB, TAB_LAYOUT } from "./TabStyle";

//Wraps all tabs
export interface TabListProps {
  activeIndex?: number;
  onActivateTab?: (index: number) => void;
}

export class TabList extends React.Component<TabListProps, {}> {
  render() {
    const { activeIndex } = this.props;
    const children: any = React.Children.map(
      this.props.children,
      (child, index) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          isActive: index === activeIndex,
          onActivate: () => {
            if (this.props.onActivateTab) this.props.onActivateTab(index);
          }
        });
      }
    );
    return <div style={TAB_LAYOUT}>{children}</div>;
  }
}

//This creates tabs
export interface TabProps {
  isActive?: number;
  isDisabled?: boolean;
  onActivate?: () => void;
}

export class Tab extends React.Component<TabProps, {}> {
  render() {
    const isActive = this.props.isActive;
    const isDisable = this.props.isDisabled;
    const style: React.CSSProperties = isDisable
      ? { ...TAB, ...DISABLE_TAB }
      : isActive
      ? { ...TAB, ...ACTIVE_TAB }
      : TAB;
    return (
      <div
        style={style}
        onClick={() => {
          if (this.props.onActivate)
            if (!this.props.isDisabled) this.props.onActivate();
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

//Wraps all the panel
export interface TabPanelsProps {
  activeIndex?: number;
}

export class TabPanels extends React.Component<TabPanelsProps, {}> {
  render() {
    const activeIndex: any = this.props.activeIndex;
    const TabPanels: any = this.props.children;
    return <div>{TabPanels[activeIndex]}</div>;
  }
}

//This creates panels and shows only active panel(sent by TabPanels)
export class TabPanel extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

//Wraps TabList and TabPanels ans stores the active-panel index.
export interface TabsState {
  activeIndex: number;
}
export default class Tabs extends React.Component<{}, TabsState> {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  render() {
    const children = React.Children.map(this.props.children, (child: any) => {
      if (child.type === TabPanels) {
        return React.cloneElement(child as React.ReactElement<any>, {
          activeIndex: this.state.activeIndex
        });
      } else if (child.type === TabList) {
        return React.cloneElement(child as React.ReactElement<any>, {
          activeIndex: this.state.activeIndex,
          onActivateTab: (activeIndex: number) => {
            this.setState({ activeIndex });
          }
        });
      } else {
        return child;
      }
    });
    return <div>{children}</div>;
  }
}

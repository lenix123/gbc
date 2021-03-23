import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlCenter.scss';
import Tabs from "./Tabs.js";
import StyleMenu from "./StyleMenu";

class ControlCenter extends Component {
    state = {
        currentTab: "Style",
    }

    render() {
        return(
            <div className="control-center">
                <Tabs currentTab={this.currentTab()}
                      switchTab={this.switchTab}/>
                <StyleMenu/>
            </div>
        )
    }

    switchTab = (tabName) => {
        this.setState({
            currentTab: tabName,
        })
    }

    currentTab = () => {
        return this.state.currentTab;
    }
}

export default ControlCenter;

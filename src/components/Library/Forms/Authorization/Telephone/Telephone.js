import React, {Component} from "react";
import "../Login.css"
import StyleReader from "../../../../../utils/StyleReader";
import {phoneinput} from "./phoneinput";
import {phoneKeyDown} from "./phoneinput";
import {phonePaste} from "./phoneinput";

class Telephone extends Component {
    state = {
        value: ""
    }

    render() {
        const {componentsState, componentWithSync} = this.props;
        const condition = this.state.value === '' ? '' : 'filled'
        let componentStyle;

        if (componentWithSync) {
            componentStyle = componentsState && componentsState[componentWithSync];
        } else {
            componentStyle = componentsState && componentsState["Telephone"];
        }

        const styleReader = new StyleReader(componentStyle);
        const label = this.props.children || "Telephone";

        return (
            <form className={styleReader.userClassName + "login__group"}>
                <input type="tel"
                       id={"data-tel-input"}
                       className={"login__input"}
                       style={styleReader.style}
                       placeholder=''
                       onChange={this.handleChange}
                       onPaste={this.onPhonePaste}
                       onKeyDown={this.onPhoneKeyDown}
                       value={this.state.value}
                       maxLength={18} />
                {/*<InputMask mask="+7 (999) 999-99-99"*/}
                {/*           type="tel"*/}
                {/*           className={"login__input"}*/}
                {/*           style={styleReader.style}*/}
                {/*           placeholder=""*/}
                {/*           onChange={this.handleChange}*/}
                {/*           value={this.state.value}/>*/}
                <label className={`login__label login__label_${condition}`}>{label}</label>
            </form>
        )
    }

    handleChange = (event) => {
        phoneinput(event);
        this.setState({
            value: event.target.value
        })
    }

    onPhoneKeyDown = (event) => {
        phoneKeyDown(event);
        this.setState({
            value: event.target.value
        })
    }

    onPhonePaste = (event) => {
        phonePaste(event);
        this.setState({
            value: event.target.value
        })
    }
}

export default Telephone;
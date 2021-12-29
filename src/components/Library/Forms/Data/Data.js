import React, {Component} from "react";
import "./Data.css";
import StyleReader from "../../../../utils/StyleReader";
import InputMask from "react-input-mask";
// import {maskForData} from "./mask";
// import {getTypeForm} from "./mask";


class Data extends Component {
    state = {
        value: '',
        type: 'text',
    }

    render() {
        const {componentsState, className, formMask, formPlaceholder, id} = this.props;
        const componentStyle = componentsState && componentsState["Data"];
        let styleReader = new StyleReader(componentStyle);

        const mask = formMask || componentStyle["mask"] || "99/99/9999";
        const placeholder = formPlaceholder || componentStyle["text"] || "Date";

        return (
            // <input type={this.state.type}
            //        placeholder={placeholder}
            //        className={className + " dataInput"}
            //        style={styleReader.style}
            //        onChange={this.handleChange}
            //        value={this.state.value} />
            <InputMask mask={mask}
                       id={id}
                       placeholder={placeholder}
                       className={className + " dataInput"}
                       style={styleReader.style}
                       onChange={this.handleChange}
                       value={this.state.value}/>
        );
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
        if (this.props.onChange) {
            this.props.onChange()
        }
    }
}

export default Data;
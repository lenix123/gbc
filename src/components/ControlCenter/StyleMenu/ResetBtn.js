import React, { Component } from 'react';
import '../../../assets/css/ControlCenter/ResetBtn.scss'
import { faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {resetComponentStyles} from "../../../store/libraryState/actions";
import {connect} from "react-redux";


class ResetBtn extends Component {
    state = {
        isActive: false,
    }

    render () {
        const condition = this.isActive() ? 'active' : 'false';
        // иконки корзины и галочки кнопки
        const trashIcon = <FontAwesomeIcon className={`reset-btn__trash-icon`} icon={faTrashAlt}/>
        const checkIcon = <FontAwesomeIcon className={`reset-btn__check-icon`} icon={faCheck}/>

        return (
            <button className={`reset-btn reset-btn_${condition}`}
                    onClick={this.handleClick}>
                <span>RESET</span>
                <div className="reset-btn__wrapper">
                    {trashIcon}
                    {checkIcon}
                </div>
            </button>
        )
    }

    // обработчик клика по кнопке
    handleClick = (e) => {
        // предупредить поведение по умолчанию
        e.preventDefault();

        // если по кнопке недавно нажимали, то ничего не предпринимать
        if ( this.isActive() ) return null;
        // в ином случае сбросить стили компонента
        const { resetComponentStyles, componentName } = this.props;
        resetComponentStyles(componentName)

        // сделать кнопку временно активной (нажатой)
        this.setState({
            isActive: true
        })

        // через 2 секунды возвратить кнопку в начальное состояние
        setTimeout(() => {
            this.setState({
                isActive: false,
            })
        }, 2000);
    }

    isActive = () => {
        return this.state.isActive
    }
}

const mapStateToProps = (state) => {
    return {
        componentName: state.currentComponent.componentName
    }
}

const mapDispatchToProps = {
    resetComponentStyles
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetBtn);

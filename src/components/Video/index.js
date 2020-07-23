import React from 'react';
import {  connect } from 'react-redux';

// import { Container } from './styles';


const SideBar = ({activeModule, activeLesson}) => {
    return (
        <div>
            <strong> Module {activeModule.title}</strong>
            <br/>
            <span> Lesson {activeLesson.title}</span>
            <br/>
            <br/>
        </div>
    );
}

export default connect(state =>({
    activeLesson : state.course.activeLesson,
    activeModule : state.course.activeModule,
}))(SideBar);
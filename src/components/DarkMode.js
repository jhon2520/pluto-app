import React from 'react'
import { useDispatch } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../actions/ui.action';

const DarkMode = () => {

    const dispatch = useDispatch();

    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if(localStorage){
        theme = localStorage.getItem("theme")
    }

    if(theme === lightTheme || theme === darkTheme){
        body.classList.add(theme)
    }else{
        body.classList.add(lightTheme)
    }


    const switchTheme = (e)=>{
        if(theme === darkTheme){
            body.classList.replace(darkTheme,lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme","light");
            theme = lightTheme;
            dispatch(setLightTheme())
        }else{
            body.classList.replace(lightTheme,darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme","dark");
            theme = darkTheme
            dispatch(setDarkTheme())
        }
    }


    return (
        <button
            className={theme==="dark" ? clickedClass : ""}
            id="darkMode"
            onClick={switchTheme}
        >Dark mode</button>
    )
}

export default DarkMode
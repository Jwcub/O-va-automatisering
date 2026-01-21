"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const selectedTheme = document.getElementById("theme-select");
    const root = document.documentElement;

    selectedTheme.addEventListener("change", () => {
        localStorage.setItem('theme', `${selectedTheme.value}`);
        root.style.colorScheme = `${selectedTheme.value}`;
    })

    let storedTheme = localStorage.getItem('theme');

    if(storedTheme == "light") {
        root.style.colorScheme = "light";
        selectedTheme.value = "light";
    }
    else if(storedTheme == "dark") {
        root.style.colorScheme = "dark";
        selectedTheme.value = "dark";
    }
    else  {
        root.style.colorScheme = "light dark";
        selectedTheme.value = "light dark";
    }

});

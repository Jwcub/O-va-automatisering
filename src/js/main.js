"use strict";

let allCourses = [];

document.addEventListener("DOMContentLoaded", async () => {
    getData();
    pageTheme();

    // Händelselyssnare sortering
    document.getElementById("course-code").addEventListener("click", () => {
        const sortByCode = [...allCourses].sort((a, b) => a.code.localeCompare(b.code));
        displayCourses(sortByCode);
    });
    document.getElementById("course-name").addEventListener("click", () => {
        const sortByName = [...allCourses].sort((a, b) => a.coursename.localeCompare(b.coursename));
        displayCourses(sortByName);
    });
    document.getElementById("course-progression").addEventListener("click", () => {
        const sortByProgression = [...allCourses].sort((a, b) => a.progression.localeCompare(b.progression));
        displayCourses(sortByProgression);
    });

    // Händelselyssnare sökfält
    document.getElementById("search-courses").addEventListener("input", searchCourse);
});

async function getData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json";

    // Anopa och läs ut kursdata
    try {
        const response = await fetch(url);
        const courses = await response.json();

        // Lagra alla kurser globalt
        allCourses = courses;

        displayCourses(courses);

    } catch(error) {
        console.error("Fel " + error)
    }
}

function displayCourses(courses) {

    const courseTableEl = document.getElementById("course-tbody");
    courseTableEl.innerHTML = "";

    // Loopa genom alla kurser och skriv ut
    courses.forEach(course => {
        courseTableEl.innerHTML += `
            <tr>
                <td>${course.code}</td>
                <td>${course.coursename}</td>
                <td>${course.progression}</td>
            </tr>
        `;
    });
}

function searchCourse() {
    let searchPhrase = document.getElementById("search-courses").value;
    let searchResult = allCourses.filter((course) => 
        course.coursename.toLowerCase().includes(searchPhrase) ||
        course.code.toLowerCase().includes(searchPhrase)
    );
    
    displayCourses(searchResult)
}
 
function pageTheme() {
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
}



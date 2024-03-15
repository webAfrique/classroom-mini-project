import {getSumGrades, getPassingGrades, getFailingGrades, getNumberOfGrades, getAverageValue, getRaisedGrades} from "./classroom.ts";

const gradesForm = document.querySelector("#grades-form") as HTMLFormElement;
const yourGrade = document.querySelector("#your-grade") as HTMLInputElement;

const grades = [12, 19, 10, 4, 15, 9];

const renderStats2Table = (grades: number[]) => {
    const tbody = document.querySelector("#stats-table2 tbody") as HTMLElement;
    tbody.innerHTML = `<tr>
        <td>${getPassingGrades(grades)}</td>
        <td>${getFailingGrades(grades)}</td>
        <td>${getRaisedGrades(grades)}</td>
    </tr>`;
}

const renderStatsTable = (grades: number[]) => {
    const tbody = document.querySelector("#stats-table tbody") as HTMLElement;
    tbody.innerHTML = `<tr>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getSumGrades(grades)}</td>
        <td>${getAverageValue(grades)}</td>
    </tr>`;
}

const render = (grades: number[]) => {
    console.log("Grades: " + grades.join(', '));
    renderStatsTable(grades);
    renderStats2Table(grades);
}

gradesForm.addEventListener("submit", event => {
    event.preventDefault();
    const newGrade = Number.parseInt(yourGrade.value, 10);
    grades.push(newGrade);
    yourGrade.value = "";
    render(grades);
});

render(grades);
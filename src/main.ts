import { getSumGrades, getPassingGrades, getFailingGrades, getNumberOfGrades, getAverageValue, getRaisedGrades } from "./classroom";

const gradesForm = document.querySelector("#grades-form") as HTMLFormElement;
const mathGrade = document.querySelector("#math-grade") as HTMLInputElement;
const englishGrade = document.querySelector("#english-grade") as HTMLInputElement;
const physicsGrade = document.querySelector("#physics-grade") as HTMLInputElement;
const biologyGrade = document.querySelector("#biology-grade") as HTMLInputElement;

let grades: number[] = [];

const renderStats2Table = (grades: number[]) => {
    const tbody = document.querySelector("#stats-table2 tbody") as HTMLElement;
    tbody.innerHTML = `<tr>
        <td>${getPassingGrades(grades).join(', ')}</td>
        <td>${getFailingGrades(grades).join(', ')}</td>
        <td>${getRaisedGrades(grades).join(', ')}</td>
    </tr>`;
}

const renderStatsTable = (grades: number[]) => {
    const tbody = document.querySelector("#stats-table tbody") as HTMLElement;
    tbody.innerHTML = `<tr>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getSumGrades(grades)}</td>
        <td>${getAverageValue(grades).toFixed(2)}</td>
    </tr>`;
}

const render = (grades: number[]) => {
    console.log("Grades: " + grades.join(', '));
    renderStatsTable(grades);
    renderStats2Table(grades);
}

gradesForm.addEventListener("submit", event => {
    event.preventDefault();
    const math = Math.min(Number.parseInt(mathGrade.value, 10), 20);
    const english = Math.min(Number.parseInt(englishGrade.value, 10), 20);
    const physics = Math.min(Number.parseInt(physicsGrade.value, 10), 20);
    const biology = Math.min(Number.parseInt(biologyGrade.value, 10), 20);
    grades.push(math, english, physics, biology);
    render(grades);
});

render(grades);

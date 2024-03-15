export function getNumberOfGrades(grades:number[]) {
    return grades.length
}

export function getSumGrades(grades:number[]) {
    return grades.reduce((accumulator:number, currentValue:number) => {
        return accumulator + currentValue
    }, 0)
}

export function getAverageValue(grades:number[]) {
    const length:number = grades.length

    const sum:number = grades.reduce((accumulator:number, currentValue:number) => {
        return accumulator + currentValue
    }, 0)

    const average:number = sum / length
    return average
    
}

export function getPassingGrades(grades:number[]) {
   return grades.filter((grade:number) => grade >= 10)
}


export function getFailingGrades(grades:number[]) {
    return grades.filter((grade:number) => grade < 10)
}

export function getRaisedGrades(grades:number[], topUp = 1) {
    const raisedGrades:number[] = grades.map((grade:number) => {
        const newGrade:number = grade + topUp 
        return newGrade > 20 ? 20 : newGrade
    })
    return raisedGrades
}
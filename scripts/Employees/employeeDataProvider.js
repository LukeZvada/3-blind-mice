let employees = []

export const useEmployees = () => {
    return employees.slice()
}

export const getEmployees = () => { 
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then(
            parsedEmployees => {
                criminals = parsedEmployees
            }
        )
}
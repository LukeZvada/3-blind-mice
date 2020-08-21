let computers = []

const useComputers = () => {
    return computers.slice()
}


export const getComputers = () => { 
    return fetch("http://localhost:8088/database")
        .then(response => response.json())
        .then(
            parsedComputers => {
                criminals = parsedComputers
            }
        )
}



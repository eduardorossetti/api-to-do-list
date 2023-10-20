export default interface Task {
    id: string,
    description: string,
    date: string,
    status: 'completed' | 'in progress'
}

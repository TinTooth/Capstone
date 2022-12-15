const useWorkTime = () => {
    
    const getDaysAhead = (input) => {
        let date = new Date(`${input}T00:00:00`)
        let daysAhead = 6-date.getDay()
        console.log(daysAhead)
        return daysAhead
    }
    
    
    return [getDaysAhead];
}
 
export default useWorkTime;
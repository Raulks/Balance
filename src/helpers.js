export const checkBudget = (budget, left) => {
    
    let clase;

    if ( (budget / 4) > left) {
        clase = 'alert alert-danger'
    } else if ( (budget / 2 ) > left){
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert-success'
    }
    return clase;
}
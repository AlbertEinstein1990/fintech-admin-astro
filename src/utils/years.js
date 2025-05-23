const getYears = startYear => 
{
    let currentYear = new Date().getFullYear(), 
        years = [];
    
    startYear = startYear || 1980;  
    
    while ( startYear <= currentYear ) { years.push(startYear++); }   
    
    return years;
}

export default getYears;
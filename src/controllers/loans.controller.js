const headers = JSON.stringify(['Loan Name', 'Amount (=N=)', 'Interest Rate (%)', 'Tenure (Months)', 'Status', 'Date and Time']);

const specificColumns = JSON.stringify(['loan_name', 'amount', 'interest_rate', 'loan_tenure', 'status', 'date_time'])

const titles = JSON.stringify(['Personal Information', 'Contact Details', 'Employment Details', 'Loan Details', 'Financial Information'])

const maritalStatus = 
[
    { value: 'single', label: 'Single' }, 
    { value: 'married', label: 'Married' }, 
    { value: 'divorced', label: 'Divorced' }
]

const jobLevelOptions = 
[
    { value: "junior", label: "Junior Staff" }, 
    { value: "senior", label: "Senior Staff" }, 
    { value: "management", label: "Management Staff" }
]

const natureOfEmploymentOptions = 
[
    { value: "permanent", label: "Permanent" }, 
    { value: "contract", label: "Contract" }
]

export { headers, specificColumns, titles, maritalStatus, jobLevelOptions, natureOfEmploymentOptions }
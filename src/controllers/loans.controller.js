const headers = JSON.stringify(['Loan Name', 'Amount (=N=)', 'Interest Rate (%)', 'Tenure (Months)', 'Status', 'Date and Time']);

const specificColumns = JSON.stringify(['loan_name', 'amount', 'interest_rate', 'loan_tenure', 'status', 'date_time'])

export { headers, specificColumns }
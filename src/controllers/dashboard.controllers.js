const recentLoans = JSON.stringify(
    [
        { loan_name: 'Social Loan', amount: '300,000.00', interest_rate: 10, loan_tenure: 6, status: '<p style="text-align: center; color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Approved</p>', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { loan_name: 'Salary Advance', amount: '10,000.00', interest_rate: 12, loan_tenure: 12, status: '<p style="text-align: center; color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Approved</p>', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { loan_name: 'Education Loan',  amount: '5,000.00', interest_rate: 11, loan_tenure: 24, status: '<p style="text-align: center; color: red; padding: 0.3rem 1.25rem; background: #fcd9d9; border-radius: 6px">Rejected</p>', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { loan_name: 'Quick Loan', amount: '250,000.00', interest_rate: 15.5, loan_tenure: 1, status: '<p style="text-align: center; color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Approved</p>', date_time: '10 - 03 - 2022 | 09:10 AM' }
    ]
)

const headers = JSON.stringify(
    [
        'Loan Name',
        'Amount (=N=)',
        'Interest Rate (%)',
        'Tenure (Months)',
        'Status',
        'Date and Time'
    ]
)

export { recentLoans, headers }

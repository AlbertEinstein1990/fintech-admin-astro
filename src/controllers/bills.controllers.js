const headers = JSON.stringify(['Biller Name', 'Account Number', 'Amount (USD)', 'Payment Date', 'Payment Method']),
    specificColumns = JSON.stringify(['biller_name', 'biller_account_number', 'amount', 'payment_date', 'payment_method']),
    rowActions = ['view'];


export { headers, specificColumns, rowActions }
const header = JSON.stringify(['Transaction ID', 'Description', 'Transaction Type', 'Amount (USD)', 'Date Created']),
    specificColumns = JSON.stringify(['transaction_id', 'description', 'type_html', 'amount', 'date']);


export { header, specificColumns }
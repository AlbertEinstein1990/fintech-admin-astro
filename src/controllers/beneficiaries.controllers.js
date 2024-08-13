const header = JSON.stringify(['Name', 'Account Number', 'Bank', 'Sort Code', 'Date Created']),
    specificColumns = JSON.stringify(['name', 'account_number', 'bank_name', 'ifsc_code', 'added_date']);


export { header, specificColumns }
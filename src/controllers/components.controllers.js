let languages = 
    [
        { value: 'english', label: 'English' }, 
        { value: 'french', label: 'French' }, 
        { value: 'german', label: 'German' }, 
        { value: 'japanese', label: 'Japanese' }
    ],
    headers = ['Transaction Description', 'Transaction Type', 'Amount (=N=)', 'Status', 'Date and Time'],
    transactions = 
    [
        { id: 1, transaction_description: 'Rent Payment', transaction_type: 'Debit', transaction_type_html: '<span style="color: red;">Debit</span>', amount: '300 000.00', status_html: '<span style="color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Success</span>', status: 'Success', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 2, transaction_description: 'Apple Music Subscription', transaction_type: 'Debit', transaction_type_html: '<span style="color: red;">Debit</span>', amount: '10 000.00', status_html: '<span style="color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Success</span>', status: 'Success', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 3, transaction_description: 'Netflix Subscription', transaction_type: 'Debit', transaction_type_html: '<span style="color: red;">Debit</span>', amount: '5 000.00', status_html: '<span style="color: red; padding: 0.3rem 1.25rem; background: #fcd9d9; border-radius: 6px">Failed</span>', status: 'Failed', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 4, transaction_description: 'Apple Music Subscription', transaction_type: 'Debit', transaction_type_html: '<span style="color: red;">Debit</span>', amount: '5 000.00', status_html: '<span style="color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Success</span>', status: 'Success', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 5, transaction_description: 'Online Shopping', transaction_type: 'Debit', transaction_type_html: '<span style="color: red;">Debit</span>', amount: '5 000.00', status_html: '<span style="color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Success</span>', status: 'Success', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 6, transaction_description: 'Wallet Top Up', transaction_type: 'Credit', transaction_type_html: '<span style="color: green;">Credit</span>', amount: '5 000.00', status_html: '<span style="color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Success</span>', status: 'Success', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 7, transaction_description: 'Netflix Subscription', transaction_type: 'Debit', transaction_type_html: '<span style="color: red;">Debit</span>', amount: '5 000.00', status_html: '<span style="color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Success</span>', status: 'Success', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 8, transaction_description: 'Wallet Top Up', transaction_type: 'Credit', transaction_type_html: '<span style="color: green;">Credit</span>', amount: '5 000.00', status_html: '<span style="color: red; padding: 0.3rem 1.25rem; background: #fcd9d9; border-radius: 6px">Failed</span>', status: 'Failed', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 9, transaction_description: 'Netflix Subscription', transaction_type: 'Debit', transaction_type_html: '<span style="color: red;">Debit</span>', amount: '5 000.00', status_html: '<span style="color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Success</span>', status: 'Success', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 10, transaction_description: 'Netflix Subscription', transaction_type: 'Debit', transaction_type_html: '<span style="color: red;">Debit</span>', amount: '5 000.00', status_html: '<span style="color: red; padding: 0.3rem 1.25rem; background: #fcd9d9; border-radius: 6px">Failed</span>', status: 'Failed', date_time: '10 - 03 - 2022 | 09:10 AM' },
        { id: 11, transaction_description: 'Wallet Top Up', transaction_type: 'Credit', transaction_type_html: '<span style="color: green;">Credit</span>', amount: '250 000.00', status_html: '<span style="color: red; padding: 0.3rem 1.25rem; background: #fcd9d9; border-radius: 6px">Failed</span>', status: 'Failed', date_time: '10 - 03 - 2022 | 09:10 AM' }
    ],
    specificColumns = ['transaction_description', 'transaction_type_html', 'amount', 'status_html', 'date_time'];

export { languages, headers, transactions, specificColumns }
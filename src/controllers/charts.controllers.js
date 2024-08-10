import transactions from '@src/store/transactions.json';

const activitiesLabels = JSON.stringify(['Viewing Accounts', 'Transferring Funds', 'Paying Bills', 'Adding Beneficiary', 'Customer Support']);

const activitiesDataSets = JSON.stringify(
    [
        {
            data: [30, 25, 20, 15, 10], // Example data, replace with actual values
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }
    ]
);

const activitiesChartOptions = JSON.stringify(
    {
        plugins:
        {
            legend: { position: 'right' },
            tooltip: 
            {
                callbacks: 
                {
                    label: function(context) {
                        var label = context.label || '';
                        var value = context.raw || 0;
                        return label + ': ' + value + '%';
                    }
                }
            }
        },
        responsive: true,
        aspectRatio: 2,
        borderRadius: 10
        //maintainAspectRatio: false
    }
);

const monthlyLabels = JSON.stringify(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

const monthlyDataSets = JSON.stringify(
    [
        {
            label: 'Monthly Expenses ($)',
            data: [500, 450, 700, 600, 800, 750, 650, 700, 600, 650, 700, 800], // Example data, replace with actual values
            backgroundColor: 'rgba(246, 241, 253, 0.8)',
            borderColor: '#b891ee',
            borderWidth: 0.5
        }
    ]
);

const monthlyChartOptions = JSON.stringify(
    {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
);

const transactionsLabel = JSON.stringify(transactions.map(transaction => transaction.date))

const transactionsDataSets = JSON.stringify(
    [
        {
            label: 'Credit',
            data: transactions.map(transaction => transaction.type === 'credit' && transaction.amount),
            borderWidth: 1,
            backgroundColor: 'rgba(232, 249, 240, 0.5)'
        },
        {
            label: 'Debit',
            data: transactions.map(transaction => transaction.type === 'debit' && transaction.amount),
            borderWidth: 1,
            backgroundColor: 'rgba(252, 217, 217, 0.5)'
        }
    ]
);

const transactionChartOptions = JSON.stringify(
    {
        responsive: true,
        scales: 
        {
            x: 
            {
                display: true,
                title: 
                {
                    display: true,
                    text: 'Dates'
                }
            },
            y: 
            {
                display: true,
                title: 
                {
                    display: true,
                    text: 'Amount (USD)'
                },
                beginAtZero: true
            }
        },
        elements: 
        { 
            line: 
            {
                tension: 0.5,
                fill: true 
            }
        }
    }
);

export { activitiesLabels, activitiesDataSets, activitiesChartOptions, monthlyLabels, monthlyDataSets, monthlyChartOptions, transactionsLabel, transactionsDataSets, transactionChartOptions }
<genus-chart
    chart-title='Trasnsactions'
    chart-type='line' 
    chart-labels={transactionsLabel}
    chart-datasets={transactionsDataSets}
    chart-options={transactionChartOptions}>
</genus-chart>

<script>
    import 'genus-ui';
    import transactions from '@data/transactions.json';

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
</script>
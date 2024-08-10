<genus-chart
    chart-title='Platform Activities'
    chart-type='doughnut' 
    chart-labels={activitiesLabels}
    chart-datasets={activitiesDataSets}
    chart-options={activitiesChartOptions}>
</genus-chart>

<script>
    import 'genus-ui';

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
</script>
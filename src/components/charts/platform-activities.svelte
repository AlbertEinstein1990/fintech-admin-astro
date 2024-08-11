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
                backgroundColor: ['#2f374c', '#86d182', '#d5e066', '#f77d4c', '#595f70'],
                hoverBackgroundColor: ['#2f374c', '#86d182', '#d5e066', '#f77d4c', '#595f70']
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
<genus-chart
    chart-title='Monthly Expenses'
    chart-type='bar' 
    chart-labels={monthlyLabels}
    chart-datasets={monthlyDataSets}
    chart-options={monthlyChartOptions}>
</genus-chart>

<script>
    import 'genus-ui';

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
</script>
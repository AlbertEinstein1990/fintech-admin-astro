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
                backgroundColor: 
                [
                    '#2f374c', 
                    '#86d182', 
                    '#d5e066', 
                    '#f77d4c', 
                    '#2f374c', 
                    '#86d182', 
                    '#d5e066', 
                    '#f77d4c',
                    '#c3e8c1',
                    '#eaf0b3',
                    '#fbbea6'
                ],
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
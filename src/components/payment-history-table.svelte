<genus-table 
    table-title="Payment History" 
    table-headers={headers} 
    data-source={dataSource} 
    specific-columns={specificColumns}
    row-actions={rowActions}
    key="payment_id"
    anchor-attribute-value="/bills/">
    <div class="filter-controls" slot="filter-controls">
        <button class="filter-button button button--secondary">
            <i class="iconly-Filter icbo"></i>
        </button>
        <button class="add-button button button--primary">Pay Bill</button>
    </div>
</genus-table>

<script>
    import 'genus-ui';

    export let headers;
    export let dataSource;
    export let specificColumns;
    export let rowActions;
</script>
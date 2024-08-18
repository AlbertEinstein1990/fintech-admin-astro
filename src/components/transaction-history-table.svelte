<genus-table table-title="Transactions" table-headers={headers} data-source={transactions} specific-columns={specificColumns} with-pagination>
    <div class="filter-controls" slot="filter-controls">
        <div class="filter-content">
            <button class="filter-button button button--secondary" on:click={toggleModalContent}>
                <i class="iconly-Filter icbo"></i>
            </button>
            <div class="modal-container" class:modal-container--show='{isVisible}'>
                <div class="modal-content">
                    <div class="modal-content__body">
                        <genus-date-picker placeholder-text="Select date" input-icon='svg/calendar.svg' without-label></genus-date-picker>
                        
                        <genus-dropdown class="status-dropdown" placeholder-text="Select transaction type" dropdown-icon='svg/down-arrow.svg' without-label>
                            <genus-dropdown-option option-value="credit">Credit</genus-dropdown-option>
                            <genus-dropdown-option option-value="debit">Debit</genus-dropdown-option>
                        </genus-dropdown>
                    </div>
                    <div class="buttons" slot="actions">
                        <button class="button button--secondary">Reset</button>
                        <button class="button button--primary">Filter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</genus-table>

<script>
    import 'genus-ui';

    let isVisible = false;
    const toggleModalContent = () => { isVisible = !isVisible }

    export let headers;
    export let specificColumns;
    export let transactions;
    //export let tableTitle;
</script>
<genus-table table-title="Your Beneficiaries" table-headers={headers} data-source={beneficiaries} specific-columns={specificColumns} with-pagination>
    <div class="filter-controls" slot="filter-controls">
        <div class="filter-content">
            <button class="filter-button button button--secondary" on:click={toggleModalContent}>
                <i class="iconly-Filter icbo"></i>
            </button>
            <div class="modal-container" class:modal-container--show='{isVisible}'>
                <div class="modal-content">
                    <div class="modal-content__body">
                        <genus-textbox class="search-textbox" placeholder-text="Search by name" input-icon='/svg/profile.svg' without-label></genus-textbox>
                        
                        <genus-textbox class="search-textbox" input-type="number" placeholder-text="Search by account number" input-icon='/svg/number.svg' without-label></genus-textbox>
                    </div>
                    <div class="buttons" slot="actions">
                        <button class="button button--secondary">Reset</button>
                        <button class="button button--primary">Filter</button>
                    </div>
                </div>
            </div>
        </div>

        <button class="button button--primary">Add Beneficiary</button>
    </div>
</genus-table>

<script>
    import 'genus-ui';

    let isVisible = false;
    const toggleModalContent = () => { isVisible = !isVisible }

    export let headers;
    export let beneficiaries;
    export let specificColumns;
</script>
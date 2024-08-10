<div class='card input-card'>
    <div class='card__head'>
        <h4 class='card__head__title'>Date Picker | Default</h4>
    </div>
    <div class='card__body'>
        <genus-date-picker label-text="Select Date" display-position={displayPosition} input-icon='svg/calendar.svg'></genus-date-picker>
    </div>
</div>

<script>
    import 'genus-ui';

    export let displayPosition;
</script>
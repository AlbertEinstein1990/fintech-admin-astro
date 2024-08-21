<genus-step-wizard class="step-wizard" current-step={currentStep} step-titles={titles} direction={direction} display-mode="web">
    <genus-step-content>
        <div class="step-content">
            <div class="top-content">
                <h3 class="content-title">Personal Information</h3>
                <p class="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsum.</p>
            </div>
            
            <div class="bottom-content">
                <form action="" class="action-form step-form personal-detail-form">
                    <genus-textbox label-text="First Name" without-icon></genus-textbox>
                    
                    <genus-textbox label-text="Last Name" without-icon></genus-textbox>
                    
                    <genus-dropdown label-text="ID Type">
                        <genus-dropdown-option option-value="">Select id type</genus-dropdown-option>
                        <genus-dropdown-option option-value="International Passport">International Passport</genus-dropdown-option>
                        <genus-dropdown-option option-value="Driver's Licence">Driver's Licence</genus-dropdown-option>
                        <genus-dropdown-option option-value="National ID">National ID</genus-dropdown-option>
                        <genus-dropdown-option option-value="Voters Card">Voters Card</genus-dropdown-option>
                    </genus-dropdown>

                    <genus-textbox label-text="ID Number" without-icon></genus-textbox>

                    <genus-radiobtn-group 
                        class="marital-statuses" 
                        label-text="Marital Status" 
                        options={maritalStatus}
                        name="marital-status">
                    </genus-radiobtn-group>

                    <genus-date-picker label-text="Date of Birth" input-icon='/svg/calendar.svg'></genus-date-picker>
                </form>
            </div>
        </div>
    </genus-step-content>
    
    <genus-step-content>
        <div class="step-content">
            <div class="top-content">
                <h3 class="content-title">Contact Details</h3>
                <p class="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsum.</p>
            </div>
            
            <div class="bottom-content">
                <form action="" class="action-form step-form employment-detail-form">
                    <genus-textbox label-text='Email' input-type='email' input-icon='/svg/message.svg'></genus-textbox>
                    
                    <genus-textbox label-text="Phone Number" data-pattern="(xxx) xxx xxx xxxx" disallowed-characters="^[a-zA-Z\s!@#%^&*+=._-]+$" input-icon='/svg/phone.svg' format-input></genus-textbox>

                    <genus-dropdown label-text="State of Residence" name="">
                        <genus-dropdown-option option-value="">Select state</genus-dropdown-option>
                        <genus-dropdown-option option-value="State 1">State 1</genus-dropdown-option>
                        <genus-dropdown-option option-value="State 2">State 2</genus-dropdown-option>
                    </genus-dropdown>

                    <genus-dropdown label-text="LGA" name="">
                        <genus-dropdown-option option-value="">Select lga</genus-dropdown-option>
                        <genus-dropdown-option option-value="LGA 1">LGA 1</genus-dropdown-option>
                        <genus-dropdown-option option-value="LGA 2">LGA 2</genus-dropdown-option>
                    </genus-dropdown>

                    <genus-textarea label-text="House Address" input-value="123 Banana Island, Lagos, Nigeria"></genus-textarea>
                </form>
            </div>
        </div>
    </genus-step-content>
    
    <genus-step-content>
        <div class="step-content">
            <div class="top-content">
                <h3 class="content-title">Employment Details</h3>
                <p class="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsum.</p>
            </div>
            
            <div class="bottom-content">
                <form action="" class="action-form step-form kin-detail-form">
                    <genus-textbox label-text="Company Name" input-value="Digisoft Limited" without-icon=""></genus-textbox>
                    
                    <genus-textbox input-type="email" label-text="Company Email" input-value="info@digisoft.com" input-icon="/svg/message.svg"></genus-textbox>
                    
                    <genus-textbox label-text="Phone Number" input-value="+2348056793456" input-icon="/svg/phone.svg"></genus-textbox>
                    
                    <genus-date-picker label-text="Date of Employment" input-value="Monday, 4 December 2023" input-icon="/svg/calendar.svg"></genus-date-picker>
                    
                    <genus-radiobtn-group label-text="Nature of Employment" name="nature" options={natureOfEmploymnet}></genus-radiobtn-group>
                    
                    <genus-dropdown label-text="Job Level">
                        <genus-dropdown-option option-value="">Select level</genus-dropdown-option>
                        {#each jobLevels as jobLevel}
                            <genus-dropdown-option option-value={jobLevel.value}>{jobLevel.label}</genus-dropdown-option>
                        {/each}
                    </genus-dropdown>
                    
                    <genus-textbox label-text="Monthly Salary" input-value="NGN 300,000.00" without-icon></genus-textbox>
                    
                    <genus-textbox label-text="Annual Salary" input-value="NGN 3,600,000" without-icon></genus-textbox>
                </form>
            </div>
        </div>
    </genus-step-content>

    <genus-step-content>
        <div class="step-content">
            <div class="top-content">
                <h3 class="content-title">Loan Details</h3>
                <p class="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsum.</p>
            </div>
            
            <div class="bottom-content">
                <form action="" class="action-form step-form">
                    <genus-textbox label-text='Loan Amount (Min. Amount - USD 200)' input-type='number' input-icon='/svg/number.svg'></genus-textbox>

                    <genus-dropdown label-text='Purpose of Loan'>
                        <genus-dropdown-option option-value=''>Select purpose</genus-dropdown-option>

                        {#each loanPurposes as  loanPurpose}
                            <genus-dropdown-option option-value={loanPurpose}>{loanPurpose}</genus-dropdown-option>
                        {/each}
                    </genus-dropdown>
                    
                    <genus-dropdown label-text='Loan Term' input-value={loanTenure} on:selected={getInterestRate}>
                        {#each loanTenures as  loanTenure}
                            <genus-dropdown-option option-value={loanTenure}>{loanTenure}</genus-dropdown-option>
                        {/each}
                    </genus-dropdown>

                    <genus-textbox label-text="Interest Rate" input-value={interestRate} without-icon></genus-textbox>
                </form>
            </div>
        </div>
    </genus-step-content>
    
    <genus-step-content>
        <div class="step-content">
            <div class="top-content">
                <h3 class="content-title">Financial Information</h3>
                <p class="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsum.</p>
            </div>
            
            <div class="bottom-content">
                <form action="" class="action-form step-form">
                    <genus-dropdown label-text='Bank Name'>
                        <genus-dropdown-option option-value=''>Select purpose</genus-dropdown-option>
                        <genus-dropdown-option option-value='bank-1'>Bank 1</genus-dropdown-option>
                        <genus-dropdown-option option-value='bank-2'>Bank 2</genus-dropdown-option>
                    </genus-dropdown>
                    
                    <genus-textbox label-text="Account Number" input-type='number' input-icon='/svg/number.svg'></genus-textbox>
                    
                    <genus-textbox label-text="BVN" input-type='number' input-icon='/svg/number.svg'></genus-textbox>
                    
                    <genus-textbox label-text="NIN" input-type='number' input-icon='/svg/number.svg'></genus-textbox>
                </form>
            </div>
        </div>
    </genus-step-content>
    
    <div class='step-buttons' slot="step-buttons">
        <button class='previous-button step-button button button--secondary' on:click={goToPrevStep}>Previous</button>    
        <button class='next-button button step-button button--primary' on:click={goToNextStep}>Next</button>
    </div>
</genus-step-wizard>

<script>
    import 'genus-ui';

    let direction = '',
        currentStep = 0,
        steps = 5,
        interestRates = 
        {
            "6 months": '5%',
            "12 months": '4.5%',
            "18 months": '4%',
            "24 months": '3.5%',
            "36 months": '3%',
            "48 months": '2.5%'
        },
        interestRate = '',
        loanTenure = '';

    const goToNextStep = () => 
        {
            if(currentStep !== (steps - 1))
            {
                currentStep += 1;
                direction = 'next';
            }
        },
        goToPrevStep = () => 
        {
            if(currentStep !== 0)
            {
                currentStep -= 1;
                direction = 'prev';
            }
        },
        getInterestRate = e => { interestRate = interestRates[e.detail] || '' };

    export let titles;
    export let maritalStatus;
    export let jobLevels;
    export let natureOfEmploymnet;
    export let loanPurposes;
    export let loanTenures;
</script>
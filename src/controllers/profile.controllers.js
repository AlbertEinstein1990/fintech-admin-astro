const tabNames = JSON.stringify(
    [
        { value: 'personal-details', label: 'Personal Details' },
        { value: 'contact-details', label: 'Contact Details' },
        { value: 'account-information', label: 'Account Information' }
    ]);

const genderOptions = JSON.stringify(
    [
        { value: 'male', label: 'Male' },
        { value: 'famale', label: 'Female' }
    ])

const disabilityOptions = JSON.stringify(
    [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
    ])

export { tabNames, genderOptions, disabilityOptions }
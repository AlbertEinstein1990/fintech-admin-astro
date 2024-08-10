const tabNames = JSON.stringify(
    [
        { value: 'personal-details', label: 'Personal Details' },
        { value: 'contact-details', label: 'Contact Details' },
        { value: 'account-information', label: 'Account Information' }
    ]);

const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'famale', label: 'Female' }
]

const disabilityOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
]

export { tabNames, genderOptions, disabilityOptions }
const groupCustomers = customers => 
{
    let groupedCustomers = {},
        customerCounts = [];

    customers.forEach(customer => 
        {
            customer.created_month = getMonthName(customer.created_at);
            customer.created_year = (new Date(customer.created_at)).getFullYear();
        })

    groupedCustomers = Object.groupBy(customers, customer => customer.created_month);

    for(let prop in groupedCustomers) { customerCounts.push(groupedCustomers[prop].length) }

    return { groupedCustomers, customerCounts };
}

const groupMerchants = merchants => 
{
    let groupedMerchants = {},
        merchantCounts = [];

    merchants.forEach(merchant => 
        {
            merchant.created_month = getMonthName(merchant.created_at);
            merchant.created_year = (new Date(merchant.created_at)).getFullYear();
        })

    groupedMerchants = Object.groupBy(merchants, merchant => merchant.created_month);

    for(let prop in groupedMerchants) { merchantCounts.push(groupedMerchants[prop].length) }

    return { groupedMerchants, merchantCounts };
}

const groupData = (data, parameter) =>
{
    let groupedData = {};

    groupedData = Object.groupBy(data, datum => datum[parameter]);

    return groupedData;
}

const getMonthName = dateString => 
{
    let dateObj = new Date(dateString),
        monthName = '';

    monthName = dateObj.toLocaleString('default', { month: 'long' });

    return monthName;
}

export { groupCustomers, groupMerchants, groupData }
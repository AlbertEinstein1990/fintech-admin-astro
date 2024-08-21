const renderStatusHtml = status =>
{
    const statusHtml = 
    {
        'active': '<span style="display: inline-block; text-align: center; width: 116px; color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Active</span>',
        'inactive': '<span style="display: inline-block; text-align: center; width: 116px; color: red; padding: 0.3rem 1.25rem; background: #fcd9d9; border-radius: 6px">Inactive</span>',
        'suspended': '<span style="display: inline-block; text-align: center; width: 116px; color: #998002; padding: 0.3rem 1.25rem; background: #fffbe6; border-radius: 6px">Suspended</span>',
        'credit': '<span style="display: inline-block; text-align: center; width: 116px; color: green;">Credit</span>',
        'debit': '<span style="display: inline-block; text-align: center; width: 116px; color: red;">Debit</span>',
        'approved': '<span style="display: inline-block; text-align: center; width: 116px; color: green; padding: 0.3rem 1.25rem; background: #e8f9f0; border-radius: 6px">Approved</span>',
        'rejected': '<span style="display: inline-block; text-align: center; width: 116px; color: red; padding: 0.3rem 1.25rem; background: #fcd9d9; border-radius: 6px">Rejected</span>',
        'pending': '<span style="display: inline-block; text-align: center; width: 116px; color: #998002; padding: 0.3rem 1.25rem; background: #fffbe6; border-radius: 6px">Pending</span>'
    }

    return statusHtml[status]
}

export default renderStatusHtml
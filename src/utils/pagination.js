const paginateArray = (data, currentPage, itemsPerPage = 10) => 
{
    let startPont = (currentPage - 1) * itemsPerPage,
        endPoint = currentPage * itemsPerPage,
        totalPages = Math.ceil(data.length / itemsPerPage);

    const paginatedArray = data.slice(startPont, endPoint);

    return (
        {
            paginatedArray,
            totalPages
        }
    )
}

export default paginateArray
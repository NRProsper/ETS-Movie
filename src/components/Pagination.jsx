import PropTypes from 'prop-types';

const Pagination = ({currentPage, totalPages, onPageChange, pageLimit = 6}) => {
    const getPaginationRange = () => {
        let start = Math.max(1, currentPage - Math.floor(pageLimit / 2));
        let end = Math.min(totalPages, start + pageLimit - 1);

        if (end - start + 1 < pageLimit) {
            start = Math.max(1, end - pageLimit + 1);
        }

        return { start, end };
    };

    const { start, end } = getPaginationRange();

    return (
        <div className="flex justify-between items-center mt-6 p-2 w-full bg-gray-700 rounded-md">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
            >
                Previous
            </button>
            <div className="flex gap-2">
                {currentPage > 1 && (
                    <button
                        onClick={() => onPageChange(1)}
                        className="pagination-btn"
                    >
                        1
                    </button>
                )}
                {start > 1 && <span className="pagination-ellipsis">...</span>}
                {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                    >
                        {page}
                    </button>
                ))}
                {end < totalPages && <span className="pagination-ellipsis">...</span>}
                {currentPage < totalPages && (
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className="pagination-btn"
                    >
                        {totalPages}
                    </button>
                )}
            </div>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
            >
                Next
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    pageLimit: PropTypes.number,
};

export default Pagination;
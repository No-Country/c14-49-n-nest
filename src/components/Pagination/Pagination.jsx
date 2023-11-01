export default function Pagination({
  validCurrentPage,
  totalPages,
  setCurrentPage,
}) {
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`px-2 mx-1 rounded-full bg-black text-white ${
          i === validCurrentPage ? "bg-gray-600" : ""
        }`}
      >
        {i}
      </button>
    );
  }
  return (
    <div className="flex flex-row justify-between">
      <p className="px-3">
        Page: {validCurrentPage} of {totalPages}
      </p>
      <div className="m-3">
        {validCurrentPage <= 1 ? (
          <button className="px-1" disabled>
            Anterior
          </button>
        ) : (
          <button
            className="px-1"
            onClick={() => setCurrentPage(validCurrentPage - 1)}
          >
            Anterior
          </button>
        )}
        {pageButtons}
        {validCurrentPage >= totalPages ? (
          <button className="px-1" disabled>
            Siguiente
          </button>
        ) : (
          <button
            className="px-1"
            onClick={() => setCurrentPage(validCurrentPage + 1)}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
}

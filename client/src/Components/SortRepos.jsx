const SortRepos = ({ sortType, onSort }) => {
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      <button
        onClick={() => onSort("recent")}
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          sortType === "recent" && "border-blue-500"
        }`}
      >
        Most Recent
      </button>
      <button
        onClick={() => onSort("stars")}
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          sortType === "stars" && "border-blue-500"
        }`}
      >
        Most Stars
      </button>
      <button
        onClick={() => onSort("forks")}
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          sortType === "forks" && "border-blue-500"
        }`}
      >
        Most Forks
      </button>
    </div>
  );
};

export default SortRepos;

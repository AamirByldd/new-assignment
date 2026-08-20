function Search({ search, onSearch, onClear }) {
  return (
    <div className="flex items-center max-w-lg mx-auto mb-5 relative">
      <input
        type="text"
        placeholder="Search by title or category..."
        value={search}
        onChange={onSearch}
        className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-colors duration-200"
      />

      {search && (
        <button
          onClick={onClear}
          className="absolute right-3 bg-transparent border-none text-base cursor-pointer text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Search;

interface SearchProps {
  label: string
}

const Search: React.FC<SearchProps> = ({ label }) => {
  return (
    <div className="mx-auto max-w-xs my-3">
      <div>
        <div className="relative">
          <input
            type="text"
            id={label}
            placeholder=" "
            className="peer block w-full rounded-md
              border-gray-300 shadow-sm focus:border-primary-400
              focus:ring focus:ring-primary-200
              focus:ring-opacity-50 disabled:cursor-not-allowed
              disabled:bg-gray-50 disabled:text-gray-500"
          />
          <label
            htmlFor={label}
            className="peer-focus:base absolute left-2
              top-0 z-10 -translate-y-2 transform bg-white
              px-1 text-xs text-gray-500 transition-all
              peer-placeholder-shown:translate-y-3
              peer-placeholder-shown:text-sm peer-focus:-translate-y-2
              peer-focus:text-xs peer-disabled:bg-transparent"
          >
            {label}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Search
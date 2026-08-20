function Card({ product, onViewDetails }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 flex flex-col">
      <div className="w-full h-48 overflow-hidden bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-purple-600 bg-purple-50 px-2 py-1 rounded self-start">
          {product.category}
        </span>

        <h2 className="text-base font-semibold text-gray-900 leading-snug">
          {product.title}
        </h2>

        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-auto pt-2">
          <span className="text-sm text-gray-600">⭐ {product.rating}</span>
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
        </div>

        <button
          onClick={() => onViewDetails(product)}
          className="w-full py-2.5 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors duration-200 cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;

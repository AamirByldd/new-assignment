function Modal({ product, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-gray-100 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-purple-600 bg-purple-50 px-2 py-1 rounded">
              {product.category}
            </span>
            <span className="text-sm text-gray-500">
              Stock: {product.stock}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">⭐ {product.rating}</span>
            {product.brand && (
              <span className="text-sm text-gray-600">
                Brand: {product.brand}
              </span>
            )}
            <span className="text-sm text-gray-500 line-through">
              $
              {(product.price / (1 - product.discountPercentage / 100)).toFixed(
                2,
              )}
            </span>
            <span className="text-sm font-semibold text-green-600">
              -{product.discountPercentage}% off
            </span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

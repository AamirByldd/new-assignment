import { useEffect, useState } from "react";

import Card from "./components/Card";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsPerPage = 9;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((result) => {
        setData(result.products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredProducts = data.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearch("");
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <div className="text-center text-2xl mt-24 text-purple-600">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-lg mt-24 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-900">
        Products
      </h1>

      <Search
        search={search}
        onSearch={handleSearch}
        onClear={handleClearSearch}
      />

      <p className="text-center text-gray-500 text-sm mb-6">
        Showing {currentProducts.length} of {filteredProducts.length} products
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <Card key={product.id} product={product} onViewDetails={handleViewDetails} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-400 text-base mt-10">
          No products found for "{search}"
        </p>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;

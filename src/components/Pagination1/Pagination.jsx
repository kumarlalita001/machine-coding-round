import { space } from "postcss/lib/list";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getProducts = async () => {
    const data = await fetch(`https://dummyjson.com/products?limit=100`);
    const json = await data.json();

    console.log(json.products);
    if (json && json.products) setProducts(json.products);
  };

  const handlePrevNext = (x) => {
    setPage((prev) => {
      if ((prev == 1 && x == -1) || (prev == 10 && x == 1)) return prev;
      return prev + x;
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (products.length == 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-5xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-full">
      {products?.length > 0 && (
        <div className="grid grid-cols-1  md:grid-cols-5  gap-4 p-2">
          {" "}
          {products?.slice(page * 10 - 10, page * 10)?.map((item, index) => {
            return (
              <div
                className="w-full h-56 bg-slate-300 rounded-md  cursor-pointer p-2"
                key={item.id}
              >
                <img
                  className="w-[100%] h-[80%] object-cover"
                  src={item?.thumbnail}
                  alt={item?.title}
                />
                <span className="items-center">{item.title}</span>
              </div>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="w-full flex gap-1 justify-center items-center mt-4 mb-4  ">
          <span
            onClick={() => {
              handlePrevNext(-1);
            }}
            className={
              page == 1
                ? "p-2 md:p-3 opacity-0"
                : "p-2 md:p-3 bg-blue-950 text-white cursor-pointer"
            }
          >
            Prev
          </span>
          {Array(products.length / 10)
            .fill(0)
            .map((_, index) => {
              return (
                <span
                  onClick={() => setPage(index + 1)}
                  className={
                    page === index + 1
                      ? "p-2 md:p-3 bg-pink-700 text-yellow-100 cursor-pointer"
                      : "p-2 md:p-3 bg-gray-900 text-yellow-100 cursor-pointer"
                  }
                >
                  {index + 1}
                </span>
              );
            })}
          <span
            onClick={() => handlePrevNext(1)}
            className={
              page == products.length / 10
                ? "p-2 md:p-3 opacity-0"
                : "p-2 md:p-3 bg-blue-950 text-white cursor-pointer"
            }
          >
            Next
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;

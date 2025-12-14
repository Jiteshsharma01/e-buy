import React, { useCallback, useRef, useState } from 'react';
import "./ProductList.scss";
import Product from "../Product/Product";
import useInfiniteScroll from '../../utils/useInfiniteScroll';

// const ProductList = () => {
const ProductList = ({products, lastElRef}) => {
  // const [limit, setLimit] = useState(10);
  // const [skip, setSkip] = useState(0);

  // const { loading, error, hasMore, productList } = useInfiniteScroll(limit, skip);

  // const observer = useRef();
  // const lastProductElementRef = useCallback(node => {
  //   if (loading) return;
  //   if (observer?.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver(entries => {
  //     if(entries[0].isIntersecting && hasMore){
  //       setSkip(prevSkip => prevSkip + 10);
  //     }
  //   })
  //   if (node) observer.current.observe(node);
  // }, [loading, hasMore]);

  return (
    <div className='product-lists grid bg-whitesmoke my-3'>
      {products?.map((product, index) => {
        let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));
        if(products.length === index +1){
          return <Product ref={lastElRef} product = {{...product, discountedPrice}} key={product.id} />
        } else {
          return <Product product = {{...product, discountedPrice}} key={product.id} />
        }

      })}
      {/* {
        productList.map(product, => {
          let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

          return (
            <Product key = {product.id} product = {{...product, discountedPrice}} />
          )
        })
      } */}
    </div>
  )
}

export default ProductList
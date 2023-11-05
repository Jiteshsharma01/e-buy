import React, {useCallback, useEffect, useRef, useState} from 'react';
import "./HomePage.scss";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import { useSelector, useDispatch } from 'react-redux';
import ProductList from "../../components/ProductList/ProductList";
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../store/productSlice';
import Loader from "../../components/Loader/Loader";
import { STATUS } from '../../utils/status';
import CategoryList from '../../components/CategoryList/CategoryList';
import useInfiniteScroll from '../../utils/useInfiniteScroll';

const HomePage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAsyncProducts(15));
  // }, []);

  // const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);

  const { loading, error, hasMore, productList } = useInfiniteScroll(limit, skip);

  const observer = useRef();
  const lastProductElementRef = useCallback(node => {
    if (loading) return;
    if (observer?.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore){
        setSkip(prevSkip => prevSkip + 10);
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);
  

  // randomizing the products in the list
  // const tempProducts = [];
  // if(products.length > 0){
  //   for(let i in products){
  //     let randomIndex = Math.floor(Math.random() * products.length);

  //     while(tempProducts.includes(products[randomIndex])){
  //       randomIndex = Math.floor(Math.random() * products.length);
  //     }
  //     tempProducts[i] = products[randomIndex];
  //   }
  // }

  // category-wise products
  // let catProductsOne = products.filter(product => product.category === categories[0]);
  // let catProductsTwo = products.filter(product => product.category === categories[1]);
  // let catProductsThree = products.filter(product => product.category === categories[2]);
  // let catProductsFour = products.filter(product => product.category === categories[3]);

  return (
    <main>
      <CategoryList />
      <div className='slider-wrapper'>
        <HeaderSlider />
      </div>
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              <div className='title-md'>
                <h3>See our products</h3>
              </div>
              { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={productList} lastElRef={lastProductElementRef} />}
              {/* <ProductList /> */}
            </div>

            {/* <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsOne} />}
            </div> */}

            {/* <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsTwo} />}
            </div> */}

            {/* <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsThree} />}
            </div> */}

            {/* <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsFour} />}
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
import React, { useEffect, useState } from "react";

// if we have single or maximum or 2 props we can use props as we do in this method.

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  // Func that we pass to effect hook gets executed after each render.
  // There are situations where we don't wan't this default behavior.
  // We want more control over when this function gets executed

  //afterRender
  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["Clothing", "Household"]);
    // since 'setProducts' will re-render the component. and useEffect runs after component is rendered. we would get stuck in infinite loop.
    // to solve this issue we should tell react to run this effect only once the first time our component is rendered.
  }, [category]);

  // this effect hook has 2nd argument which is optional. here we pass array of dependencies. in this array we can pass one or more variable.
  // which can be props or state. and our effect will be dependent on these values. If any of these values changes react will re-run our effect.

  // but if we pass empty array that means this effect is not dependent on any values. So it will be executed only once.

  return <div>ProductList</div>;
};

export default ProductList;

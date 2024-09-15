import { createContext, useEffect, useState } from "react";
import { products } from "../Api/products";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1); //! Quantity state
  const [incrDcr, setIncrDcr] = useState(""); //! For tracking increment or decrement
  const [allCatagory, setAllCatagory] = useState([]); //! all catagory
  const [allBrands, setAllBrands] = useState([]); //! all brand
  const [filterProducts, setfilterProducts] = useState([...products]); //! all filter products
  const [allCatagoryNames, setAllCatagoryNames] = useState("All"); //! catagoryData
  const [searchTerm, setSearchTerm] = useState(""); //! search products
  const [filter, setFilter] = useState(" All");
  const [brandName, setBrandName] = useState("All");
  const [addNew, setAddNew] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false); // New state for handling duplicates
  const [filterOpen, setFilterOpen] = useState(false)
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  const increment = (operator) => {
    //! increment or decrement
    operator === "+" && setQuantity((prev) => ++prev);
    operator === "-" && setQuantity((prev) => --prev);
    if (quantity <= 1 && operator === "-") {
      setQuantity(1);
      toast.error("Quantity can't be less than 1", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: "custom-toast",
      });
    }
    if (quantity >= 5 && operator === "+") {
      setQuantity(5);
      toast.error("Quantity can't be more than 5", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: "custom-toast",
      });
    }
  };

  // !Filter products based on type and filter item
  const filter_products = (filterType, filterItems) => {
    return products.filter((cur) => cur[filterType] === filterItems);
  };
  //! filter products base on products filter
  //! catagory onclick data
  const handleActiveCatagory = (catagoryName) => {
    setAllCatagoryNames(catagoryName);
    setSearchTerm("");
    const catagoryWiseFilterProducts = filter_products(
      "category",
      catagoryName
    );
    setfilterProducts(catagoryWiseFilterProducts);
    catagoryName == "All" && setfilterProducts([...products]);
  };
  //! Handle changes in the search input
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm); // Update the search term state

    // Filter the products based on the updated search term
    const searchFilterProducts = products.filter((cur) => {
      return cur.name.toLowerCase().includes(searchTerm);
    });

    setfilterProducts(searchFilterProducts); // Update the filtered products state
  };
  //! Handle changes in the filter dropdown
  const handleFilterChange = (event) => {
    const priceFilter = event.target.value;
    setFilter(priceFilter);

    if (priceFilter === "All") {
      // If "All" is selected, reset to the full products list
      setfilterProducts([...products]);
    } else {
      // Otherwise, apply the sorting logic
      let sortedProducts = [...filterProducts]; // Copy the current products state

      if (priceFilter === "low_high") {
        sortedProducts.sort((a, b) => a.discount_price - b.discount_price); // Sort by price low to high
      } else if (priceFilter === "high_low") {
        sortedProducts.sort((a, b) => b.discount_price - a.discount_price); // Sort by price high to low
      }

      setfilterProducts(sortedProducts); // Update the filtered products state
    }
  };
  useEffect(() => {
    //! all brand name
    const allProductsBrands = products.map((cur) => cur["brand"]);
    const productsBrand = ["All", ...new Set(allProductsBrands)].slice(0, 10);
    setAllBrands(productsBrand);
  }, []);
  useEffect(() => {
    //! all Category name
    const allProductsCategory = products.map((cur) => cur["category"]);
    const productsCategory = ["All", ...new Set(allProductsCategory)].slice(
      0,
      10
    );
    setAllCatagory(productsCategory);
  }, []);

  const handleBrandChange = (e) => {
    //! brand click to change products
    const filterBrandName = e.target.value;
    setBrandName(filterBrandName);

    if (filterBrandName === "All") {
      // If "All" is selected, show all products
      setfilterProducts([...products]);
    } else {
      // Otherwise, filter by the selected brand
      const brandWiseProduct = filter_products("brand", filterBrandName);
      setfilterProducts(brandWiseProduct); // Set the filtered products
    }
  };
  //! clear all the filter
  const handleClear = () => setfilterProducts([...products]);

  //! Add to cart function
  const handleAddToCart = (productID, productQuantity, productsPrice) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === productID);

      if (itemExists) {
        //! If the product exists, mark it as a duplicate and update quantity
        setIsDuplicate(true);
        return prevItems.map((item) =>
          item.id === productID ? { ...item, quantity: productQuantity } : item
        );
      } else {
        //! If the product is new, add it to the cart and set addNew to true
        setAddNew(true);
        return [
          ...prevItems,
          { id: productID, quantity: productQuantity, price: productsPrice },
        ];
      }
    });
  };

  //! Effect to handle new item addition
  useEffect(() => {
    if (addNew) {
      toast.success("Item added to your cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: "custom-toast",
      });
      setAddNew(false); // Reset after showing the alert
    }
  }, [addNew]);

  //! Effect to handle duplicate item alerts
  useEffect(() => {
    if (isDuplicate) {
      toast.success("Quantity updated in your cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: "custom-toast",
      });
      setIsDuplicate(false); // Reset after showing the alert
    }
  }, [isDuplicate]);
  //! Update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }, [cartItems]);
  //! clcik to remove products from cart
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((cur) => cur.id !== id);
    setCartItems(updatedCartItems);
    toast.success("Item removed from your cart.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      className: "custom-toast",
    });
  };
  //! Increment/Decrement function
  const cartIncr = (action, id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          //! Calculate new quantity
          let newQuantity =
            action === "+" ? item.quantity + 1 : item.quantity - 1;

          //! Prevent quantity from going below 1
          if (newQuantity < 1) {
            newQuantity = 1;
            toast.error("Quantity can't be less than 1", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              className: "custom-toast",
            });
          }

          //! Return updated item with new quantity
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };
// ! click to show filter or not
const handleFilterOpen=()=>{
  setFilterOpen(!filterOpen)
}
//! click to hide filter
const hideFilterBar = ()=>{
  setFilterOpen(false)
}
  return (
    <ProductContext.Provider
      value={{
        products, //! all products
        increment, //! quantinty + or -
        quantity, //! quantity
        incrDcr, //! increment or decrement
        setQuantity,
        setIncrDcr,
        filter_products, //! reuseable filter
        allCatagory, //! only all catagoory name
        filterProducts, //! all filter products function
        handleActiveCatagory, //! catagory onclick
        allCatagoryNames, //! single catagory name
        handleSearchChange, //! search product
        searchTerm, //! search data
        filter, // ! price hightolow and low to high
        handleFilterChange, //! filter products click by option value price
        allBrands, //! all brands name
        handleBrandChange, //! filter change
        brandName, //! single brands name
        handleClear, //! clear all the filters
        handleAddToCart, //! add to cart function
        cartItems, //! cart items data
        handleRemoveItem, //! click to remove items from cart
        cartIncr, //! cartIncr
        handleFilterOpen, //! click to show filter or not
        filterOpen, //! filter open or not
        hideFilterBar //! filter bar close
      }}
    >
      {/* //! ToastContainer to display toast notifications */}
      <ToastContainer />
      {children}
    </ProductContext.Provider>
  );
};

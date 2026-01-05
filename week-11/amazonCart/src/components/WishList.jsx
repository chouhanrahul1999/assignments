import { useRecoilValue } from "recoil";
import { cartTotalSelector } from "../../solutionsrc/store/cartTotalSelector";
import { useState } from "react";
import { wishItemsState } from "../../solutionsrc/store/wishItemsState";
import { styles } from "../../solutionsrc/components/WishListStyles.module";
import { Sidebar } from "./sidebar";
import ProductModal from "./ProductModal";

const WishList = () => {
  const { total, itemCount } = useRecoilValue(cartTotalSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [wishItem, setWishItems] = useRecoilValue(wishItemsState);
  const [cartItems, setCartItems] = useRecoilValue(cartTotalSelector);
  const [isAdded, setIsAdded] = useState(false);

  const [addedProducts, setAddedProducts] = useState({});

  const addToCart = (id) => {
    if (addedProducts[id]) return;

    setAddedProducts((prev) => ({ ...prev, [id]: true }));
    const wishItem = wishItem.find((item) => item.id === id);

    const existingCartItem = cartItems.find((item) => item.id === id);

    if (existingCartItem) {
      setCartItems((priviousItem) => {
        priviousItem.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      });
    } else {
      setCartItems((previousItem) => [
        ...previousItem,
        { ...WishList, quantity: 1 },
      ]);
    }
  };

  <button
    style={styles.addToCartButton}
    onClick={() => addToCart(product.id)}
    disabled={isAdded}
  >
    {isAdded ? "Proceed to Checkout" : "Add to Cart"}
  </button>;

  return (
    <div style={styles.container}>
      <Headers itemCount={itemCount} />
      <div style={styles.main}>
        <Sidebar />
        <main style={styles.content}>
          <div style={styles.productCard}>
            {wishItem.map((product) => (
              <div key={product.id} style={styles.productCard}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
                />
                <h3 style={styles.productName}>
                  {product.name.substing(0, 21)}
                </h3>
                <p style={styles.productPrice}>
                  {product.productPrice.toFixed(2)}
                </p>
                <button
                  style={styles.addToCartButton}
                  onClick={() => addToCart(product.id, 1)}
                  disabled={!!addedProducts[product.id]}
                >
                  {addedProducts[product.id] ? (
                    <span>
                      <a
                        href="/cart"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Proceed to Checkout
                      </a>
                    </span>
                  ) : (
                    "Add to cart"
                  )}
                </button>
                <button
                  style={styles.quickViewButton}
                  onClick={() => selectedProduct}
                  aria-label={`Quick view ${product.name}`}
                >
                  Quick View
                </button>
                <ProductModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WishList;

import React from "react";

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <h1 style={{ font: 20, color: "white", textAlign: "center" }}>
        SNAP CART
      </h1>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://cdn-icons-png.flaticon.com/128/3081/3081648.png"
          alt="cart-icon"
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 60,
    background: "linear-gradient(to right, #ff0084, #33001b)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    fontWeight: "bolder",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  promoBanner: {
    backgroundColor: "rgb(248, 209, 241)",
    color: "#000",
    fontSize: "0.9rem",
    textAlign: "center",
    padding: "5px 0",
  },
  header: {
    backgroundColor: "#fff",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
  },
  logoSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  logoImage: {
    maxHeight: "50px",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  searchInput: {
    backgroundColor: "rgb(249, 177, 222)",
    padding: "5px 10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "200px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    fontSize: "1rem",
    fontWeight: "500",
    margin: "10px 0",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
  },
  navLink: {
    textDecoration: "none",
    color: "#4a4a4a",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(54, 54, 54, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
    transition: "transform 0.2s",
    width: "100%",
    maxWidth: "300px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  cardImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderBottom: "1px solid #ddd",
  },
  productName: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
    margin: "10px 0",
  },
  productPrice: {
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "10px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "rgb(248, 153, 209)",
    borderTop: "1px solid #ddd",
    marginTop: "20px",
  },
  footerText: {
    fontSize: "0.9rem",
    color: "#555",
  },
};

const productData = [
  {
    name: "Alana Black Feather + Rhinestone Ruched Midi Dress",
    price: "Rs.9,590",
    image: "https://www.leaclothingco.com/cdn/shop/products/Alana_Black_Feather_Rhinestone_Ruched_Midi_Dress5_700x.jpg?v=1727680744",
  },
  {
    name: "Calliope Puff Sleeve Crop Top",
    price: "Rs. 3,290",
    image: "https://www.leaclothingco.com/cdn/shop/products/Calliope_Puff_Sleeve_Crop_Top.1_700x.jpg?v=1727957458",
  },
  {
    name: "Adele Black Velvet Corset Rhinestone Dress",
    price: "Rs. 5,690",
    image: "https://www.leaclothingco.com/cdn/shop/products/Adele_Black_Velvet_Corset_Rhinestone_Dress4._600x.jpg?v=1727429377",
  },
  {
    name: "Belle Lavender Ombre Ruffle Tulle Corset Dress",
    price: "Rs. 7,290",
    image: "https://www.leaclothingco.com/cdn/shop/products/Belle_Lavender_Ombre_Ruffle_Tulle_Corset_Dress6_600x.jpg?v=1736856239",
  },
  {
    name: "Carla Burgundy Silk Corset Top",
    price: "Rs. 2,490",
    image: "https://www.leaclothingco.com/cdn/shop/products/Carla_Burgundy_Silk_Corset_Top3_600x.jpg?v=1728383176",
  },
  {
    name: "Faizah Grey Rhinestone Mesh One- Piece Saree Set",
    price: "Rs. 16,990",
    image: "https://www.leaclothingco.com/cdn/shop/files/Faizah_Grey_Glitter_Georgette_One-_Piece_Saree_Set8_600x.jpg?v=1723018302",
  },
  {
    name: "Gia Ruffle Organza Corset Gown",
    price: "Rs. 9,490",
    image: "https://www.leaclothingco.com/cdn/shop/products/Gia_Ruffle_Organza_Corset_Gown_400x.jpg?v=1724407289",
  },
  {
    name: "Pixie Baby Pink Puff Corset Dress",
    price: "Rs. 4,890",
    image: "https://www.leaclothingco.com/cdn/shop/products/Pixie_Baby_Pink_Puff_Corset_Dress2_600x.jpg?v=1724675891",
  },
  {
    name: "Shimaz Sage Green Sleeveless Suit",
    price: "Rs. 12,990",
    image: "https://www.leaclothingco.com/cdn/shop/files/Shimaz_Sage_Green_Sleeveless_Suit5_600x.jpg?v=1721042109",
  },
  {
    name: "Tatiana Lavender Ruched Midi Corset Dress",
    price: "Rs. 5,290",
    image: "https://www.leaclothingco.com/cdn/shop/products/Tatiana_Lavender_Ruched_Midi_Corset_Dress5._600x.jpg?v=1724748578",
  },
  {
    name: "Mahima White Pearl Embroidered Saree",
    price: "Rs. 15,990",
    image: "https://www.leaclothingco.com/cdn/shop/files/Mahima_White_Pearl_Embroidered_Saree6_600x.jpg?v=1721028666",
  },
  {
    name: "Celeste White Satin Corset Gown",
    price: "Rs. 10,990",
    image: "https://www.leaclothingco.com/cdn/shop/products/Celeste_White_Satin_Corset_Gown.w_600x.jpg?v=1736936898",
  }
];

export default function App() {
  return (
    <>
      <div style={styles.promoBanner}>
        FLAT 10% OFF ON 1ST ORDER WITH CODE "LEA10"
      </div>
      <header style={styles.header}>
        <div style={styles.logoSection}>
          <div style={styles.logo}>
            <img
              src="https://www.leaclothingco.com/cdn/shop/files/3_d9bc9eaf-9e75-48a7-9c74-005e48d0fa02_120x.png?v=1661497109"
              alt="Lea Logo"
              style={styles.logoImage}
            />
            <img
              src="https://www.leaclothingco.com/cdn/shop/files/Saanjh-Identity_120x_d64e930e-7e13-4196-b465-e9eaa4cd1439.png?v=1660123594"
              alt="Saanjh Logo"
              style={styles.logoImage}
            />
          </div>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchInput}
            />
          </div>
        </div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>
            Shop
          </a>
          <a href="#" style={styles.navLink}>
            Ethnicwear
          </a>
          <a href="#" style={styles.navLink}>
            Lea Essentials
          </a>
          <a href="#" style={styles.navLink}>
            Track Your Order
          </a>
          <a href="#" style={styles.navLink}>
            Returns & Exchanges
          </a>
          <a href="#" style={styles.navLink}>
            Clearance Sale
          </a>
          <a href="#" style={styles.navLink}>
            Take a Style Quiz
          </a>
        </nav>
      </header>
      <div id="staticImageBanner" className="text-center">
        <img
          src="carousel.png"
          className="d-block w-100"
          alt="Banner"
        />
      </div>
      <main style={styles.container}>
        {productData.map((product, index) => (
          <div key={index} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.cardImage}
            />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>Price: {product.price}</p>
          </div>
        ))}
      </main>
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          &#169; 2025 Lea Clothing Co. All rights reserved. |{" "}
          <a href="#" style={{ color: "#555", textDecoration: "none" }}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" style={{ color: "#555", textDecoration: "none" }}>
            Terms of Service
          </a>
        </p>
      </footer>
    </>
  );
}
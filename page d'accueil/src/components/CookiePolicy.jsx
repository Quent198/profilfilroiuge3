import React from "react";
import Header from "./Header";


const CookiePolicy = () => {
  return (
   

    
        <div>
            <Header/>
            <div style={styles.container}>
             <h1 style={styles.title}>Politique de cookies</h1>
      <p style={styles.text}>
        Notre site utilise des cookies pour améliorer votre expérience
        utilisateur. En continuant à naviguer sur ce site, vous acceptez
        l'utilisation de cookies conformément à notre politique de cookies.
      </p>
    </div>   
        </div>
      
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#666",
  },
};

export default CookiePolicy;


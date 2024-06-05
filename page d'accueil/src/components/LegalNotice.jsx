import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LegalNotice = () => {
  return (
    <div>
        <Header/>
        <div style={styles.container}>

        
      <h1 style={styles.title}>Mentions Légales</h1>

      <div style={styles.section}>
        <h2>Article 1 - Informations légales</h2>
        <p>Raison sociale : [Nom de votre entreprise]</p>
        <p>Forme juridique : [Forme juridique de votre entreprise]</p>
        <p>Adresse : [Adresse de votre entreprise]</p>
        <p>Téléphone : [Numéro de téléphone]</p>
        <p>Email : [Adresse email]</p>
        <p>Directeur de la publication : [Nom du directeur]</p>
      </div>

      <div style={styles.section}>
        <h2>Article 2 - Hébergement</h2>
        <p>L'hébergement du site est assuré par : [Nom de l'hébergeur]</p>
        <p>Adresse : [Adresse de l'hébergeur]</p>
        <p>Téléphone : [Numéro de téléphone de l'hébergeur]</p>
      </div>

      <div style={styles.section}>
        <h2>Article 3 - Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur le site sont protégés par les droits
          de propriété intellectuelle. Toute reproduction ou représentation,
          totale ou partielle, sans l'autorisation préalable de [Nom de votre
          entreprise] est strictement interdite.
        </p>
      </div>

      <div style={styles.section}>
        <h2>Article 4 - Collecte de données personnelles</h2>
        <p>
          Le site peut collecter des données personnelles via des formulaires
          de contact ou d'inscription. Ces données sont utilisées uniquement
          dans le cadre prévu par la loi et ne seront en aucun cas cédées à des
          tiers.
        </p>
      </div>

      <div style={styles.section}>
        <h2>Article 5 - Cookies</h2>
        <p>
          Le site utilise des cookies pour améliorer l'expérience utilisateur.
          En continuant à naviguer sur ce site, vous acceptez l'utilisation de
          ces cookies.
        </p>
      </div>

      <div style={styles.section}>
        <h2>Article 6 - Limitation de responsabilité</h2>
        <p>
          [Nom de votre entreprise] ne saurait être tenu responsable des
          dommages directs ou indirects résultant de l'utilisation de ce site
          ou de l'impossibilité d'y accéder.
        </p>
      </div>

      
    </div>
    <Footer/>
    </div>
    
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "40px",
  },
  footer: {
    marginTop: "50px",
    borderTop: "1px solid #ccc",
    paddingTop: "20px",
    textAlign: "center",
  },
  footerText: {
    fontSize: "14px",
    color: "#666",
  },
};

export default LegalNotice;


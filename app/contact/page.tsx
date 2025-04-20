import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // FontAwesome icons

export default function Contact() {
  // Define styles object here
  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      backgroundColor: "#222",
      backgroundImage: "url(/navbg.png)", // Add background image
      backgroundSize: "cover",
      color: "#fff",
      padding: "10px 0",
      textAlign: "center",
      paddingTop: "80px", // Add padding to prevent navbar overlap
    },
    container: {
      width: "90%",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between", // Aligns the content to the left and right
      alignItems: "center", // Vertically aligns the items
    },
    heading: {
      fontSize: "26px",
      color: "transparent", // Make text transparent to apply the gradient
      background: "linear-gradient(45deg, #ff416c, #ff4b2b)", // Instagram-like gradient
      backgroundClip: "text", // Apply the gradient to the text
      WebkitBackgroundClip: "text", // Safari compatibility
      fontWeight: "bold",
    },
    socialLinks: {
      display: "flex", // Add flex to make icons horizontal
      gap: "40px", // Add space between icons
    },
    socialItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    socialIcon: {
      color: "#fff",
      textDecoration: "none",
    },
    iconText: {
      marginTop: "8px",
      color: "#fff",
      fontSize: "14px",
    },
  };

  return (
    <footer id="contact" style={styles.footer}>
      <div style={styles.container}>
        <h4 style={styles.heading}>
          Connect with Me
        </h4>
        <div style={styles.socialLinks}>
          <div style={styles.socialItem}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              <FaLinkedin size={30} />
            </a>
            <p style={styles.iconText}>LinkedIn</p>
          </div>

          <div style={styles.socialItem}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              <FaGithub size={30} />
            </a>
            <p style={styles.iconText}>GitHub</p>
          </div>

          <div style={styles.socialItem}>
            <a href="mailto:youremail@example.com" style={styles.socialIcon}>
              <FaEnvelope size={30} />
            </a>
            <p style={styles.iconText}>Email</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

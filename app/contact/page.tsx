import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      backgroundColor: "#222",
      backgroundImage: "url(/navbg.png)",
      backgroundSize: "cover",
      color: "#fff",
      padding: "10px 0",
      textAlign: "center",
      paddingTop: "80px",
    },
    container: {
      width: "90%",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap", // ensures responsiveness
    },
    heading: {
      fontSize: "26px",
      color: "transparent",
      background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      fontWeight: "bold",
    },
    socialLinks: {
      display: "flex",
      gap: "40px",
      flexWrap: "wrap",
      justifyContent: "center",
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
        <h4 style={styles.heading}>Connect with Me</h4>
        <div style={styles.socialLinks}>
          {/* LinkedIn */}
          <div style={styles.socialItem}>
            <a
              href="https://www.linkedin.com/in/samyak-bajracharya-b3380028a"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              <FaLinkedin size={30} />
            </a>
            <p style={styles.iconText}>LinkedIn</p>
          </div>

          {/* GitHub */}
          <div style={styles.socialItem}>
            <a
              href="https://github.com/Samyk-s"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              <FaGithub size={30} />
            </a>
            <p style={styles.iconText}>GitHub</p>
          </div>

          <div style={styles.socialItem}>
            <a
              href="https://wa.me/9779808516437?text=Hi%20Samyak%2C%20I%20just%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
            >
              <FaWhatsapp size={30} />
            </a>
            <p style={styles.iconText}>+977 9808516437</p>
          </div>
          <div style={styles.socialItem}>
            <a
              href="mailto:samykbajr919@gmail.com?subject=Regarding%20My%20Portfolio"
              style={styles.socialIcon}
            >
              <FaEnvelope size={30} />
            </a>

            <p style={styles.iconText}>samykbajr919@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

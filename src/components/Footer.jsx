import '../styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          © {new Date().getFullYear()} VirtualTek Academy. Todos los derechos reservados. | Power by Felix Cordero Murillo
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import './styles/footer.css';

const Footer = () => {
    let date = new Date();
    return (
        <footer className="footer position-absolute bottom-0 start-0 end-0 py-2 border-top box-shadow mb-0">
            <p className="mb-0">Copyright &copy; Chris Johannesson {date.getFullYear()}</p>
        </footer>
    );
}

export default Footer;

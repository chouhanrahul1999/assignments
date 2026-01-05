import { Link } from 'react-router-dom';
import styles from '../../solutionsrc/components/Header.module';
import { ShoppingCart } from 'lucide-react';

const Header = ({ itemCount }) => {
return (
    <div>
        <header style={styles.header}>
            <div style={styles.headerContainer}>
                <Link to="/" style={styles.logoLink} >
                    <h1>amzone.in</h1>
                </Link>
                <div style={styles.headerRight}>
                    <span>hello, user</span>
                    <div style={styles.cartIcon}>
                        <Link to="/cart" style={styles.cartLink}>
                        <ShoppingCart size={24} />
                        </Link>
                        <span style={styles.cartCount}>{itemCount}</span>
                    </div>
                </div>
            </div>
        </header>
    </div>
)
}

export default Header;

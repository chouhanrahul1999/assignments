import { CheckCircle } from "lucide-react";
import { styles } from "../../solutionsrc/components/AmazonStyleCart.module";

const PurchaseModal = ({ handlePurchaseComplete, total }) => {
    return (
        <div style={styles.modal}>
            <div style={styles.modalContent}>
                <h2>Purchase Successful!</h2>
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <CheckCircle size={48} style={{ margin: '0 auto', color: '#48bb78' }} />
                    <p>Thank you for your purchase. Your order has been successfully processed.</p>
                </div>
                <p>Total Amount: ₹{total}</p>
            </div>
            <button onClick={handlePurchaseComplete}
            style={styles.closeButton}></button>
        </div>
    )
};

export default PurchaseModal;

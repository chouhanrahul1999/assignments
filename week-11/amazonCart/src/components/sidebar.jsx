import { styles } from "../../solutionsrc/components/WishListStyles.module";

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarItem}>
        <h2 style={{ fontWeight: "bold" }}>Your wish list</h2>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>Default list</p>
      </div>
    </aside>
  );
};

export default Sidebar;

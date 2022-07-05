import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev News</span>
      </h1>
      <p>
        Keep up to date with the best in class of spaghetti code, with extra
        sauce!
      </p>
    </div>
  );
};

export default Header;

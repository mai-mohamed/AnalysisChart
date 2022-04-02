import "./darkMode.scss"

type IProps = {
  handleDarkModeChange: () => void;
  isDark: boolean;
};
const DarkMode = (props: IProps) => {
  return (
    <div onClick={props.handleDarkModeChange} className="dark-mode-wrapper pt-4">
      {props.isDark ? (
           <img src="images/light.png" alt="light mode" />
        
      ) : (
        <img src="images/dark.png" alt="dark mode" />
      )}
    </div>
  );
};
export default DarkMode;

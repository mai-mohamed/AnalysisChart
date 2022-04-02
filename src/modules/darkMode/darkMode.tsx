
type IProps={
    handleDarkModeChange:()=>void
}
const DarkMode=(props:IProps)=>{
    return(
        <div onClick={props.handleDarkModeChange}>dark mode</div>
    )
}
export default DarkMode;
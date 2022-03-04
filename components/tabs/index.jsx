import styles from "./Tabs.module.css";

const Tabs = (props) => {
    return (
        <div className={`rounded-t-lg mx-1 bg-cyan-400 px-8 py-4 ${styles.pointerTabs}`} {...props}>
            <p className="text-center capitalize text-slate-100">{props.tabname}</p>
        </div>
    )
}
export default Tabs;
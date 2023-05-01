import styles from "./loading.module.css";

const loading = () => {
  return (
    <div className="w-full h-96 flex justify-center mt-60">
      <div className={`${styles["lds-spinner"]} `}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default loading;

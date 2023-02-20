import React from "react";
import clsx from "clsx";
import styles from "./Loader.module.scss";
import LogoIcon from "@/assets/icons/logo.svg";

type PropsType = {
    mode?: "normal" | "reverse-color";
};

const Loader: React.FC<PropsType> = ({ mode }) => {
    return (
        <div className={clsx(styles.wrapper, mode)}>
            {/* <LogoIcon className={styles.logo} /> */}
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;

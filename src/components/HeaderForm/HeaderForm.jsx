import React from "react";
import styles from './HeaderForm.module.css'

function HeaderForm() {
    return(
        <div className={styles.container}>
            <form action="#" className="form" >
                <label className={styles.label}>Заполните информацию о себе</label>
            </form>
        </div>

    )
}

export default HeaderForm
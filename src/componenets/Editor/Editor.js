import React, { useState } from 'react'
import styles from './Editor.module.css'

function Editor(props) {
    const sections = props.sections

    const [activeSectionKey, setActiveSectoinKey] = useState(
        Object.keys(sections)[0]
    );

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        {/* returns array of keys */}
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.sections} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectoinKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>

        <div className={styles.body}>
             
        </div>

    </div>
  );
}

export default Editor
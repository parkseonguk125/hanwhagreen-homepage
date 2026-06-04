import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  MdBusiness,
  MdBarChart,
  MdEngineering,
  MdEmojiEvents,
} from "react-icons/md";
import { areaTabs } from "../data/mock";
import styles from "./AreaSection.module.css";

const iconMap = {
  building: MdBusiness,
  chart: MdBarChart,
  gear: MdEngineering,
  award: MdEmojiEvents,
};

export default function AreaSection() {
  const [activeId, setActiveId] = useState(areaTabs[0].id);
  const active = areaTabs.find((t) => t.id === activeId) || areaTabs[0];
  const ActiveIcon = iconMap[active.icon];

  return (
    <section className={styles.area}>
      <div className={styles.tabBar}>
        <ul className={styles.tabList}>
          {areaTabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.id === activeId ? styles.tabOn : ""}
              onMouseEnter={() => setActiveId(tab.id)}
              onFocus={() => setActiveId(tab.id)}
              onClick={() => setActiveId(tab.id)}
              role="tab"
              tabIndex={0}
              aria-selected={tab.id === activeId}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelBg} aria-hidden="true" />
        <div className={`container ${styles.panelInner}`}>
          <div className={styles.panelContent}>
            <ActiveIcon className={styles.panelIcon} />
            <div className={styles.panelText}>
              <h3 className={styles.panelTitle}>{active.title}</h3>
              <p className={styles.panelBody}>{active.body}</p>
              <a href="#" className="btn-circle" aria-label="자세히 보기">
                <HiOutlineArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

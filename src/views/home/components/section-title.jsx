import styles from './section-title.module.css';

const SectionTitle = (props) => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.iconContainer}>{props.children}</div>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );
};

export default SectionTitle;

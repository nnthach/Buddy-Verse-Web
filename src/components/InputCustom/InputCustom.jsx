import styles from './InputCustome.module.scss';

function InputCustom({ label, type, name, onChange, value }) {
  return (
    <div className={styles.wrap}>
      <label>{label}</label>
      <input type={type} name={name} onChange={onChange} value={value} />
    </div>
  );
}

export default InputCustom;

import styles from './InputCustome.module.scss';

function InputCustom({ error, label, type, name, onChange, value, selectDefault = '', selectData = null, ...props }) {
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <>
            <div className={styles.wrap}>
              <label>{label}</label>
              <select name={name} value={value} onChange={onChange} className={error && styles.error}>
                <option value="">{selectDefault}</option>
                {selectData.map((item) => (
                  <option key={item.id} value={item.value}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            {error && <p className={styles['error-text']}>{error}</p>}
          </>
        );
      case 'date':
        return (
          <>
            <div className={styles.wrap}>
              <label>{label}</label>
              <input
                type={'date'}
                name={name}
                onChange={onChange}
                value={value ?? ''}
                className={error && styles.error}
              />
            </div>
            {error && <p className={styles['error-text']}>{error}</p>}
          </>
        );
      default:
        return (
          <>
            <div className={styles.wrap}>
              <label>{label}</label>
              <input
                type={type}
                name={name}
                onChange={onChange}
                value={value ?? ''}
                className={error && styles.error}
                {...props}
              />
            </div>
            {error && <p className={styles['error-text']}>{error}</p>}
          </>
        );
    }
  };
  return <>{renderInput()}</>;
}

export default InputCustom;

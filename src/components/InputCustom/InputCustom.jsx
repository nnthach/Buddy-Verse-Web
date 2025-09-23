import styles from './InputCustome.module.scss';

// Component trường nhập liệu tùy chỉnh
function InputCustom({ error, label, type, name, onChange, value, selectDefault = '', selectData = null, ...props }) {
  // Hàm render trường nhập liệu dựa trên loại (type)
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <>
            <div className={styles.wrap}>
              {/* Nhãn của trường nhập liệu */}
              <label>{label}</label>
              <select name={name} value={value} onChange={onChange} className={error && styles.error}>
                {/* Giá trị mặc định cho select */}
                <option value="">{selectDefault}</option>
                {selectData?.map((item) => (
                  <option key={item.id} value={item.value}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            {/* Hiển thị thông báo lỗi nếu có */}
            {error && <p className={styles['error-text']}>{error}</p>}
          </>
        );
      case 'date':
        return (
          <>
            <div className={styles.wrap}>
              {/* Nhãn của trường nhập liệu ngày */}
              <label>{label}</label>
              <input
                type={'date'}
                name={name}
                onChange={onChange}
                value={value ?? ''}
                className={error && styles.error}
              />
            </div>
            {/* Hiển thị thông báo lỗi nếu có */}
            {error && <p className={styles['error-text']}>{error}</p>}
          </>
        );
      default:
        return (
          <>
            <div className={styles.wrap}>
              {/* Nhãn của trường nhập liệu mặc định */}
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
            {/* Hiển thị thông báo lỗi nếu có */}
            {error && <p className={styles['error-text']}>{error}</p>}
          </>
        );
    }
  };

  return <>{renderInput()}</>;
}

export default InputCustom;

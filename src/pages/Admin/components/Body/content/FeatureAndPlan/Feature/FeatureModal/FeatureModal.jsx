import { uppercaseFirstChar } from '~/utils/transform';
import styles from './FeatureModal.module.scss';
import { IoMdClose } from 'react-icons/io';
import InputCustom from '~/components/InputCustom/InputCustom';
import { memo, useEffect, useState } from 'react';
import { handleInputChange } from '~/utils/helpers';
import { toast } from 'react-toastify';
import { createFeatureAPI, getFeatureByIdAPI, updateFeatureAPI } from '~/services/featureService';

function FeatureModal({ openModal, setOpenModal, refreshList, featureId, setFeatureId }) {
  const [featureForm, setFeatureForm] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    if (openModal == 'create') return;
    if (featureId == '') return;

    const handleGetFeatureDetail = async () => {
      try {
        const res = await getFeatureByIdAPI(featureId);
        console.log('get interest id res', res);
        setFeatureForm({
          name: res.data.name ?? '',
          description: res.data.description ?? '',
        });
      } catch (error) {
        console.log('get interest id err', error);
      }
    };

    handleGetFeatureDetail();
  }, [featureId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (openModal == 'create') {
      try {
        const res = await createFeatureAPI(featureForm);
        setFeatureForm({ name: '', description: '' });

        await refreshList();

        toast.success(res.data.message);
      } catch (error) {
        console.log('create feature err', error);
      }
    } else if (openModal == 'edit') {
      try {
        const res = await updateFeatureAPI(featureId, featureForm);

        await refreshList();

        toast.success(res.data.message);
      } catch (error) {
        console.log('update feature err', error);
      }
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles['content-heading']}>
          <h5>{uppercaseFirstChar(openModal == 'create' ? 'Tạo mới' : 'Chỉnh sửa')}</h5>
          <IoMdClose
            className={styles.close}
            size={24}
            onClick={() => {
              setOpenModal('');
              setFeatureId('');
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <InputCustom
            label={'Tên'}
            type={'text'}
            name={'name'}
            onChange={handleInputChange(setFeatureForm)}
            value={featureForm.name}
            required
          />
          <InputCustom
            label={'Mô tả'}
            type={'text'}
            name={'description'}
            onChange={handleInputChange(setFeatureForm)}
            value={featureForm.description}
            required
          />

          <button type="submit">{uppercaseFirstChar(openModal == 'create' ? 'Tạo mới' : 'Chỉnh sửa')}</button>
        </form>
      </div>
    </div>
  );
}

export default memo(FeatureModal);

import { uppercaseFirstChar } from '~/utils/transform';
import styles from './QuestModal.module.scss';
import { IoMdClose } from 'react-icons/io';
import InputCustom from '~/components/InputCustom/InputCustom';
import { memo, useEffect, useState } from 'react';
import { handleInputChange } from '~/utils/helpers';
import { toast } from 'react-toastify';
import { createQuestAPI, getQuestByIdAPI, updateQuestAPI } from '~/services/questService';

function QuestModal({ openModal, setOpenModal, refreshList, questId, setQuestId }) {
  const initialForm = {
    title: '',
    description: '',
    rewardPoints: 0,
    rewardBalance: 0,
    type: '',
    isActive: true,
    expiredAt: '2025-09-26T00:47:06.169Z',
  };
  const [questForm, setQuestForm] = useState(initialForm);

  const selectQuestData = [
    { id: 1, title: 'Daily', value: 'Daily' },
    { id: 2, title: 'Weekly', value: 'Weekly' },
    { id: 3, title: 'OneTime', value: 'OneTime' },
  ];

  const selectActiveData = [
    { id: 1, title: 'Hoạt động', value: true },
    { id: 2, title: 'Ngưng hoạt động', value: false },
  ];

  useEffect(() => {
    if (openModal == 'create') return;
    if (questId == '') return;

    const handleGetQuestDetail = async () => {
      try {
        const res = await getQuestByIdAPI(questId);
        console.log('get quest id res', res);
        setQuestForm({
          title: res.data.title ?? '',
          description: res.data.description ?? '',
          rewardPoints: res.data.rewardPoints ?? 0,
          rewardBalance: res.data.rewardBalance ?? 0,
          type: res.data.type ?? '',
          isActive: res.data.isActive ?? true,
          expiredAt: res.data.expiredAt ?? '2025-09-26T00:47:06.169Z',
        });
      } catch (error) {
        console.log('get quest id err', error);
      }
    };

    handleGetQuestDetail();
  }, [questId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (openModal == 'create') {
      try {
        const res = await createQuestAPI(questForm);
        setQuestForm(initialForm);

        console.log('create quest res', res);

        await refreshList();

        toast.success(res.data.message);
      } catch (error) {
        console.log('create quest err', error);
      }
    } else if (openModal == 'edit') {
      try {
        const res = await updateQuestAPI(questId, questForm);
        console.log('update quest res', res);

        await refreshList();

        toast.success(res.data.message);
      } catch (error) {
        console.log('update quest err', error);
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
              setQuestId('');
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles['form-container']}>
            <div className={styles.col}>
              <InputCustom
                label={'Tên'}
                type={'text'}
                name={'title'}
                onChange={handleInputChange(setQuestForm)}
                value={questForm.title}
                required
              />
              <InputCustom
                label={'Mô tả'}
                type={'text'}
                name={'description'}
                onChange={handleInputChange(setQuestForm)}
                value={questForm.description}
                required
              />

              <InputCustom
                label={'Phân loại'}
                type={'select'}
                name={'type'}
                onChange={handleInputChange(setQuestForm)}
                value={questForm.type}
                selectData={selectQuestData}
                selectDefault="Chọn loại"
              />
            </div>
            <div className={styles.col}>
              <InputCustom
                label={'Điểm thưởng'}
                type={'number'}
                name={'rewardPoints'}
                onChange={handleInputChange(setQuestForm)}
                value={questForm.rewardPoints}
                required
              />
              <InputCustom
                label={'Tiền tặng'}
                type={'number'}
                name={'rewardBalance'}
                onChange={handleInputChange(setQuestForm)}
                value={questForm.rewardBalance}
              />

              <InputCustom
                label={'Trạng thái'}
                type={'select'}
                name={'isActive'}
                onChange={handleInputChange(setQuestForm)}
                value={questForm.isActive}
                selectData={selectActiveData}
                selectDefault="Chọn trạng thái"
              />
            </div>
          </div>

          <button type="submit">{uppercaseFirstChar(openModal == 'create' ? 'Tạo mới' : 'Chỉnh sửa')}</button>
        </form>
      </div>
    </div>
  );
}

export default memo(QuestModal);

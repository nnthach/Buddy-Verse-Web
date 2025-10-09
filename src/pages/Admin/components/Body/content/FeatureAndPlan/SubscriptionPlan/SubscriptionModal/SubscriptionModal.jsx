import { uppercaseFirstChar } from '~/utils/transform';
import styles from './SubscriptionModal.module.scss';
import { IoMdClose } from 'react-icons/io';
import InputCustom from '~/components/InputCustom/InputCustom';
import { memo, useEffect, useState } from 'react';
import { handleInputChange } from '~/utils/helpers';
import { toast } from 'react-toastify';
import useFetchList from '~/hooks/useFetchList';
import {
  createSubscriptionPlanAPI,
  getSubscriptionPlanByIdAPI,
  updateSubscriptionPlanAPI,
} from '~/services/subscriptionPlanService';
import { getFeatureListAPI } from '~/services/featureService';

function SubscriptionPlanModal({ openModal, setOpenModal, refreshList, subscriptionPlanId, setSubscriptionPlanId }) {
  const [subscriptionPlanForm, setSubscriptionPlanForm] = useState({
    name: '',
    description: '',
    price: 0,
    durationDays: 30,
    features: [],
  });

  const { data: featureList } = useFetchList(getFeatureListAPI);

  const handleAddFeatureList = (item) => {
    console.log('mục', item);

    setSubscriptionPlanForm((prev) => {
      const isSelected = prev.features.includes(item);

      return {
        ...prev,
        features: isSelected ? prev.features.filter((id) => id !== item) : [...prev.features, item],
      };
    });
  };

  const handleGetSubscriptionPlanDetail = async () => {
    try {
      const res = await getSubscriptionPlanByIdAPI(subscriptionPlanId);
      console.log('get subscriptionplan id res', res);
      setSubscriptionPlanForm({
        name: res.data.name ?? '',
        description: res.data.description ?? '',
        price: res.data.price ?? 0,
        durationDays: res.data.durationDays ?? 0,
        features: res.data.features ?? [],
      });
    } catch (error) {
      console.log('get subscriptionplan id err', error);
    }
  };

  useEffect(() => {
    if (openModal == 'create') return;
    if (subscriptionPlanId == '') return;

    handleGetSubscriptionPlanDetail();
  }, [subscriptionPlanId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (openModal == 'create') {
      try {
        console.log('subcription plan form create', subscriptionPlanForm);
        const res = await createSubscriptionPlanAPI(subscriptionPlanForm);
        setSubscriptionPlanForm({ name: '', description: '', price: 0, durationDays: 30, features: [] });

        await refreshList();

        toast.success(res.data.message);
      } catch (error) {
        console.log('create feature err', error);
      }
    } else if (openModal == 'edit') {
      try {
        console.log('subcription plan form update', subscriptionPlanForm);

        const res = await updateSubscriptionPlanAPI(subscriptionPlanId, subscriptionPlanForm);

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
              setSubscriptionPlanId('');
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <InputCustom
            label={'Tên'}
            type={'text'}
            name={'name'}
            onChange={handleInputChange(setSubscriptionPlanForm)}
            value={subscriptionPlanForm.name}
            required
          />
          <InputCustom
            label={'Mô tả'}
            type={'text'}
            name={'description'}
            onChange={handleInputChange(setSubscriptionPlanForm)}
            value={subscriptionPlanForm.description}
            required
          />
          <InputCustom
            label={'Gía trị'}
            type={'number'}
            name={'price'}
            onChange={handleInputChange(setSubscriptionPlanForm)}
            value={subscriptionPlanForm.price}
            required
          />

          <InputCustom
            label={'Thời gian hiệu lực'}
            type={'number'}
            name={'durationDays'}
            onChange={handleInputChange(setSubscriptionPlanForm)}
            value={subscriptionPlanForm.durationDays}
            required
          />

          {/*Feature list */}
          <div className={styles['feature-list']}>
            {featureList.map((item) => (
              <p
                key={item.id}
                onClick={() => handleAddFeatureList(item.id)}
                className={subscriptionPlanForm.features?.includes(item.id) ? styles.active : ''}
              >
                {item.name}
              </p>
            ))}
          </div>

          <button type="submit">{uppercaseFirstChar(openModal == 'create' ? 'Tạo mới' : 'Chỉnh sửa')}</button>
        </form>
      </div>
    </div>
  );
}

export default memo(SubscriptionPlanModal);

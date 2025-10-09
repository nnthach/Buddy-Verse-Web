import { useState } from 'react';
import styles from './SubscriptionPlan.module.scss';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { toast } from 'react-toastify';
import Pagination from '~/components/Pagination/Pagination';
import useFetchList from '~/hooks/useFetchList';
import { Spin } from 'antd';
import { deleteSubscriptionPlanAPI, getSubscriptionPlanListAPI } from '~/services/subscriptionPlanService';
import SubscriptionModal from '~/pages/Admin/components/Body/content/FeatureAndPlan/SubscriptionPlan/SubscriptionModal/SubscriptionModal';

function SubscriptionPlan() {
  const { data: subscriptionPlanList, loading, refresh } = useFetchList(getSubscriptionPlanListAPI);

  const [openModal, setOpenModal] = useState('');
  const [subscriptionPlanId, setSubscriptionPlanId] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = subscriptionPlanList?.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleDeleteSubscriptionPlan = async (id) => {
    const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa gói này?');
    if (!isConfirm) return;

    try {
      const res = await deleteSubscriptionPlanAPI(id);
      console.log('delete SubcriptionPlan res', res);

      await refresh();
      toast.success(res.data.message);
    } catch (error) {
      console.log('delete SubcriptionPlan', error);
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles['subscriptionplan-wrap']}>
          <div className={styles.heading}>
            <h3>Danh sách gói</h3>
            <button onClick={() => setOpenModal('create')}>Thêm mới</button>
          </div>

          <div className={styles['table-wrap']}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Mô tả</th>
                  <th>Gía trị</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>
                      <Spin />
                    </td>
                  </tr>
                ) : (
                  currentProduct.map((item) => (
                    <tr key={item.planId}>
                      <td>{item.planId}</td>
                      <td style={{ fontWeight: 550 }}>{item?.name}</td>
                      <td>{item?.description}</td>
                      <td>{item?.price}</td>
                      <td>
                        <CiEdit
                          size={24}
                          color="blue"
                          style={{ marginRight: 10, cursor: 'pointer' }}
                          onClick={() => {
                            setSubscriptionPlanId(item.planId);
                            setOpenModal('edit');
                          }}
                        />
                        <CiTrash
                          size={24}
                          color="red"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleDeleteSubscriptionPlan(item.planId)}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={subscriptionPlanList?.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {openModal != '' && (
        <SubscriptionModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          refreshList={refresh}
          subscriptionPlanId={subscriptionPlanId}
          setSubscriptionPlanId={setSubscriptionPlanId}
        />
      )}
    </>
  );
}

export default SubscriptionPlan;

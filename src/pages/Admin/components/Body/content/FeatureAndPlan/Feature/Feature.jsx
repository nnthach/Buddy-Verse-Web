import { useState } from 'react';
import styles from './Feature.module.scss';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { toast } from 'react-toastify';
import Pagination from '~/components/Pagination/Pagination';
import useFetchList from '~/hooks/useFetchList';
import { Spin } from 'antd';
import { deleteFeatureAPI, getFeatureListAPI } from '~/services/featureService';
import FeatureModal from '~/pages/Admin/components/Body/content/FeatureAndPlan/Feature/FeatureModal/FeatureModal';

function Feature() {
  const { data: featureList, loading, refresh } = useFetchList(getFeatureListAPI);

  const [openModal, setOpenModal] = useState('');
  const [featureId, setFeatureId] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = featureList?.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleDeleteFeature = async (id) => {
    const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa tinh nang này?');
    if (!isConfirm) return;

    try {
      const res = await deleteFeatureAPI(id);
      console.log('delete feature res', res);

      await refresh();
      toast.success(res.data.message);
    } catch (error) {
      console.log('delete feature', error);
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles['feature-wrap']}>
          <div className={styles.heading}>
            <h3>Danh sách tính năng</h3>
            <button onClick={() => setOpenModal('create')}>Thêm mới</button>
          </div>

          <div className={styles['table-wrap']}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Mô tả</th>
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
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td style={{ fontWeight: 550 }}>{item?.name}</td>
                      <td>{item?.description}</td>
                      <td>
                        <CiEdit
                          size={24}
                          color="blue"
                          style={{ marginRight: 10, cursor: 'pointer' }}
                          onClick={() => {
                            setFeatureId(item.id);
                            setOpenModal('edit');
                          }}
                        />
                        <CiTrash
                          size={24}
                          color="red"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleDeleteFeature(item.id)}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={featureList?.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {openModal != '' && (
        <FeatureModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          refreshList={refresh}
          featureId={featureId}
          setFeatureId={setFeatureId}
        />
      )}
    </>
  );
}

export default Feature;

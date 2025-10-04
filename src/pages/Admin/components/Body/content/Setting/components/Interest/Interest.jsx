import { useCallback, useEffect, useState } from 'react';
import styles from './Interest.module.scss';
import { deleteInterestAPI, getInterestListAPI } from '~/services/interestService';
import InterestModal from '~/pages/Admin/components/Body/content/Setting/components/Interest/InterestModal/InterestModal';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { toast } from 'react-toastify';
import Pagination from '~/components/Pagination/Pagination';
import useFetchList from '~/hooks/useFetchList';
import { Spin } from 'antd';

function Interest() {
  // const [interestList, setInterestList] = useState([]);

  const { data: interestList, loading, refresh } = useFetchList(getInterestListAPI);

  const [openModal, setOpenModal] = useState('');
  const [interestId, setInterestId] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = interestList?.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleDeleteInterest = async (id) => {
    const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa sở thích này?');
    if (!isConfirm) return;

    try {
      const res = await deleteInterestAPI(id);
      console.log('delete interest res', res);

      await refresh();
      toast.success(res.data.message);
    } catch (error) {
      console.log('delete interest', error);
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles['interest-wrap']}>
          <div className={styles.heading}>
            <h3>Danh sách sở thích</h3>
            <button onClick={() => setOpenModal('create')}>Thêm mới</button>
          </div>

          <div className={styles['table-wrap']}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Mô tả</th>
                  <th>Ngày tạo</th>
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
                    <tr key={item.interestId}>
                      <td>{item.interestId}</td>
                      <td style={{ fontWeight: 550 }}>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.createdAt}</td>
                      <td>
                        <CiEdit
                          size={24}
                          color="blue"
                          style={{ marginRight: 10, cursor: 'pointer' }}
                          onClick={() => {
                            setInterestId(item.interestId);
                            setOpenModal('edit');
                          }}
                        />
                        <CiTrash
                          size={24}
                          color="red"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleDeleteInterest(item.interestId)}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={interestList?.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {openModal != '' && (
        <InterestModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          refreshList={refresh}
          interestId={interestId}
          setInterestId={setInterestId}
        />
      )}
    </>
  );
}

export default Interest;

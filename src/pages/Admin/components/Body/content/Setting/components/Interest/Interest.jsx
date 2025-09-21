import { useCallback, useEffect, useState } from 'react';
import styles from './Interest.module.scss';
import { deleteInterestAPI, getInterestListAPI } from '~/services/interestService';
import InterestModal from '~/pages/Admin/components/Body/content/Setting/components/Interest/InterestModal/InterestModal';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { toast } from 'react-toastify';

function Interest() {
  const [interestList, setInterestList] = useState([]);

  const [openModal, setOpenModal] = useState('');
  const [interestId, setInterestId] = useState('');

  const handleGetInterestList = useCallback(async () => {
    try {
      const res = await getInterestListAPI();
      setInterestList(res.data);
    } catch (error) {
      console.log('get interest list err', error);
    }
  }, []);

  const handleDeleteInterest = async (id) => {
    const isConfirm = window.confirm('Bạn có chắc chắn muốn xoá interest này?');
    if (!isConfirm) return;

    try {
      const res = await deleteInterestAPI(id);
      console.log('delete interest res', res);

      await handleGetInterestList();
      toast.success(res.data.message);
    } catch (error) {
      console.log('delete interest', error);
    }
  };

  useEffect(() => {
    handleGetInterestList();
  }, []);
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles['interest-wrap']}>
          <div className={styles.heading}>
            <h3>Interests List</h3>
            <button onClick={() => setOpenModal('create')}>Add New</button>
          </div>

          <div className={styles['table-wrap']}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {interestList.map((item) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {openModal != '' && (
        <InterestModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          refreshList={handleGetInterestList}
          interestId={interestId}
          setInterestId={setInterestId}
        />
      )}
    </>
  );
}

export default Interest;

import { useCallback, useEffect, useState } from 'react';
import styles from './Quest.module.scss';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { deleteQuestAPI, getQuestListAPI } from '~/services/questService';
import { toast } from 'react-toastify';
import { CiEdit, CiTrash } from 'react-icons/ci';
import QuestModal from '~/pages/Admin/components/Body/content/Quest/QuestModal/QuestModal';

function Quest() {
  const [questList, setQuestList] = useState([]);

  const [openModal, setOpenModal] = useState('');
  const [questId, setQuestId] = useState('');

  const handleGetQuestList = useCallback(async () => {
    try {
      const res = await getQuestListAPI();
      console.log('get queslist api', res);
      setQuestList(res.data);
    } catch (error) {
      console.log('get quest list err', error);
    }
  }, []);

  const handleDeleteQuest = async (id) => {
    const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa nhiệm vụ này?');
    if (!isConfirm) return;

    try {
      const res = await deleteQuestAPI(id);
      console.log('delete quest res', res);

      await handleGetQuestList();
      toast.success(res.data.message);
    } catch (error) {
      console.log('delete quest', error);
    }
  };

  useEffect(() => {
    handleGetQuestList();
  }, []);

  const questSummaryData = [
    {
      title: 'Tổng số nhiệm vụ',
      number: '4650',
      percent: 15.6,
    },
    {
      title: 'Nhiệm vụ yêu thích',
      number: '4000',
      percent: 15.6,
    },
  ];

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles['top-summary']}>
          {questSummaryData.map((item, index) => (
            <div key={index} className={styles['summary-box']}>
              <div className={styles.top}>
                <p>{item.title}</p>
                <FaArrowTrendUp />
              </div>
              <div className={styles.bottom}>
                <p>{item.number}</p>
                <span>+{item.percent}</span>
              </div>
            </div>
          ))}
        </div>

        {/*Bảng*/}
        <div className={styles['content-wrap']}>
          <div className={styles['content-header']}>
            <h2>Bảng nhiệm vụ</h2>
            <button onClick={() => setOpenModal('create')}>Thêm mới</button>
          </div>
          <div className={styles['table-wrap']}>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>ID</th>
                  <th>Tên nhiệm vụ</th>
                  <th>Phân loại</th>
                  <th>Điểm thưởng</th>
                  <th>Trạng thái</th>
                  <th>Hết hạn</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {questList.map((quest) => (
                  <tr key={quest.questId}>
                    <td>{quest.questId}</td>
                    <td style={{ fontWeight: 'bold' }}>{quest.title}</td>
                    <td>{quest.type}</td>
                    <td>{quest.rewardPoints}</td>
                    <td>
                      {quest.isActive ? (
                        <span className={styles['active-true']}>Hoạt động</span>
                      ) : (
                        <span className={styles['active-false']}>Ngưng hoạt động</span>
                      )}
                    </td>
                    <td>{quest.expiredAt}</td>
                    <td>
                      <CiEdit
                        size={24}
                        color="blue"
                        style={{ marginRight: 10, cursor: 'pointer' }}
                        onClick={() => {
                          setQuestId(quest.questId);
                          setOpenModal('edit');
                        }}
                      />
                      <CiTrash
                        size={24}
                        color="red"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleDeleteQuest(quest.questId)}
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
        <QuestModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          refreshList={handleGetQuestList}
          questId={questId}
          setQuestId={setQuestId}
        />
      )}
    </>
  );
}

export default Quest;

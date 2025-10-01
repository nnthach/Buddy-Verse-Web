import styles from './ReportModal.module.scss';
import { IoMdClose } from 'react-icons/io';
import InputCustom from '~/components/InputCustom/InputCustom';
import { memo, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getReportDetailAPI, updateReportAcceptAPI, updateReportRejectAPI } from '~/services/reportService';
import { formatDate } from '~/utils/transform';
import { AuthContext } from '~/context/AuthContext';

function ReportModal({ refreshList, reportId, setReportId }) {
  const [reportDetail, setReportDetail] = useState(null);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    if (reportId == '') return;

    const handleGetReportDetail = async () => {
      try {
        const res = await getReportDetailAPI(reportId);
        console.log('get interest id res', res);
        setReportDetail(res.data);
      } catch (error) {
        console.log('get interest id err', error);
      }
    };

    handleGetReportDetail();
  }, [reportId]);

  const handleUpdateReportAccept = async (e) => {
    e.preventDefault();

    try {
      const res = await updateReportAcceptAPI(reportId, userId);
      await refreshList();
      toast.success(res?.data?.message || 'Cập nhật thành công');
    } catch (error) {
      console.log('update interest err', error);
    }
  };

  const handleUpdateReportReject = async (e) => {
    e.preventDefault();

    try {
      const res = await updateReportRejectAPI(reportId, userId);
      console.log('update reject response');
      await refreshList();
      toast.success(res?.data?.message || 'Cập nhật thành công');
    } catch (error) {
      console.log('update interest err', error);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        {/*Heading */}
        <div className={styles['content-heading']}>
          <h5>Chi tiết tố cáo</h5>
          <IoMdClose
            className={styles.close}
            size={24}
            onClick={() => {
              setReportId('');
            }}
          />
        </div>

        {/*Body */}
        <div className={styles['report-content']}>
          <p>
            <b>Trạng thái</b>: {reportDetail?.status}
          </p>
          <p>
            <b>Ngày tạo:</b> {formatDate(reportDetail?.createdAt)}
          </p>
          <p>
            <b>Người tố cáo:</b> {reportDetail?.reporterId}
          </p>
          <p>
            <b>Người bị tố cáo:</b> {reportDetail?.reportedAccountId}
          </p>
          <p>
            <b>Phòng tố cáo:</b> {reportDetail?.reportedRoomId}
          </p>
          <p>
            <b>Lý do:</b> {reportDetail?.reason}
          </p>
        </div>

        {/*Button */}
        <div className={styles['button-wrap']}>
          <button onClick={handleUpdateReportReject}>Từ chối</button>
          <button onClick={handleUpdateReportAccept}>Chấp nhận</button>
        </div>
      </div>
    </div>
  );
}

export default memo(ReportModal);

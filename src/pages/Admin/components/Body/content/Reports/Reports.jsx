import { useCallback, useEffect, useState } from 'react';
import { getReportListAPI } from '~/services/reportService';
import styles from './Report.module.scss';
import ReportModal from '~/pages/Admin/components/Body/content/Reports/ReportModal/ReportModal';
import { FaEye } from 'react-icons/fa';
import Pagination from '~/components/Pagination/Pagination';
import { formatDate } from '~/utils/transform';

function Reports() {
  const [reportList, setReportList] = useState([]);
  const [getReportType, setGetReportType] = useState('pending');

  const [reportId, setReportId] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = reportList.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleGetReportList = useCallback(async () => {
    try {
      const res = await getReportListAPI(getReportType);
      console.log('report list res', res.data);
      setReportList(res.data);
    } catch (error) {
      console.log('get report list err', error);
    }
  }, [getReportType]);

  useEffect(() => {
    handleGetReportList();
  }, [getReportType]);
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles['report-wrap']}>
          <div className={styles.heading}>
            <h3>Danh sách tố cáo</h3>

            {/*status of report */}
            <div className={styles['select-status']}>
              <p
                className={getReportType == 'pending' ? styles.active : undefined}
                onClick={() => setGetReportType('pending')}
              >
                Pending
              </p>
              <p
                className={getReportType == 'accepted' ? styles.active : undefined}
                onClick={() => setGetReportType('accepted')}
              >
                Accepted
              </p>
              <p
                className={getReportType == 'rejected' ? styles.active : undefined}
                onClick={() => setGetReportType('rejected')}
              >
                Rejected
              </p>
            </div>
          </div>

          <div className={styles['table-wrap']}>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '20%' }}>Lý do</th>
                  <th>Người tố cáo</th>
                  <th>Người bị tố cáo</th>
                  <th style={{ width: '15%' }}>Trạng thái</th>
                  <th>Ngày tạo</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {currentProduct.length > 0 ? (
                  currentProduct.map((item) => (
                    <tr key={item.reportId}>
                      <td style={{ fontWeight: 500 }}>{item.reason}</td>
                      <td className={styles['one-row']}>{item.reporterId}</td>
                      <td className={styles['one-row']}>{item.reportedAccountId}</td>
                      <td>
                        <span
                          className={
                            item.status === 'PENDING'
                              ? styles.pending
                              : item.status === 'ACCEPTED'
                              ? styles.accept
                              : styles.reject
                          }
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>{formatDate(item.createdAt)}</td>
                      <td>
                        <FaEye
                          size={24}
                          color="blue"
                          style={{ marginRight: 10, cursor: 'pointer' }}
                          onClick={() => {
                            setReportId(item.reportId);
                          }}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>
                      No report found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={reportList.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {reportId != '' && (
        <ReportModal refreshList={handleGetReportList} reportId={reportId} setReportId={setReportId} />
      )}
    </>
  );
}

export default Reports;

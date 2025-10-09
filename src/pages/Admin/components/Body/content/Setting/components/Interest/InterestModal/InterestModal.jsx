import { uppercaseFirstChar } from '~/utils/transform';
import styles from './InterestModal.module.scss';
import { IoMdClose } from 'react-icons/io';
import InputCustom from '~/components/InputCustom/InputCustom';
import { memo, useEffect, useState } from 'react';
import { handleInputChange } from '~/utils/helpers';
import { createInterestAPI, getInterestByIdAPI, updateInterestAPI } from '~/services/interestService';
import { toast } from 'react-toastify';
import { Image, Upload } from 'antd';
import { FaPlus } from 'react-icons/fa';
import uploadFile from '~/utils/uploadImg';

function InterestModal({ openModal, setOpenModal, refreshList, interestId, setInterestId }) {
  const [interestForm, setInterestForm] = useState({
    name: '',
    description: '',
    image: '',
  });

  // upload image
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChangeImage = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <FaPlus color="black" fontSize={30} />
      <div style={{ marginTop: 8, color: 'black' }}>Upload</div>
    </button>
  );

  // end upload image

  useEffect(() => {
    if (openModal == 'create') return;
    if (interestId == '') return;

    const handleGetInterestDetail = async () => {
      try {
        const res = await getInterestByIdAPI(interestId);
        console.log('get interest id res', res);
        setInterestForm({
          name: res.data.name ?? '',
          description: res.data.description ?? '',
          image: res.data.image ?? '',
        });
        if (res.data.image) {
          setFileList([
            {
              uid: '-1',
              name: 'image.png',
              status: 'done',
              url: res.data.image,
            },
          ]);
        }
      } catch (error) {
        console.log('get interest id err', error);
      }
    };

    handleGetInterestDetail();
  }, [interestId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (openModal == 'create') {
      let imageUrl = '';
      if (fileList[0]?.originFileObj) {
        imageUrl = await uploadFile(fileList[0].originFileObj);
      }
      const newInterestForm = {
        ...interestForm,
        image: imageUrl,
      };

      try {
        const res = await createInterestAPI(newInterestForm);
        setInterestForm({ name: '', description: '', image: '' });
        setFileList([]);

        await refreshList();

        toast.success(res.data.message);
      } catch (error) {
        console.log('create interest err', error);
      }
    } else if (openModal == 'edit') {
      let imageUrl = interestForm.image;

      // nếu có ảnh mới (người dùng thay)
      if (fileList[0]?.originFileObj) {
        imageUrl = await uploadFile(fileList[0].originFileObj);
      }
      // nếu xóa ảnh (fileList rỗng)
      else if (fileList.length === 0) {
        imageUrl = '';
      }

      const updatedForm = {
        ...interestForm,
        image: imageUrl,
      };
      try {
        const res = await updateInterestAPI(interestId, updatedForm);

        await refreshList();

        toast.success(res.data.message);
      } catch (error) {
        console.log('update interest err', error);
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
              setInterestId('');
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <InputCustom
            label={'Tên'}
            type={'text'}
            name={'name'}
            onChange={handleInputChange(setInterestForm)}
            value={interestForm.name}
            required
          />
          <InputCustom
            label={'Mô tả'}
            type={'text'}
            name={'description'}
            onChange={handleInputChange(setInterestForm)}
            value={interestForm.description}
            required
          />

          {/*Upload image */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'flex-start' }}>
            <p style={{ color: '#57298d', marginBottom: 10 }}>Add image</p>

            <div>
              <Upload
                action=""
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChangeImage}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            </div>

            {previewImage && (
              <Image
                wrapperStyle={{ display: 'none' }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                  zIndex: 2000,
                }}
                src={previewImage}
              />
            )}
          </div>
          {/*end upload image */}

          <button type="submit">{uppercaseFirstChar(openModal == 'create' ? 'Tạo mới' : 'Chỉnh sửa')}</button>
        </form>
      </div>
    </div>
  );
}

export default memo(InterestModal);

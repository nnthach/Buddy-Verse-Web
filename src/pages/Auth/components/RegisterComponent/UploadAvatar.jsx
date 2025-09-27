import { Image, Upload } from 'antd';
import { memo, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function UploadAvatar({ setFileList, fileList }) {
  // Start UPLOAD IMAGE
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
  // End IMAGE UPLOAD
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ color: '#57298d', marginBottom: 10 }}>Let's upload your avatar</p>

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
  );
}

export default memo(UploadAvatar);

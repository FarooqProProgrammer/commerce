import React,{useState} from 'react'
import { Button, Modal } from 'antd';

function ProductList({image,cursor}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageList,setImage] = useState(null);
  const showModal = (list) => {
    setImage(list)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className='w-[300px] h-[300px] border-2 border-black'>
          <img onClick={()=> showModal(image.img)} className={`cursor-${cursor}  w-full h-full`} src={image.img} alt="" />
    </div>



    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="w-full flex flex-col justify-around items-center">
          <div className="image w-[200px] h-[200px] border-2 border-black">
              <img className='w-full h-full' src={imageList} alt="" />
          </div>
          <p>Product Title</p>
          <p>Product Price</p>
        </div>
    </Modal>
    </>
  )
}

export default ProductList
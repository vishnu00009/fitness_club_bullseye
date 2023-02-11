import React from 'react';
import { Modal } from 'antd';
const ModelComponent = props => {
    return (
      <div>
        <Modal
          title="Confirmation"
          visible={props.visible}
          onOk={props.handleOk.bind(this)}
          onCancel={props.handleCancel.bind(this)}
        >
          <p>Are you sure you want to take this Book for lending?</p>         
        </Modal>
      </div>
    );
  }
  export default ModelComponent;
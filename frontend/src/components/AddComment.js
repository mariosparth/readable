import React, { Component } from "react";
import { Modal, Button, Form, Input, Select, message, notification } from "antd";
import { connect } from "react-redux";
import { addComment } from "../actions/comments";
import uuid from "uuid";

const { TextArea } = Input;

const FormItem = Form.Item;
const Option = Select.Option;

class AddComment extends Component {
  state = {
    id: uuid(),
    author: '',
    body: ''
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'New Comment has been added successfully',
      duration: 2.5
    });
  };


  handleOk = e => {
    const { id } = this.props;
    const comment = this.state;
    comment.parentId = id;
    comment.timestamp = Date.now();

    this.props.addComment(comment);
    this.setState({
      visible: false
    });

    this.openNotificationWithIcon('success');
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <div style={{ textAlign:'center' , margin: '20px'}}>
        <Button icon="file-add" className="Add-comment" type="primary" title="Add New Cooment" onClick={this.showModal}>
          Add Comment
        </Button>
        <Modal
          title="Add New Comment"
          visible={this.state.visible}
          onOk={this.handleOk}
          okText={"Submit"}
          onCancel={this.handleCancel}
        >
          <Form onSubmit={this.handleSubmit}>

            <FormItem {...formItemLayout} label="Author">
              {
                <Input
                  type="text"
                  name="author"
                  value={this.state.author}
                  onChange={e => this.handleChange(e)}
                  required
                />
              }
            </FormItem>
            <FormItem {...formItemLayout} label="Body">
              {
                <TextArea
                  rows={6}
                  name="body"
                  value={this.state.body}
                  onChange={e => this.handleChange(e)}
                />
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps, { addComment })(AddComment);

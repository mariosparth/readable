import React, { Component } from "react";
import { Modal, Button, Form, Input, Select, notification, Popconfirm } from "antd";
import { connect } from "react-redux";
import { getComment, editComment, deleteComment } from "../actions/comments";
import { withRouter } from 'react-router';

const { TextArea } = Input;

const FormItem = Form.Item;
const Option = Select.Option;

class EditComment extends Component {
  state = {
    visible: false
  };

  componentDidMount() {
    const { commentId } = this.props;
    this.props.getComment(commentId);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showModal = () => {
    this.setState({
      visible: true,
      id: this.props.commentId
    });
  };

  openNotificationWithIcon = (type) => {
    if(type === 'success'){
      notification[type]({
        message: 'The Comment has been upadted',
        duration: 2.5
      });

  } else {
    notification['success']({
      message: 'The Comment has been deleted',
      duration: 2.5
    });
    }
  };

  handleOk = () => {
    const data = this.state;
    this.props.editComment(data);
    this.setState({
      visible: false
    });
    this.openNotificationWithIcon('success');
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  deleteComment = () => {
    const data = this.state;
    this.props.deleteComment(data);
    this.openNotificationWithIcon('successDeletion');
  }

  render() {
     const { comments } = this.props.comments;
   //  console.log(comments);

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
      <div>
        <div className="action-controls comment">
          <Button icon="edit" type="primary" title="Edit Comment" onClick={this.showModal} />

          <Popconfirm title="Are you sure delete this post?" onConfirm={this.deleteComment}  okText="Yes" cancelText="No"  placement="bottomRight">
              <Button icon="delete" type="danger"  title="Delete Comment" />
          </Popconfirm>

        </div>

        <Modal
          title="Edit Comment"
          visible={this.state.visible}
          onOk={this.handleOk}
          okText={"Submit"}
          onCancel={this.handleCancel}
        >
          <Form>
          <FormItem {...formItemLayout} label="Author">
              {
                <Input
                  type="text"
                  name="author"
                  value={this.state.id}
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

const mapStateToProps = ({comments, comment}) => {
    return {
      comments: comments,
      comment: comments.comment
    }
 };

export default withRouter(connect(mapStateToProps, { getComment, editComment, deleteComment })(EditComment));

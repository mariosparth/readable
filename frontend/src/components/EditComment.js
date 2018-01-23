import React, { Component } from "react";
import { Modal, Button, Form, Input, Select, notification, Popconfirm } from "antd";
import { connect } from "react-redux";
import { getComment, editComment, deleteComment } from "../actions/posts";
import { withRouter } from 'react-router';

const { TextArea } = Input;

const FormItem = Form.Item;
const Option = Select.Option;

class EditComment extends Component {
  state = {

  };

  componentDidMount() {
  }

  componentWillReceiveProps({post}) {
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showModal = () => {
    this.setState({
      visible: true
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
    const { categories} = this.props;

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
          title="Edit the post"
          visible={this.state.visible}
          onOk={this.handleOk}
          okText={"Submit"}
          onCancel={this.handleCancel}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="Category">
              {
                <Select
                  name="category"
                  type="text"
                  value={this.state.category}
                  onChange={this.handleChangeSelect}
                >
                  {categories &&
                    Object.keys(categories).map((category, index) => {
                      return (
                        <Option
                          key={categories[category].name}
                          value={categories[category].name}
                        >
                          {categories[category].name}
                        </Option>
                      );
                    })}
                </Select>
              }
            </FormItem>
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
            <FormItem {...formItemLayout} label="Title">
              {
                <Input
                  type="text"
                  name="title"
                  value={this.state.title}
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
            <FormItem style={{display: 'none'}}>
              {<Button onClick={() => this.handleOk()}>Add a Post</Button>}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ posts, categories }) => {
    return {
      categories,
      post: posts.thisPost
    }
 };

export default withRouter(connect(mapStateToProps, { getPost, editComment, deleteComment })(EditComment));

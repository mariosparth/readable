import React, { Component } from "react";
import { Modal, Button, Form, Input, Select, message, notification } from "antd";
import { connect } from "react-redux";
import { addPost } from "../actions/posts";
import uuid from "uuid";

const { TextArea } = Input;

const FormItem = Form.Item;
const Option = Select.Option;

class AddPost extends Component {
  state = {
    id: uuid(),
    author: "",
    category: "",
    title: "",
    body: "",
    voteScore: 1,
    timestamp: Date.now()
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate() {
    let msg = "";
    if (this.state.author === "") {
      msg = msg + "Author is required.\n";
    }
    if (this.state.title === "") {
      msg = msg + "Title is required.\n";
    }
    if (this.state.body === "") {
      msg = msg + "Body is required.\n";
    }
    if (this.state.category === "") {
      msg = msg + "Category is required.\n";
    }

    if (msg === "") {
      return;
    }
    return message.error(msg);
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };


  openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'New Post has been added successfully',
      duration: 2.5
    });
  };


  handleOk = e => {
    this.validate();
    const dataPost = this.state;
    this.props.addPost(dataPost);
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

  handleChangeSelect = val => {
    this.setState({ category: val});
  }

  render() {
    const { categories } = this.props;

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
        <Button icon="file-add" className="Add-post" title="Add New Post" onClick={this.showModal} />
        <Modal
          title="Add New Post"
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
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { addPost })(AddPost);

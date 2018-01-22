import React, { Component } from "react";
import { Modal, Button, Icon, Form, Input, Select } from "antd";
import { connect } from "react-redux";
import { getPost, editPost } from "../actions/posts";
import uuid from "uuid";

const { TextArea } = Input;

const FormItem = Form.Item;
const Option = Select.Option;

class EditPost extends Component {
  state = {
    author: '',
    category: '',
    title: '',
    body: '',
    timestamp: Date.now()
  };

  componentDidMount() {
    const { id } = this.props;
    this.props.getPost(id);
  }

  componentWillReceiveProps({post}) {
    this.setState({...post});
    console.log(this.state);
  }

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
    return alert(msg);
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    const editPostData = this.state;
    this.props.editPost(editPostData);
    this.setState({
      visible: false
    });
    console.log('this.state.visible', this.state.visible);
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
        <div className="action-controls">
          <Button icon="edit" type="primary" title="Edit Post" onClick={this.showModal} />
          <Button icon="delete" type="danger"  title="Delete Post" onClick={this.deletePost} />
        </div>

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

export default connect(mapStateToProps, { getPost, editPost })(EditPost);

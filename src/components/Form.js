import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      task_name:'',
      task_level: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value  = target.type === 'checkbox' ? target.checked : target.value;
    const name   = target.name;

    this.setState({
      [name]:value
    });
  }

  handleSubmit(event){
    let item = {
      name: this.state.task_name,
      level:this.state.task_level
    };
    this.props.onClickSubmit(item);
    event.preventDefault();
  }

  handleCancle=()=>{
    this.props.onClickClose();
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-offset-7 col-md-5">
            <form onSubmit={this.handleSubmit} className="form-inline">

              <div className="form-group">
                <label className="sr-only">label</label>
                <input value={this.state.task_name} onChange={this.handleChange} name="task_name" type="text" className="form-control" placeholder="Tên bài hát"/>
              </div>

              <div className="form-group">
                <label className="sr-only">label</label>
                <select value={this.state.task_level} onChange={this.handleChange} name="task_level" className="form-control" required="required"> Small
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>Hight</option>
                </select>
              </div>

              <button  type="submit" className="btn btn-primary">Thêm</button>
              <button type="button" className="btn btn-default"
                  onClick={this.handleCancle}
              >Đóng</button>
            </form>
          </div>
        </div>
    );
  }
}

export default Form;

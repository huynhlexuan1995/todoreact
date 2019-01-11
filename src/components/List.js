import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  constructor(props){
    super(props);
    
    this.state={

    }
  }


  render() {
    const items    = this.props.items;
    const elmItem = items.map((item,index)=>{
      return (
        <Item 
          key={index} 
          item={item} 
          index={index}
          onClickDelete={this.props.onClickDelete}
        />
      );
    });
    return (
      <div className="panel panel-success">
        <div className="panel-heading">Nhạc Việt</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{width: '10%'}} className="text-center">STT</th>
              <th>Danh sách bài hát</th>
              <th style={{width: '20%'}} className="text-center">Độ yêu thích</th>
              <th style={{width: '20%'}} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>{elmItem}</tbody>
        </table>
      </div>
    );
  }
}

export default List;

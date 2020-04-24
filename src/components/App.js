import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hienThiForm:true,
      data: [],
      searchText: '',
      editUserStatus: false 
    }
  }
  
  componentWillMount() {
    // kiem tra
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }
  

  deleteUser = (idUser) => {
    let tempData = this.state.data.filter((item) => item.id !== idUser);
    this.setState({
      data:tempData
    });
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }

  editUser = (user) => {
    this.setState({
      userEditObject:user
    })   
  }

  getNewUserData = (name, tel, Permission) => {
    let item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    let items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    localStorage.setItem('userData',JSON.stringify(items));
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    })
 
  }
  
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
 
  render() {
    
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item)
      }
    }) 
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
              getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
              userEditObject={this.state.userEditObject}
              doiTrangThai={() => this.doiTrangThai()} 
              hienThiForm={this.state.hienThiForm} 
              checkConnectProps={(dl) => this.getTextSearch(dl)}
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <TableData 
              deleteUser = {(idUser) => this.deleteUser(idUser)}
              editFun={(user) => {this.editUser(user)}} 
              dataUserProps={ketqua}
              changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <AddUser add={(name, tel, Permission) => {this.getNewUserData(name, tel, Permission)}} hienThiForm={this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default App;



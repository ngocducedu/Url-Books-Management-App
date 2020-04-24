import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:'',
            userObj: {}
        }
    }
    
    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        })
        this.props.getUserEditInfoApp(info);
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus) {
            return (
                <EditUser 
                getUserEditInfo = {(info) => this.getUserEditInfo(info)}
                userEditObject={this.props.userEditObject}
                changeEditUserStatus={() => this.props.changeEditUserStatus()}
                />
            )
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue:event.target.value 
        })
        this.props.checkConnectProps(this.state.tempValue)
    }

    hienThiNut = () => {
        if (this.props.hienThiForm) {
            return <div className=" btn btn-block btn-outline-secondary" onClick={() => this.props.doiTrangThai()}>Đóng lại</div>
            
        }
        else {
            return <div className=" btn btn-block btn-outline-info" onClick={() => this.props.doiTrangThai()}>Thêm mới</div>
            
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className=" col-12 btn-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khoá" onChange={(event) => this.isChange(event)}/>
                    <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                    <div className="btn-group1">
                        {this.hienThiNut()}
                    </div>
                </div>

               
                <hr/>
            </div>
        )
    }
}

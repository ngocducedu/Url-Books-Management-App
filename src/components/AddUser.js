import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            Permission:""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        
        this.setState({
            [name]:value
        });

        var item = {};

    }
    kiemTraTrangThai = () => {
        if(this.props.hienThiForm) {
            return (
                <div>     
                    <div className="col">       
                        <form>   
                            <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                                <div className="card-header">Thêm mới User vào hệ thống</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                    <input onChange={(event) => {this.isChange(event)}} name="name" type="text" className="form-control" placeholder="Tên User" />
                                    </div>
                                    <div className="form-group">
                                    <input onChange={(event) => {this.isChange(event)}}  name="tel" type="text" className="form-control" placeholder="Điện thoại" />
                                    </div>
                                    <div className="form-group">
                                    <select  onChange={(event) => {this.isChange(event)}} name="Permission" className="custom-select">
                                        <option defaultValue>Chọn Quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    </div>
                                    <div className="form-group">
                                    <input type="reset" onClick={(name, tel, Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} className="btn btn-block btn-primary" value="Thêm mới"/>
                                    
                                    </div>
                                </div>
                                
                            </div>
                        </form>
                    </div>   
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                {
                    this.kiemTraTrangThai()
                }
            </div>               
        )
    }
}

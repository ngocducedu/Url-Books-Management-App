import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

export default class TableData extends Component {
    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
        console.log('id nhan dc o TableData.js', idUser);
        
    }

    mappingDataUser = () => {
        return this.props.dataUserProps.map((value, key) => {
            return (
                <TableDataRow 
                deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
                changeEditUserStatus={() => this.props.changeEditUserStatus()}
                editFunClick={() => this.props.editFun(value)}  
                userName={value.name} 
                key={key} 
                stt={key} tel={value.tel} 
                permission={value.Permission}
                id={value.id}
                />
            )
        })
    }

    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()  }             
                    </tbody>
                </table>
            </div>
        )
    }
}

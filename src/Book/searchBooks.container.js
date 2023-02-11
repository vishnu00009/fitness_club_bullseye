import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';
import '../index.css';
import {Select,Input,Button,Row, Col} from "antd";
const Search = Input.Search;
// const InputGroup = Input.Group;
const Option = Select.Option;
const BooksSearchBarComponent = props => {  
    return (        
      <div >                
        <Row>
            <Col span={2}>
            <Select defaultValue="Book Name" 
                    onChange={props.handleSearchTypeChange.bind(this)} 
            >
                <Option value="isbn">ISBN</Option>
                <Option value="author">Author</Option>
                <Option value="bookName">Book Name</Option>
              </Select>
              </Col>
            <Col span={6}><Search
              placeholder="input search text"
              onSearch={value => props.filterDataSource(value,props.tabName)}
              enterButton
            /></Col>
            <Col offset={1} span={6}><Button 
              type="primary"
              onClick={props.resetSearch.bind(this)}>Reset search</Button></Col>
        </Row>       
      </div>      
    );
  }
export default BooksSearchBarComponent;

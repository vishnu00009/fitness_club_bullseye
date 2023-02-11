import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';
import './index.css';
// import {Table,Select,Input,Button} from "antd"
import BookContainer from "./Book/books.container";
// const Search = Input.Search;
// const InputGroup = Input.Group;
// const Option = Select.Option;

class App extends Component {  
   render() { 
    return (
        <BookContainer />
    );
  }
}

export default App;

import {InputGroup, Form, Button, DropdownButton, Dropdown, Row, Col} from 'react-bootstrap';
import style from './search.module.css';
import DatePicker from "react-datepicker";
import {connect} from 'react-redux';
import types from '../../Redux/actionTypes';
import {handleSubmitThunk} from '../../Redux/action';
import {useEffect} from 'react';

const Search = (props) => {
const {
  searchState,
  onChangeInputSearch,
  onChangeDropdown,
  setDate,
  handleSubmit,
  resetState
} = props;

const sortVariants = [
  {
    lable:'A-Z',
    value:'a-z'
  },
  {
    lable:'Z-A',
    value:'z-a'
  },
  {
    lable:'Creation_Date_Oldest',
    value:'creation_date_oldest'
  },
  {
    lable:'Creation_Date_Newest',
    value:'creation_date_newest'
  },
  {
    lable:'Completion_Date_Oldest',
    value:'completion_date_oldest'
  },
  {
    lable:'Completion_Date_Newest',
    value:'completion_date_newest'
  }
]
const statusVariants = [
  {
    lable:'Active',
    value:'active'
  },
  {
    lable:'Done',
    value:'done'
  }
]

const statusJSX = statusVariants.map((status, index) => {
  return (
    <Dropdown.Item 
      key={index}
      onClick={() => onChangeDropdown('status', status.value)}
    >
      {status.lable}
    </Dropdown.Item>
  )
});
const sortJSX = sortVariants.map((sort, index) => {
  return (
    <Dropdown.Item 
      key={index}
      onClick={() => onChangeDropdown('sort', sort.value)}
    >
      {sort.lable}
    </Dropdown.Item>
  )
});

useEffect(() => {
  return () => {
    resetState();
  }
}, [])
  return (
      <Form className={style.Form}>
      <InputGroup className="mb-3">
            <Form.Control 
              value={searchState.search}
              onChange={onChangeInputSearch}
              placeholder='Search'
            />
            <Button 
              className='ml-3'
              onClick={() => handleSubmit(searchState)}
            >
              Search
            </Button>
      </InputGroup>
      <Row className='justify-content-center mb-3'>
      <DropdownButton  
        className='mr-3' 
        variant='info' 
        title={searchState.status || 'Status'}
      >
        {statusJSX}
      </DropdownButton>
      <DropdownButton 
        variant='info' 
        title={searchState.sort || 'Sort'}
      >
        {sortJSX}
      </DropdownButton>
      </Row>
      <Row className={style.date}>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Create_lte</Form.Label>
          <DatePicker selected={searchState.create_lte} onChange={(date) => setDate(date, 'create_lte')} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Create_gte</Form.Label>
          <DatePicker selected={searchState.create_gte} onChange={(date) => setDate(date, 'create_gte')} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Complete_lte</Form.Label>
          <DatePicker selected={searchState.complete_lte} onChange={(date) => setDate(date, 'complete_lte')} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Complete_gte</Form.Label>
          <DatePicker selected={searchState.complete_gte} onChange={(date) => setDate(date, 'complete_gte')} />
        </Form.Group>
      </Row>
      </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    searchState: {...state.searchState}
  }
}
const mapStateToDispatch = (dispatch) => {
  return{
    onChangeInputSearch: (e) => dispatch({type: types.SEARCH_ON_CHANGE, e}),
    onChangeDropdown: (name, value) => dispatch({type: types.DROP_DOWN_ONCHANGE, name, value}),
    setDate: (date, name) => dispatch({type: types.SET_SEARCH_DATE, date, name}),
    handleSubmit: (searchState) => {
      dispatch((dispatch) => handleSubmitThunk(dispatch, searchState));
    },
    resetState: () => dispatch({type: types.RESET_SEARCH_STATE})
  }
}


export default connect(mapStateToProps, mapStateToDispatch)(Search);
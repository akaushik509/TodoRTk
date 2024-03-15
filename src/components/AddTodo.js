import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slice/todoSlice';
import { Input, Button, FormControl, FormLabel, Flex } from "@chakra-ui/react";

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Flex direction="column" alignItems="center" justify="center" w="100%" maxW="400px" mx="auto">
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FormControl>
          <FormLabel>TODO APP</FormLabel>
          <Input type="text" value={text} onChange={handleChange} placeholder="Add new todo" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" width="100%">
          Add
        </Button>
      </form>
    </Flex>
  );
};

export default AddTodo;

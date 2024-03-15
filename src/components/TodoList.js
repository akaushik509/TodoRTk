import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../Slice/todoSlice';
import { Checkbox, Text, UnorderedList, ListItem, IconButton, Box } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const completedTasks = todos.filter(todo => todo.completed);
  const remainingTasks = todos.filter(todo => !todo.completed);

  return (
    <div>
        <Text fontSize="xl" fontWeight="bold" textAlign={"center"} mt={4}>Pending Tasks</Text>
      <UnorderedList>
        {remainingTasks.map((todo) => (
          <Box
            key={todo.id}
            p={4}
            boxShadow="md"
            borderRadius="md"
            bg="white"
            _hover={{ boxShadow: "lg" }}
            cursor="pointer"
            mb={4}
            width="500px"
            margin="auto"
          >
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Checkbox
                isChecked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                mr={4}
                cursor="pointer"
              />
              <Text
                flex="1"
                textDecoration={todo.completed ? 'line-through' : 'none'}
                cursor="pointer"
              >
                {todo.text}
              </Text>
              <IconButton
                icon={<DeleteIcon />}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(todo.id);
                }}
                aria-label="Delete"
                variant="ghost"
                colorScheme="red"
                cursor="pointer"
              />
            </ListItem>
          </Box>
        ))}
      </UnorderedList>
      
      {completedTasks.length > 0 && (
        <>
          <Text fontSize="xl" fontWeight="bold" textAlign={"center"} mt={4}>Completed Tasks</Text>
          <UnorderedList>
            {completedTasks.map((todo) => (
              <Box
                key={todo.id}
                p={4}
                boxShadow="md"
                borderRadius="md"
                bg="white"
                _hover={{ boxShadow: "lg" }}
                cursor="pointer"
                mb={4}
                width="500px"
                margin="auto"
              >
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Checkbox
                    isChecked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                    mr={4}
                    cursor="pointer"
                  />
                  <Text
                    flex="1"
                    textDecoration={todo.completed ? 'line-through' : 'none'}
                    cursor="pointer"
                  >
                    {todo.text}
                  </Text>
                  <IconButton
                    icon={<DeleteIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(todo.id);
                    }}
                    aria-label="Delete"
                    variant="ghost"
                    colorScheme="red"
                    cursor="pointer"
                  />
                </ListItem>
              </Box>
            ))}
          </UnorderedList>
        </>
      )}
    </div>
  );
};

export default TodoList;

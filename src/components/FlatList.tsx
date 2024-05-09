import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useTaskContext } from '../contexts/TaskContext';
import { Item } from './Item';
import { NotFound } from './NotFound/NotFound';

export const FlatListTask = () => {
  const { taskList } = useTaskContext()

  const filteredTaskList = taskList.filter(item => item.text !== '')

  if(filteredTaskList.length === 0) {
    return <NotFound type='sad' />
  }

  return (
    <FlatList
      data={filteredTaskList} 
      keyExtractor={item => item.id.toString()}
      renderItem={({ item, index }) => (
        <Item key={index} item={item} />
      )}
    />
  )
}

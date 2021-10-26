import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View , SafeAreaView, Keyboard, ScrollView} from 'react-native';
import Task from './components/Task';
import FinishedTask from './components/FinishedTask';
import appColors from './assets/colors';

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);


  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask(null);
  }
  
  const completeTask = (index) => {
    let taskListCopy = [...taskList];
    let finishedListCopy = [...finishedTasks];

    finishedListCopy.push(taskList[index]);
    taskListCopy.splice(index, 1);
    
    setTaskList(taskListCopy);
    setFinishedTasks(finishedListCopy);
  }

  const restoreTask = (index) => {
    let taskListCopy = [...taskList];
    let finishedListCopy = [...finishedTasks];

    taskListCopy.push(finishedListCopy[index]);
    finishedListCopy.splice(index, 1);
    
    setTaskList(taskListCopy);
    setFinishedTasks(finishedListCopy);
  }

  const deleteTask = (index) => {
    let finishedListCopy = [...finishedTasks];
    
    finishedListCopy.splice(index, 1);
    
    setFinishedTasks(finishedListCopy);
  }

  const reorder = (index, direction) => {
    let itemsCopy = [...taskList];
    
    if(index + direction < 0 || index + direction > itemsCopy.length)
      return;

    var new_index = index + direction;
    if (new_index >= itemsCopy.length) {
      var k = new_index - itemsCopy.length + 1;
      while (k--) {
          itemsCopy.push(undefined);
      }
    }
    itemsCopy.splice(new_index, 0, itemsCopy.splice(index, 1)[0]);
    setTaskList(itemsCopy);
  }

  return (
    <SafeAreaView style = {styles.container}>
      {/*Todays Tasks*/} 
      
      <ScrollView 
      contentContainerStyle={{
        flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'
      style = {styles.scrollView}>
        <View style = {styles.taskWrapper}>
          <Text style = {styles.sectionTitle}>Todays Tasks</Text>
          <View style = {styles.items}>
            {
              taskList.map((item, index) => {
                return (
                    <Task
                      key = {index} 
                      text = {item}
                      onCheck = {() => completeTask(index)}
                      upArrow = {() => reorder(index, -1)}
                      downArrow = {() => reorder(index, 1)}
                    />
                )
              })
            }
          </View>

          <Text style = {styles.sectionTitle}>Finished Tasks</Text>
          <View style = {styles.items}>
            {
              finishedTasks.map((item, index) => {
                return (
                    <FinishedTask
                      key = {index} 
                      text = {item}
                      onCheck = {() => {
                        restoreTask(index);
                      }}
                      onDelete = {() => {
                        deleteTask(index);
                      }}
                    />
                )
              })
            }
          </View>
 
        </View>

        
      </ScrollView>

      {/*Add task*/}
      <KeyboardAvoidingView
      behavior = {Platform.OS === "ios" ? "padding" : "height"}
      style = {styles.writeTaskWrapper}>
        <TextInput 
          style = {styles.inputTask} 
          placeholder = {"Write a task"} 
          placeholderTextColor = {appColors.white}
          value = {task}
          onChangeText = {text => setTask(text)}/> 
        
        <TouchableOpacity onPress = {handleAddTask}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: appColors.grey,
  },
  scrollView: {
    marginBottom: 80
  },
  taskWrapper: {
    marginTop: 0,
    marginHorizontal:20 
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColors.white,
    marginTop: 40
  },
  items: {
    paddingTop: 20
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputTask: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: appColors.black,
    borderRadius: 20,
    color: appColors.white,
    borderColor: appColors.trueBlack,
    borderWidth: 2
  },
  addWrapper: {
    backgroundColor: appColors.black,
    borderRadius: 20,
    padding: 10,
    aspectRatio: 1,
    borderColor: appColors.trueBlack,
    borderWidth: 2
  },
  addText: {
    color: appColors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Alert, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import TaskItem from "./TaskItem";
import { deleteTask, getTasks } from "../api";


const TasksList = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();

  const getUsers = async () => {
    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
    await getUsers();
    setRefreshing(false);
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await getUsers();
  };

  useEffect(() => {
    getUsers();
    console.log("called");
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <TaskItem task={item} handleDelete={handleDelete} />
  );

  return (
    
    <View style={styles.chartContainer}>
    <Text style={styles.chartTitle}>Gráfico de Líneas de Valores</Text>
    </View>
  );
};

export default TasksList;

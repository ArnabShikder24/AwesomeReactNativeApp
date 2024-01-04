import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import GoalInput from "../components/GoalInput";
import GoalList from "../components/GoalList";
import { useState } from "react";

const Goal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [allText, setAllText] = useState([]);
    const goalHandler = (text) => {
        setAllText(currentAllText => {
        if (text == '') {
            return [...currentAllText];
        }
        return [...currentAllText, {list: text, id: Math.random().toString()}];
        });
    }
    const deleteGoalHandler = (id) => {
        setAllText(currentAllText => {
            return currentAllText.filter(item => item.id !== id)
        });
    }
    return (
        <View style={styles.appContainer}>
            <Button title="Add New Goal" color="#5e0acc" onPress={() =>  setIsOpen(true)} />
            {isOpen && <GoalInput goalHandler={goalHandler} isOpen={isOpen} setIsOpen={setIsOpen} />}
            <View style={styles.goalContainer}>
                <Text style={{fontSize: 18, marginVertical: 10, color: 'white'}}>List of Goal...</Text>
                <FlatList
                data={allText}
                renderItem={itemData => <GoalList value={itemData.item} deleteGoalHandler={deleteGoalHandler} />}
                keyExtractor={(item, index) => item.id}
                alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
};

export default Goal;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#303952'
    },
    goalContainer: {
        flex: 5
    }
});
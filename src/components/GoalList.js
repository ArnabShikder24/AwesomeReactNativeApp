import { View, Text, Pressable } from "react-native";

const GoalList = ({value, deleteGoalHandler}) => {
    return (
        <View style={{marginBottom: 10, backgroundColor: '#0077b6', borderRadius: 6}}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({pressed}) => pressed && {opacity: 0.8}} onPress={() => deleteGoalHandler(value.id)}>
                <Text style={{color: 'white', fontSize: 17, padding: 12}}>{value.list}</Text>
            </Pressable>
        </View>
    );
};

export default GoalList;
import {
  FlatList,
  TextInput,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import TrackListItem from "../../components/TrackListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { tracks } from "../../../assets/data/track";
import Colors from "@/src/constants/Colors";

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        {/* Header */}
        <FontAwesome name="search" size={16} color="gray" />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="What do you want to listen to?"
          style={[
            styles.input,
            {
              backgroundColor: Colors[colorScheme ?? "light"].background,
              color: Colors[colorScheme ?? "light"].text,
            },
          ]}
        />
        <Text
          onPress={() => setSearch("")}
          style={{ color: Colors[colorScheme ?? "light"].text }}
        >
          Cancel
        </Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    color: "white",
  },
});

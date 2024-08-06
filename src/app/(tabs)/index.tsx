import { FlatList } from "react-native";
import { tracks } from "../../../assets/data/track";
import TrackListItem from "../../components/TrackListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 8 }}
    />
  );
}

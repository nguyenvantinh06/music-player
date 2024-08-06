import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";
import { Track } from "../types";
import Colors from "../constants/Colors";

type TrackListItemProps = {
  track: Track;
};

export default function TrackListItem({ track }: TrackListItemProps) {
  const colorScheme = useColorScheme();
  return (
    <Pressable onPress={() => {}} style={styles.container}>
      <Image
        source={{ uri: track.album.images[0]?.url }}
        style={styles.image}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={[styles.title, { color: Colors[colorScheme ?? "light"].text }]}
        >
          {track.name}
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: Colors[colorScheme ?? "light"].text },
          ]}
        >
          {track.artists[0]?.name}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontWeight: "500",
    fontSize: 16,
  },
  subtitle: {
    color: "gray",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
});

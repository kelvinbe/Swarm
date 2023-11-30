import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  Alert,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useTheme, Skeleton, makeStyles } from "@rneui/themed";
import IconButton from "../../../components/Atoms/Buttons/IconButton";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import { BottomSheet } from "@rneui/base";
import SummaryList from "../../../components/Organisims/Topics/SummaryList";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";
import { useEffect, useState } from "react";
import SwarmForm from "../../../components/Organisims/Swarms/SwarmForm";
import axios from "axios";
import { NEWS_API_KEY } from "@env";
import { supabase } from "../../../lib/supabase";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

const HomeView = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("Technology");
  const [swarmFormVisible, setSwarmFormVisible] = useState(false);
  const [dataL, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dbData, setDBData] = useState([]);
  const styles = useStyles();

  const { push } = useRouter();
  const onFilterApply = () => {
    setIsVisible(false);
    /**
     * @todo implement other logic here
     */
  };
  const onBackdropPress = () => {
    setIsVisible(false);
  };
  const handleCreateSwarm = () => {
    // push('/categories')
    setSwarmFormVisible(true);
    setIsVisible(true);
  };

  const options = {
    method: "POST",
    url: "https://realtor.p.rapidapi.com/properties/v3/list",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "66f5d56857msh6afbfded9d0045ap13f7ffjsn162c3d12f50a",
      "X-RapidAPI-Host": "realtor.p.rapidapi.com",
    },
    data: {
      limit: 200,
      offset: 0,
      postal_code: "90004",
      status: ["for_sale", "ready_to_build"],
      sort: {
        direction: "desc",
        field: "list_date",
      },
    },
  };

  const fetchData = async (search: string) => {
    try {
      setLoading(true);
      const response = await axios.request(options);

      if (response) {
        const filteredData = response.data?.data?.home_search.results.slice(50);
        return filteredData;
      } else {
        console.error("Invalid API response:", response);
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const showAlert = () => {
    Alert.alert(
      "Info",
      "Development is still ongoing. Updates Coming Soon. Please press close",
      [{ text: "Close", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      const filteredData = await fetchData(search);
      setData(filteredData);
      setLoading(false);
    };

    setTimeout(() => {
      showAlert();
    }, 3000);

    fetchDataAndUpdateState();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 15 }}>
        {loading ? <View testID="loading-indicator" style={styles.loader}><ActivityIndicator size={"large"} /></View>: <SummaryList data={dataL} />}
      </ScrollView>
    </View>
  );
};

export default HomeView;

const useStyles = makeStyles((theme) => ({
  container: { 
    backgroundColor: theme.colors.background,
    padding: 15,
    flex: 1,
  },
  lottie: {
    width: 100,
    height: 100,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

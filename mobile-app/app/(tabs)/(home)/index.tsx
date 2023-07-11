import { View, Text, ScrollView, FlatList } from "react-native";
import ActionButton from "../../../components/Atoms/Buttons/ActionButton";
import BaseInput from "../../../components/Atoms/Inputs/BaseInput";
import ImageIconButton from "../../../components/Atoms/Buttons/ImageIconButon";
import Divider from "../../../components/Atoms/Divider/Divider";
import IconButton from "../../../components/Atoms/Buttons/IconButton";
import InputWithIcon from "../../../components/Atoms/Inputs/InputWithIcon";
import TextArea from "../../../components/Atoms/Inputs/TextArea";
import ToggleField from "../../../components/Atoms/Toggles/ToggleField";
import SummaryCard from "../../../components/Molecules/Cards/SummaryCard";
import CategoryIconCard from "../../../components/Atoms/IconCards/CategoryIconCard";
import AvatarWithText from "../../../components/Atoms/IconCards/AvatarWithText";
import Login from "../../../components/Organisims/Authentication/Login";
import Logo from "../../../components/Atoms/Brand/Logo";
import { Link } from "expo-router";

const HomeView = () => {
  return (
    <ScrollView>
      <View style={{ padding: 10, gap: 4 }}>
        {/* <Link href={"/categories"}>Link here</Link> */}
      </View>
    </ScrollView>
  );
};

export default HomeView;

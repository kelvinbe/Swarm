import { View, Text, ScrollView, FlatList} from "react-native";
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

const HomeView = ()=>{

    const onGoogleLogin = ()=>{
        alert('Login with Google')
        /**
         * @todo Implement login with google
         */
    }
    const onMicrosoftLogin = ()=>{
        alert('Login with Microsoft')
        /**
         * @todo Implement login with google
         */
    }
    const onFacebookLogin = ()=>{
        alert('Login with Facebook')
        /**
         * @todo Implement login with google
         */
    }
    const onAppleLogin = ()=>{
        alert('Login with Apple')
        /**
         * @todo Implement login with google
         */
    }


    const summaries = [
        {
            imageUri: "https://source.unsplash.com/random?sig=0",
            title: "Emerging Technologies",
            summary: `Exploring advancements in fields such as virtual reality and their potential impact on various industries.`
        },
        {
            imageUri: "https://source.unsplash.com/random?sig=0",
            title: "Data Privacy and Security",
            summary: `Examining the implications of data privacy, cybersecurity, and the balance between data protection and innovation.`
        },
        {
            imageUri: "https://source.unsplash.com/random?sig=0",
            title: "AI in Healthcare",
            summary: `Exploring the potential applications, benefits, and ethical considerations of AI in the healthcare industry.`
        },
        {
            imageUri: "https://source.unsplash.com/random?sig=0",
            title: "Social Justice and Equality",
            summary: `Engaging in conversations about social issues, discrimination, inclusivity, and strategies for promoting equality.`
        }
    ]
    return(
        <ScrollView>
            <View style={{padding: 10, gap: 4}}>
                {/* <Text>Home View</Text> */}
                {/* <ActionButton fullWidth onPress={()=>alert('Today')}>Just A Button</ActionButton> */}
                {/* <BaseInput placeholder="Sample placeholder"></BaseInput> */}
                {/* <ImageIconButton title="Continue with Google" image={require("../../../assets/images/Google.png")} onPress={onGoogleLogin}/>
                <ImageIconButton title="Continue with Microsoft" image={require("../../../assets/images/Microsoft.png")} onPress={onMicrosoftLogin}/>
                <ImageIconButton title="Continue with Facebook" image={require("../../../assets/images/Facebook.png")} onPress={onFacebookLogin}/>
                <ImageIconButton title="Continue with Apple" image={require("../../../assets/images/Apple.png")} onPress={onAppleLogin}/> */}
                {/* <Divider>Or</Divider> */}
                {/* <IconButton title="Create Swarm" name="add" onPress={()=>alert('Icon button')}/> */}
                {/* <InputWithIcon name="search" placeholder="Search"/> */}
                {/* <TextArea /> */}
                {/* <ToggleField title="Sample title" border onCheck={()=>alert('sth')} padding/> */}
                {/* <View>
                    {summaries.map((item, index)=>(
                        <SummaryCard key={index} imageUri={item.imageUri} title={item.title} summary={item.summary} onPress={()=>alert('View Card')}/>
                    ))}
                </View> */}
                <CategoryIconCard title="Technology" onPress={()=>alert('This is an Icon cardd')} image="https://source.unsplash.com/random?sig="/>
                <AvatarWithText content="Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim" abbreviation="Q1." border/>
                {/* <FlatList data={summaries} style={{flexDirection: 'row',}} numColumns={2} renderItem={({item})=>(
                    
                )}>

                </FlatList> */}
            </View>
        </ScrollView>
    )
}

export default HomeView
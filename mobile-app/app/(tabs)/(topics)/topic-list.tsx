import { ScrollView, View } from "react-native";
import TopicCard from "../../../components/Molecules/Cards/TopicCard";

const summaries = [
    {
      imageUri: "https://source.unsplash.com/random?sig=0",
      title: "Emerging Technologies",
      summary: `Exploring advancements in fields such as virtual reality and their potential impact on various industries.`,
      comments: 66,
      views: 6732,
      supporters: 8272,
      duration: '5 Minutes ago'
    },
    {
      imageUri: "https://source.unsplash.com/random?sig=0",
      title: "Data Privacy and Security",
      summary: `Examining the implications of data privacy, cybersecurity, and the balance between data protection and innovation.`,
      comments: 665,
      views: '672k',
      supporters:'93K',
      duration: '5 Days ago'
    },
    {
      imageUri: "https://source.unsplash.com/random?sig=0",
      title: "AI in Healthcare",
      summary: `Exploring the potential applications, benefits, and ethical considerations of AI in the healthcare industry.`,
      comments: 66,
      views: 6732,
      supporters: 8272,
      duration: '5 Minutes ago'
    },
    {
      imageUri: "https://source.unsplash.com/random?sig=0",
      title: "Social Justice and Equality",
      summary: `Engaging in conversations about social issues, discrimination, inclusivity, and strategies for promoting equality.`,
      comments: 66,
      views: '672k',
      supporters:'93K',
      duration: '27 Days ago'
    },
  ];
const TopicList = ()=>{

    const handleSeeComments=()=>{

    }
    const handleViewSupporters=()=>{

    }
    const updateTopicStats=()=>{

    }
    return(
        <ScrollView>
            <View>
                {summaries.map((item, index)=>(
                    <TopicCard 
                      key={index}
                      summary={item.summary} 
                      title={item.title} 
                      imageUrl={item.imageUri} 
                      comments={item.comments} 
                      views={item.views} 
                      supporters={item.supporters}
                      onSeeCommentsPress={handleSeeComments}
                      onSupportersPress={handleViewSupporters}
                      updateTopicStats={updateTopicStats}
                      duration={item.duration}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default TopicList
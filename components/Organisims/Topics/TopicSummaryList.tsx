import { View } from "react-native";
import TopicSummaryListCard from "./TopicsSummaryListCard";

const data = [
  {
    title: "Latest Topics",
    data: [
      {
        imageUrl:"https://www.wibbitz.com/wp-content/uploads/2016/06/blog2-emerging-technologies-media-industry.jpg",
        title: "Emerging Technologies",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
      {
        imageUrl: "https://images.pexels.com/photos/378268/pexels-photo-378268.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Drone Technology",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
    ],
  },
  {
    title: "Recommended Topics",
    data: [
      {
        imageUrl:"https://images.pexels.com/photos/6153738/pexels-photo-6153738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408",
        title: "Robotics Technologies",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
      {
        imageUrl: "https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?b=1&s=612x612&w=0&k=20&c=5S5LGG4cZl8DE3T-kD5ZYQRZMntgYg4E2IQAB-VJjqg=",
        title: "Artificial Inteligence Technologies",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae quaerat in incidunt amet modi",
      },
    ],
  },
];
const TopicSummaryList = () => {
  return (
    <View>
        {data.map((item, index)=>(
            <TopicSummaryListCard key={index} title={item.title} data={item.data}/>
        ))}
    </View>
  );
};

export default TopicSummaryList;

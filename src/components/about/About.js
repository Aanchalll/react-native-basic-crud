
import { Image, SafeAreaView, ScrollView, Text } from 'react-native';
// import hey from './assets/images'

export default function AboutComponent({ styles }) {

    return (
        <SafeAreaView>

            <ScrollView>

                <Text style={styles.textContainer}>
                    {array[0]}
                    <Image
                        source={require('../../../assets/images.png')}
                        style={styles.image}
                    />

                    {array[1]}
                    <Image
                        source={require('../../../assets/images.png')}
                        style={styles.image}
                    />
                    {array[1]}

                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}


const array = [
    " React Native is a powerful framework for building mobile applications using JavaScript and React.",
    " Developed by Facebook, it allows developers to create high-performance mobile apps for both iOS and Android platforms simultaneously, while leveraging the familiar syntax and development paradigms of React. At its core, React Native offers a unique approach to mobile app development by enabling the creation of native UI components using JavaScript and React. This means developers can write code once and deploy it across multiple platforms, significantly reducing development time and effort compared to traditional native app development. One of the key advantages of React Native is its emphasis on performance. By rendering UI components using native APIs, React Native ensures that apps deliver a smooth and responsive user experience, with performance comparable to that of fully native applications. Moreover, React Native provides a rich ecosystem of libraries, tools, and community support, making it easier for developers to build, test, and maintain their mobile apps. With a vast array of pre-built components and third-party integrations available, developers can quickly prototype ideas and bring them to market faster. Another standout feature of React Native is its hot-reloading capability, which allows developers to see changes in real-time as they code, speeding up the development process and enabling rapid iteration. In addition to its efficiency and flexibility, React Native offers seamless integration with existing native code, enabling developers to incorporate platform-specific features and APIs into their apps as needed. Whether you're a seasoned developer or new to mobile app development, React Native provides a powerful and intuitive framework for building high-quality mobile apps with speed, efficiency, and scalability."
]

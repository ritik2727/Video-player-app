import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  const videos = [
    {
      id: 1,
      title: 'Video 1',
      description: 'Description for Video 1',
      thumbnail:
        'https://www.wyzowl.com/wp-content/uploads/2019/09/YouTube-thumbnail-size-guide-best-practices-top-examples.png',
      url: 'https://res.cloudinary.com/dzggpp2xh/video/upload/v1700207418/vd1_xv8bpt.mp4',
    },
    {
      id: 2,
      title: 'Video 2',
      description: 'Description for Video 2',
      thumbnail:
        'https://www.wyzowl.com/wp-content/uploads/2019/09/YouTube-thumbnail-size-guide-best-practices-top-examples.png',
      url: 'https://res.cloudinary.com/dzggpp2xh/video/upload/v1700207418/vd1_xv8bpt.mp4',
    },
    {
      id: 3,
      title: 'Video 3',
      description: 'Description for Video 3',
      thumbnail:
        'https://www.wyzowl.com/wp-content/uploads/2019/09/YouTube-thumbnail-size-guide-best-practices-top-examples.png',
      url: 'https://res.cloudinary.com/dzggpp2xh/video/upload/v1700207418/vd1_xv8bpt.mp4',
    },
    // Add more video objects...
  ];
  const handleVideoPress = video => {
    navigation.navigate('VideoDetails', {video});
  };
  const renderVideoItem = ({item}) => (
    <TouchableOpacity onPress={() => handleVideoPress(item)}>
      <View style={styles.videoItemContainer}>
        <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
        <View style={styles.videoInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.channel}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{padding: 10}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
          Videos Lists
        </Text>
      </View>
      <FlatList
        data={videos}
        renderItem={renderVideoItem}
        keyExtractor={item => item.id}
        style={styles.container}
      />
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  videoItemContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 120,
    height: 80,
    resizeMode: 'cover',
  },
  videoInfo: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  channel: {
    color: '#777',
  },
};

export default HomeScreen;

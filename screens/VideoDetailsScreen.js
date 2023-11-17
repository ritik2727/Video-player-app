// Load the module

import Video from 'react-native-video';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Orientation from 'react-native-orientation-locker';

const VideoDetailsScreen = ({route}) => {
  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const ref = useRef();
  const {video} = route.params;

  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };


  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{width: '100%', height: '100%'}}
        resizeMode="contain"
        onPress={() => setClicked(true)}>
        <Video
          paused={paused}
          // source={{
          //   uri: video.url,
          // }}
          source={{ uri:video.url }}  // Use uri for dynamic paths // Updated line
          ref={ref}
          onProgress={x => {
            setProgress(x);
          }}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
        {clicked && (
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.7)',
              justifyContent: 'center',
              // alignItems: 'stretch',
            }}
            onPress={() => setClicked(false)}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                onPress={() => {
                  ref.current.seek(progress.currentTime - 10);
                }}>
                <Icon name="fast-backward" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPaused(!paused);
                }}>
                <Icon
                  name={paused ? 'play' : 'pause'}
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  ref.current.seek(progress.currentTime + 10);
                }}>
                <Icon name="fast-forward" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>
                {format(progress.currentTime)}
              </Text>
              <Slider
                style={{width: '80%', height: 40}}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#FFFFFF"
                onValueChange={x => {
                  ref.current.seek(x);
                }}
              />
              <Text style={{color: 'white'}}>
                {format(progress.seekableDuration)}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                top: 0,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (fullScreen) {
                    Orientation.lockToPortrait();
                  } else {
                    Orientation.lockToLandscape();
                  }
                  setFullScreen(!fullScreen);
                }}>
                <MaterialCommunityIcons
                  name={fullScreen ? 'fullscreen' : 'fullscreen-exit'}
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoDetailsScreen;

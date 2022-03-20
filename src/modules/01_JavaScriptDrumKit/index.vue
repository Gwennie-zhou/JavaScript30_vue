<template>
  <div class="keys">
    <div v-for="item in keys" :key="item.keyCode"
      class="key" 
      :data-key="item.keyCode"
      @transitionend="removeTransition"
    >
        <div class="keyName">{{item.keyName}}</div>
        <span class="sound">{{item.soundName}}</span>
        <audio :src="item.soundUrl" :data-key="item.keyCode"></audio>
    </div>
  </div>
</template>

<script>
 // 当在键盘上敲下字母后，能发出对应的音频，同时还有动画效果
export default {
  name: 'JavaScriptDrumKit',
  data() {
    return {
      keys: [
        {keyName: 'A', keyCode: 65, soundName: 'clap', soundUrl: require('./sounds/clap.wav')},
        {keyName: 'S', keyCode: 83, soundName: 'hihat', soundUrl: require('./sounds/hihat.wav')},
        {keyName: 'D', keyCode: 68, soundName: 'kick', soundUrl: require('./sounds/kick.wav')},
        {keyName: 'F', keyCode: 70, soundName: 'openhat', soundUrl: require('./sounds/openhat.wav')},
        {keyName: 'G', keyCode: 71, soundName: 'boom', soundUrl: require('./sounds/boom.wav')},
        {keyName: 'H', keyCode: 72, soundName: 'ride', soundUrl: require('./sounds/ride.wav')},
        {keyName: 'J', keyCode: 74, soundName: 'snare', soundUrl: require('./sounds/snare.wav')},
        {keyName: 'K', keyCode: 75, soundName: 'tom', soundUrl: require('./sounds/tom.wav')},
        {keyName: 'L', keyCode: 76, soundName: 'tink', soundUrl: require('./sounds/tink.wav')},
      ]
    }
  },
  mounted() {
    window.addEventListener('keydown', this.playSound)
  },
  methods: {
    playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
      if (!audio) return
      key.classList.add('playing')
      audio.currentTime = 0
      audio.play()
    },
    removeTransition(e) {
      if (e.propertyName !== 'transform') return
      e.target.classList.remove('playing')
    }
  }
}
</script>

<style lang="less">
html {
  font-size: 10px;
  background: url('./images/background.jpg') bottom center;
  background-size: cover;
}

body,html {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.key {
  border: .4rem solid black;
  border-radius: .5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  width: 10rem;
  height: 7rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}

.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}


.sound {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  color: #ffc600;
}
.keyName {
  font-size: 36px;
}
</style>

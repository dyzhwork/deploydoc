(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{300:function(t,i,e){},359:function(t,i,e){"use strict";e(300)},375:function(t,i,e){"use strict";e.r(i);var n={name:"WebAudioButton",data:()=>({eleButton:null,audioCtx:null,arrFrequency:[196,220,246.94,261.63,293.66,329.63,349.23,392,440,493.88,523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5],start:0,direction:1}),mounted(){window.AudioContext=window.AudioContext||window.webkitAudioContext,window.AudioContext?(document.getElementById("button").addEventListener("click",()=>{this.playVoice()}),document.onkeydown=()=>{this.playVoice()}):alert("当前浏览器不支持Web Audio API")},methods:{playVoice(){this.audioCtx=new AudioContext;var t=this.arrFrequency[this.start];t||(this.direction=-1*this.direction,this.start=this.start+2*this.direction,t=this.arrFrequency[this.start]),this.start=this.start+this.direction;var i=this.audioCtx.createOscillator(),e=this.audioCtx.createGain();i.connect(e),e.connect(this.audioCtx.destination),i.type="sine",i.frequency.value=t,e.gain.setValueAtTime(0,this.audioCtx.currentTime),e.gain.linearRampToValueAtTime(1,this.audioCtx.currentTime+.01),i.start(this.audioCtx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+1),i.stop(this.audioCtx.currentTime+1)}}},o=(e(359),e(7)),a=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"WebAudioButton"},[t("div",{attrs:{id:"button"}},[this._v("鼠标点击发出声音")])])}],!1,null,"0a7d12e7",null);i.default=a.exports}}]);
webpackJsonp([1],{"/He7":function(t,e){},"1AE0":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={state:{topMusicData:null,topMusicUsername:null,topMusicType:null,topMusicLimit:null,topMusicDialogState:null},mutations:{SAVE_TOP_MUSIC_DATA:function(t,e){t.topMusicData=e},SAVE_TOP_MUSIC_USERNAME:function(t,e){t.topMusicUsername=e},SAVE_TOP_MUSIC_TYPE:function(t,e){t.topMusicType=e},SAVE_TOP_MUSIC_LIMIT:function(t,e){t.topMusicLimit=e},SAVE_TOP_MUSIC_DIALOG_STATE:function(t,e){t.topMusicDialogState=e}},actions:{savetopMusicData:function(t,e){(0,t.commit)("SAVE_TOP_MUSIC_DATA",e)},savetopMusicUsername:function(t,e){(0,t.commit)("SAVE_TOP_MUSIC_USERNAME",e)},savetopMusicType:function(t,e){(0,t.commit)("SAVE_TOP_MUSIC_TYPE",e)},savetopMusicLimit:function(t,e){(0,t.commit)("SAVE_TOP_MUSIC_LIMIT",e)},savetopMusicDialogState:function(t,e){(0,t.commit)("SAVE_TOP_MUSIC_DIALOG_STATE",e)}},getters:{topMusicData:function(t){return t.topMusicData},topMusicUsername:function(t){return t.topMusicUsername},topMusicType:function(t){return t.topMusicType},topMusicLimit:function(t){return t.topMusicLimit},topMusicDialogState:function(t){return t.topMusicDialogState}}}},"2mV7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("gNcp"),s={};a.keys().forEach(function(t){"./index.js"!==t&&(s[t.replace(/(\.\/|\.js)/g,"")]=a(t).default)}),e.default=s},"7zck":function(t,e){},BRRd:function(t,e){},KI4C:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("7zck"),i("n+X2");var a=i("7+uW"),s=i("NYxO"),o=i("3EgV"),n=i.n(o),r=i("wvfG"),c=i.n(r),l={name:"container",props:{source:String},data:function(){return{drawer:null}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav"},[e("v-content",[e("div",{staticStyle:{padding:"16px"},attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"justify-center":"","align-center":""}},[this._t("default")],2)],1)])],1)},staticRenderFns:[]};var p=i("VU/8")(l,u,!1,function(t){i("/He7")},null,null).exports,d=i("//Fk"),h=i.n(d),v=i("Dd8w"),m=i.n(v),f=i("mtWM"),_=i.n(f),g=null,y=null;g=window.location.protocol+"//"+window.location.hostname,y=window.location.protocol+"//"+window.location.hostname;var k=function(){return _.a.create({baseURL:g})},T=function(){return k().get("login")},M=function(t){return k().get("short_url",{params:{url:t}})},w={name:"AudioAnimation",methods:{randomClass:function(t){return"left:"+(.02*document.body.clientWidth+.005*document.body.clientWidth)*(t-1)+"px; animation-duration:"+Math.floor(-199*Math.random()+700)+"ms;"}},computed:{numOfBars:function(){var t=.025*this.windowWidth+3.2,e=this.windowWidth/t;return Math.floor(e)}},data:function(){return{windowWidth:void 0}},beforeMount:function(){this.windowWidth=document.body.clientWidth},mounted:function(){var t=this;window.addEventListener("resize",function(){t.windowWidth=document.body.clientWidth})},beforeDestroy:function(){var t=this;window.removeEventListener("resize",function(){t.windowWidth=document.body.clientWidth})}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"audio-wrapper"},[t._l(t.numOfBars,function(e){return[i("div",{key:e,staticClass:"bar",style:t.randomClass(e)})]})],2)},staticRenderFns:[]};var S=i("VU/8")(w,b,!1,function(t){i("pr3K")},null,null).exports,x={AudioAnimation:S},A={name:"login",methods:m()({},Object(s.b)(["savetopMusicData","savetopMusicUsername","savetopMusicType","savetopMusicLimit","savetopMusicDialogState"]),{login:function(){T().then(function(t){window.location.replace(t.data)})}}),components:x,beforeMount:function(){this.$route.query.showTopMusicPreview&&(this.savetopMusicData(decodeURIComponent(this.$route.query.data)),this.savetopMusicUsername(decodeURIComponent(this.$route.query.username)),this.savetopMusicType(decodeURIComponent(this.$route.query.type)),this.savetopMusicLimit(decodeURIComponent(this.$route.query.limit).replace(/\/$/,"")),this.savetopMusicDialogState(decodeURIComponent(this.$route.query.showTopMusicPreview)),window.history.replaceState(null,null,window.location.pathname))}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login"},[i("div",{staticClass:"title-wrapper"},[t._m(0),t._v(" "),i("v-btn",{staticClass:"login-btn",attrs:{flat:""},on:{click:function(e){t.login()}}},[t._v("Login")])],1),t._v(" "),i("AudioAnimation",{staticStyle:{"margin-bottom":"-16px"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[this._v("Statify "),e("span",{staticClass:"separator"},[this._v("|")])])}]};var L=i("VU/8")(A,C,!1,function(t){i("KI4C")},null,null).exports,I={name:"Albums",props:{data:{type:Array,required:!0},type:{type:String,required:!0}},components:{AudioAnimation:S},methods:{playPreview:function(t,e){var i=document.querySelector("audio");""===i.src?(i.src=t,i.play()):t!==i.src?(i.pause(),i.currentTime=0,i.src=t,i.play()):t===i.src?(i.pause(),i.currentTime=0,i.src=""):(i.pause(),i.currentTime=0),this.song=e},audioUpdate:function(){var t=this.$refs.audio;t.currentTime>0&&!t.paused&&!t.ended?this.audioPlaying=!0:this.audioPlaying=!1},saveTrack:function(t){var e=this;this.addSong=t,_.a.get("https://api.spotify.com/v1/me/tracks/contains?ids="+t,{headers:{Authorization:"Bearer "+this.spotifyToken}}).then(function(i){if(i.data[0])e.alert.alertType="info",e.alert.alertIcon="info",e.alert.alertMessage="Song already in library",e.alert.active=!0;else{var a={ids:[t]};_.a.put("https://api.spotify.com/v1/me/tracks/?ids=",a,{headers:{Authorization:"Bearer "+e.spotifyToken}}).then(function(t){e.alert.alertType="success",e.alert.alertIcon="check_circle",e.alert.alertMessage="Song added",e.alert.active=!0}).catch(function(t){e.$emit("apiError",t)})}})},getArtistsTopTracks:function(t){var e=this;document.querySelector("audio").pause(),this.topTrackIndex=0,_.a.get("https://api.spotify.com/v1/artists/"+t+"/top-tracks?country=US",{headers:{Authorization:"Bearer "+this.spotifyToken}}).then(function(t){t.data.tracks.length>=5?e.topTracks=t.data.tracks.slice(0,5):e.topTracks=t.data.tracks.slice(0,t.data.tracks.length-1)}).catch(function(t){e.$emit("apiError",t)})},getTopTrackIndex:function(t,e){"next"===t&&(this.topTrackIndex<this.topTracks.length-1?this.topTrackIndex=this.topTrackIndex+1:this.topTrackIndex=0),"prev"===t&&(this.topTrackIndex>0?this.topTrackIndex=this.topTrackIndex-1:this.topTrackIndex=4),this.updateCurrentTrackStyle(),this.playPreview(this.topTracks[this.topTrackIndex].preview_url,e)},updateCurrentTrackStyle:function(){document.querySelectorAll(".top-tracks").forEach(function(t){return t.style.opacity=.5}),document.querySelectorAll(".top-tracks")[this.topTrackIndex].style.opacity=1},getBackgroundImg:function(t){return!t.images||0!==this.topTracks.length&&this.topTracks[0].artists.some(function(e){return e.id===t.id})?t.images&&this.topTracks[0].artists.some(function(e){return e.id===t.id})?"background: linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.2)), url('"+t.images[0].url+"') center center / cover no-repeat;":"background: linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.7)), url('"+t.album.images[0].url+"') center center / cover no-repeat;":"background: linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.7)), url('"+t.images[0].url+"') center center / cover no-repeat;"}},computed:m()({},Object(s.c)(["spotifyToken"])),data:function(){return{song:null,addSong:null,audioPlaying:!1,loading:!1,alert:{active:!1,alertType:null,alertIcon:null,alertMessage:null},topTracks:[],topTrackIndex:0}}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.data.length>0?i("div",{staticClass:"albums",attrs:{loading:t.loading}},[t.loading?t._e():i("v-container",{staticClass:"grey lighten-5",attrs:{fluid:"","grid-list-md":""}},[i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.data,function(e,a){return i("v-flex",{key:e.name,staticClass:"card-wrapper",attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[i("v-card",{staticStyle:{width:"100%"},attrs:{hover:""}},[e.id===t.addSong?i("v-alert",{staticClass:"song-alert",attrs:{dismissible:"",color:t.alert.alertType,icon:t.alert.alertIcon},model:{value:t.alert.active,callback:function(e){t.$set(t.alert,"active",e)},expression:"alert.active"}},[t._v("\n            "+t._s(t.alert.alertMessage)+"\n          ")]):t._e(),t._v(" "),(e.images?e.images:e.album&&e.album.images)?i("v-card-media",{style:t.getBackgroundImg(e),attrs:{height:"50vh"}},[i("div",{staticStyle:{padding:"10px 16px"},attrs:{"fill-height":"",fluid:""}},[i("v-layout",{attrs:{"fill-height":""}},[i("v-flex",{staticStyle:{"flex-direction":"column"},attrs:{xs12:"",flexbox:""}},[i("span",t._l(t.topTracks,function(a){return t.topTracks[0].artists.some(function(t){return t.id===e.id})?i("h4",{key:a.id,staticClass:"top-tracks",staticStyle:{opacity:"0.5","font-size":"20px"}},[t._v(t._s(a.name)+"\n                    ")]):t._e()})),t._v(" "),e.images?i("span",{staticStyle:{"z-index":"3","margin-top":"auto"}},[i("h4",[t._v(t._s(e.name))])]):i("span",{staticStyle:{"z-index":"3","margin-top":"auto"}},[i("h5",[t._v(t._s(e.name))]),t._v(" "),e.artists?i("h5",[t._v(t._s(e.artists[0].name))]):t._e(),t._v(" "),i("h5",[t._v(t._s(e.album.name))])]),t._v(" "),i("div",{staticClass:"animation-wrapper"},[t.audioPlaying&&e.id===t.song?i("AudioAnimation"):t._e()],1)])],1)],1)]):t._e(),t._v(" "),i("v-card-actions",{staticClass:"white"},[i("div",{staticClass:"rank"},[t._v(t._s(a+1))]),t._v(" "),i("v-spacer"),t._v(" "),e.images?i("v-btn",{attrs:{icon:"",disabled:0===t.topTracks.length||!t.topTracks[0].artists.some(function(t){return t.id===e.id})},on:{click:function(i){t.getTopTrackIndex("prev",e.id)}}},[i("v-icon",[t._v("skip_previous")])],1):t._e(),t._v(" "),e.album?i("v-btn",{attrs:{icon:""},on:{click:function(i){t.playPreview(e.preview_url,e.id)}}},[i("v-icon",[t._v("play_arrow")])],1):i("v-btn",{attrs:{icon:"",disabled:0===t.topTracks.length||!t.topTracks[0].artists.some(function(t){return t.id===e.id})},on:{click:function(i){t.getTopTrackIndex(null,e.id)}}},[i("v-icon",[t._v("play_arrow")])],1),t._v(" "),e.images?i("v-btn",{attrs:{icon:"",disabled:0===t.topTracks.length||!t.topTracks[0].artists.some(function(t){return t.id===e.id})},on:{click:function(i){t.getTopTrackIndex("next",e.id)}}},[i("v-icon",[t._v("skip_next")])],1):t._e(),t._v(" "),e.album?i("v-tooltip",{attrs:{bottom:"","open-delay":"500"}},[i("v-btn",{attrs:{slot:"activator",icon:""},on:{click:function(i){t.saveTrack(e.id)}},slot:"activator"},[i("v-icon",[t._v("add")])],1),t._v(" "),i("span",[t._v("Add Song to Library")])],1):t._e(),t._v(" "),e.images?i("v-tooltip",{attrs:{bottom:"","open-delay":"500"}},[i("v-btn",{attrs:{slot:"activator",icon:""},on:{click:function(i){t.getArtistsTopTracks(e.id)}},slot:"activator"},[i("v-icon",[t._v("format_list_numbered")])],1),t._v(" "),i("span",[t._v("Get Artist's Top Tracks")])],1):t._e()],1)],1)],1)}))],1),t._v(" "),i("audio",{ref:"audio",on:{timeupdate:t.audioUpdate}})],1):t._e()},staticRenderFns:[]};var D=i("VU/8")(I,U,!1,function(t){i("jqpW")},null,null).exports,P={name:"TopMusicButton",props:{username:{type:String,required:!0},type:{type:String,required:!0},timeRange:{type:String,required:!0},limit:{type:Number,required:!0}},components:{Albums:D},methods:m()({},Object(s.b)(["savetopMusicData","savetopMusicUsername","savetopMusicType","savetopMusicLimit","savetopMusicDialogState","saveSpotifyToken"]),{getTopMusicData:function(){var t=this,e=null;e=this.topMusicType?this.topMusicType:this.type,_.a.get("https://api.spotify.com/v1/"+e+"/?ids="+this.topMusicIds,{headers:{Authorization:"Bearer "+this.spotifyToken}}).then(function(i){t.topMusic=i.data[e],t.getShareLink()}).catch(function(e){console.log(e),t.saveSpotifyToken(null),t.$forceUpdate()})},clearTopMusic:function(){this.savetopMusicData(null),this.savetopMusicUsername(null),this.savetopMusicType(null),this.savetopMusicLimit(null),this.savetopMusicDialogState(null),this.topMusicIds=[]},hideTopMusic:function(){this.showTopMusicPreview=!1,this.clearTopMusic()},getShareLink:function(){var t=this,e="data="+this.topMusicIds,i="username="+this.username,a="type="+this.type,s="limit="+this.limit,o=y+"?showTopMusicPreview=true&"+e+"&"+i+"&"+a+"&"+s;M(o).then(function(e){0===e.data.data.length?(t.shareLink=o,t.warningAlert=!0,t.statusTxt=e.data.status_txt):t.shareLink=e.data.data.url}).catch(function(e){t.warningAlert=!0,t.statusTxt=e})}}),computed:m()({},Object(s.c)(["topMusicData","topMusicUsername","topMusicType","topMusicLimit","topMusicDialogState","spotifyToken"])),filters:{capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""},removeSlash:function(t){return"/"===t.slice(-1)?t.slice(0,-1):t}},data:function(){return{showTopMusicPreview:!1,topMusicIds:[],topMusic:[],timePeriod:{short_term:"Last Month",medium_term:"Last 6 Months",long_term:"Last Several Years"}}},beforeMount:function(){this.displayName=this.topMusicUsername||this.username,"true"===this.topMusicDialogState?(this.showTopMusicPreview=!0,this.topMusicIds=this.topMusicData,this.getTopMusicData()):this.showTopMusicPreview=!1},watch:{showTopMusicPreview:function(){!1===this.showTopMusicPreview?(this.shareLink=null,document.body.style.overflow="auto"):document.body.style.overflow="hidden"}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t.topMusicUsername?i("v-dialog",{attrs:{fullscreen:""},model:{value:t.showTopMusicPreview,callback:function(e){t.showTopMusicPreview=e},expression:"showTopMusicPreview"}},[i("div",{staticClass:"grey lighten-5",staticStyle:{margin:"auto"},attrs:{id:"topMusic"}},[i("v-toolbar",{attrs:{color:"white",height:"80px"}},[i("v-toolbar-title",{staticStyle:{color:"black","margin-top":"5px"}},[i("div",{staticClass:"top-music-title"},[t._v("\n            "+t._s(t.displayName)+"'s Top "+t._s(t._f("removeSlash")(t.topMusicLimit))+"\n            "+t._s(t._f("capitalize")(t.topMusicType))+" ("+t._s(t.timePeriod[t.timeRange])+")\n          ")]),t._v(" "),i("v-btn",{staticClass:"top-music-btn",staticStyle:{color:"#1db954"},attrs:{flat:""},nativeOn:{click:function(e){t.hideTopMusic(e)}}},[t._v("Discover Your Top Songs and Arists\n          ")])],1)],1),t._v(" "),i("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-card",[i("albums",{staticStyle:{"margin-top":"0"},attrs:{data:t.topMusic,timeRange:t.timeRange,limit:t.limit,type:t.topMusicType}})],1)],1)],1)],1)]):t._e()],1)},staticRenderFns:[]};var R=i("VU/8")(P,E,!1,function(t){i("ph5k")},null,null).exports,O={name:"TopMusicShare",props:{username:{type:String,required:!0},type:{type:String,required:!0},timeRange:{type:String,required:!0},limit:{type:Number,required:!0},showMusicShare:{type:Boolean,required:!1}},computed:m()({},Object(s.c)(["spotifyToken"])),methods:m()({},Object(s.b)(["saveSpotifyToken"]),{getTopMusicIds:function(){var t=this;this.loading=!0,this.shareLink=null;var e="?time_range="+this.timeRange+"&limit="+this.limit;_.a.get("https://api.spotify.com/v1/me/top/"+this.type+e,{headers:{Authorization:"Bearer "+this.spotifyToken}}).then(function(e){var i=[];e.data.items.forEach(function(t){i.push(t.id)}),t.topMusicIds=i.toString(),t.getTopMusicData()}).catch(function(e){console.log(e),t.saveSpotifyToken(null),t.$forceUpdate()})},getTopMusicData:function(){var t=this,e=null;e=this.topMusicType?this.topMusicType:this.type,_.a.get("https://api.spotify.com/v1/"+e+"/?ids="+this.topMusicIds,{headers:{Authorization:"Bearer "+this.spotifyToken}}).then(function(i){t.topMusic=i.data[e],t.getShareLink()}).catch(function(e){console.log(e),t.saveSpotifyToken(null),t.$forceUpdate()})},getShareLink:function(){var t=this,e="data="+this.topMusicIds,i="username="+this.username,a="type="+this.type,s="limit="+this.limit,o=y+"?showTopMusicPreview=true&"+e+"&"+i+"&"+a+"&"+s;M(o).then(function(e){0===e.data.data.length?(t.shareLink=o,t.warningAlert=!0,t.statusTxt=e.data.status_txt):t.shareLink=e.data.data.url}).catch(function(e){t.warningAlert=!0,t.statusTxt=e})},copyLink:function(){var t=this;this.$copyText(this.shareLink).then(function(e){t.successAlert=!0})}}),data:function(){return{shareLink:null,successAlert:!1,warningAlert:!1,statusTxt:null,timePeriod:{short_term:"Last Month",medium_term:"Last 6 Months",long_term:"Last Several Years"}}},watch:{showMusicShare:function(){!1===this.showMusicShare&&(this.successAlert=!1,this.warningAlert=!1)}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{staticClass:"justify-center",attrs:{xs12:""}},[i("v-card",[i("v-alert",{attrs:{dismissible:"",color:"success",icon:"check_circle"},model:{value:t.successAlert,callback:function(e){t.successAlert=e},expression:"successAlert"}},[t._v("\n      Link Copied to Clipboard\n    ")]),t._v(" "),i("v-alert",{attrs:{color:"info",icon:"warning",dismissible:""},model:{value:t.warningAlert,callback:function(e){t.warningAlert=e},expression:"warningAlert"}},[t._v("\n      "+t._s(this.statusTxt)+": Could Not Generate A Shortened Url, Please Use the Long Url\n    ")]),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-flex",{attrs:{xs8:""}},[i("v-text-field",{staticStyle:{margin:"10px 15px 0 15px"},attrs:{id:"share-link",name:"share-link",color:"green",label:"Click Arrows ==>"},model:{value:t.shareLink,callback:function(e){t.shareLink=e},expression:"shareLink"}})],1),t._v(" "),i("v-flex",{staticClass:"justify-center",attrs:{xs2:""}},[i("v-tooltip",{attrs:{bottom:"","open-delay":"500"}},[i("v-btn",{staticStyle:{color:"#1db954","margin-top":"20px"},attrs:{slot:"activator",flat:"",icon:""},on:{click:t.getTopMusicIds},slot:"activator"},[i("v-icon",[t._v("cached")])],1),t._v(" "),i("span",[t._v("Generate Share Link")])],1)],1),t._v(" "),i("v-flex",{staticClass:"justify-center",attrs:{xs2:""}},[i("v-tooltip",{attrs:{bottom:"","open-delay":"500"}},[i("v-btn",{staticStyle:{color:"#1db954","margin-top":"20px"},attrs:{slot:"activator",flat:"",icon:"",disabled:!t.shareLink},on:{click:t.copyLink},slot:"activator"},[i("v-icon",[t._v("content_copy")])],1),t._v(" "),i("span",[t._v("Copy Link to Clipboard")])],1)],1)],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[t.shareLink?i("p",{staticStyle:{"text-align":"center",margin:"0 10px 10px 10px"}},[t._v("\n        Copy this link to share your top "+t._s(t.limit)+" "+t._s(t.type)+" of the\n        "+t._s(t.timePeriod[t.timeRange])+" with your friends\n      ")]):i("p",{staticStyle:{"text-align":"center",margin:"0 10px 10px 10px"}},[t._v("\n        Click the green arrows to generate a short link to share with friends.\n        Then click the copy button to copy the link to your clipboard\n      ")])])],1)],1)},staticRenderFns:[]},q={name:"home",components:{login:L,FriendsTopMusic:R,TopMusicShare:i("VU/8")(O,$,!1,null,null,null).exports,Albums:D},methods:m()({},Object(s.b)(["savetopMusicData","savetopMusicUsername","savetopMusicType","savetopMusicLimit","savetopMusicDialogState","saveSpotifyToken"]),{logout:function(t){console.log(t),this.saveSpotifyToken(null),this.tokenAlert=!0,this.$forceUpdate()},getData:function(){var t=this;this.songs=[];var e="?time_range="+this.timeRange+"&limit="+this.limit;_.a.get("https://api.spotify.com/v1/me/top/"+this.type+e,{headers:{Authorization:"Bearer "+this.spotifyToken}}).then(function(e){t.data=e.data.items,e.data.items.forEach(function(e){t.songs.push(e.uri)})}).catch(function(e){t.logout()})},createPlaylist:function(){var t=this,e=this.userData.id,i=this.songs,a={name:"Your Top "+this.limit+" "+this.type.charAt(0).toUpperCase()+this.type.slice(1)+" ("+this.timePeriod[this.timeRange]+")",public:!0},s={headers:{Authorization:"Bearer "+this.spotifyToken}};_.a.post("https://api.spotify.com/v1/users/"+e+"/playlists",a,s).then(function(a){var o=a.data.id;_.a.post("https://api.spotify.com/v1/users/"+e+"/playlists/"+o+"/tracks",{uris:i},s).then(function(e){t.successAlert=!0}).catch(function(e){t.failureAlert=!0,t.errors=e})})}}),computed:m()({},Object(s.c)(["spotifyToken"])),data:function(){return{topArtists:[],type:"tracks",timeRange:"short_term",timePeriod:{short_term:"Last Month",medium_term:"Last 6 Months",long_term:"Last Several Years"},limit:20,data:[],songs:[],userData:void 0,errors:"",successAlert:!1,failureAlert:!1,tokenAlert:!1,showMusicShare:!1}},beforeMount:function(){var t=this;if(this.$route.query.access_token&&this.saveSpotifyToken(this.$route.query.access_token).then(function(){window.history.replaceState(null,null,window.location.pathname)}),this.$route.query.showTopMusicPreview&&(this.savetopMusicData(this.$route.query.data),this.savetopMusicUsername(this.$route.query.username),this.savetopMusicType(this.$route.query.type),this.savetopMusicLimit(this.$route.query.limit),this.savetopMusicDialogState(this.$route.query.showTopMusicPreview),window.history.replaceState(null,null,window.location.pathname)),this.spotifyToken){var e=_.a.get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+this.spotifyToken}}).then(function(e){t.userData=e.data}).catch(function(e){t.logout(),t.tokenAlert=!0}),i=this.getData();h.a.all([e,i])}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-alert",{staticClass:"token-alert",attrs:{color:"warning",icon:"warning",dismissible:""},model:{value:t.tokenAlert,callback:function(e){t.tokenAlert=e},expression:"tokenAlert"}},[t._v("\n    Access Token Expired, Please Log In Again.\n  ")]),t._v(" "),t.userData?i("friends-top-music",{attrs:{type:t.type,timeRange:t.timeRange,limit:t.limit,username:t.userData.display_name}}):t._e(),t._v(" "),t.spotifyToken&&t.userData?i("v-expansion-panel",[i("v-expansion-panel-content",{staticStyle:{overflow:"hidden"}},[i("v-alert",{attrs:{color:"success",icon:"check_circle",dismissible:""},model:{value:t.successAlert,callback:function(e){t.successAlert=e},expression:"successAlert"}},[t._v("\n        Playlist Created\n      ")]),t._v(" "),i("v-alert",{attrs:{color:"warning",icon:"warning",dismissible:""},model:{value:t.failureAlert,callback:function(e){t.failureAlert=e},expression:"failureAlert"}},[t._v("\n        Error in Creating Playlist: "+t._s(t.errors)+"\n      ")]),t._v(" "),i("h3",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[i("div",{staticStyle:{position:"absolute",top:"10px"}},[t._v("Statify")])]),t._v(" "),i("v-flex",{staticClass:"welcome-user"},[t.userData.images[0]?i("img",{staticClass:"profile-pic",attrs:{src:t.userData.images[0].url}}):t._e(),t._v(" "),i("h4",{staticClass:"username"},[t._v("Welcome, "+t._s(t.userData.display_name)+"\n          "),i("span",{staticClass:"separator"},[t._v(" | ")])]),t._v(" "),i("v-btn",{staticClass:"logout-btn",attrs:{flat:""},on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),i("v-layout",{staticClass:"toggles",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{sm6:"",xs12:""}},[i("v-subheader",[t._v("Type")]),t._v(" "),i("v-radio-group",{attrs:{mandatory:!1},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[i("v-radio",{attrs:{label:"Tracks",value:"tracks",color:"green"}}),t._v(" "),i("v-radio",{attrs:{label:"Artists",value:"artists",color:"green"}})],1)],1),t._v(" "),i("v-flex",{attrs:{sm6:"",xs12:""}},[i("v-subheader",[t._v("Time")]),t._v(" "),i("v-radio-group",{attrs:{mandatory:!1},model:{value:t.timeRange,callback:function(e){t.timeRange=e},expression:"timeRange"}},[i("v-radio",{attrs:{label:"Last Month",value:"short_term",color:"green"}}),t._v(" "),i("v-radio",{attrs:{label:"Last 6 Months",value:"medium_term",color:"green"}}),t._v(" "),i("v-radio",{attrs:{label:"Last Several Years",value:"long_term",color:"green"}})],1)],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-subheader",[t._v("# of Tracks")]),t._v(" "),i("v-flex",{attrs:{xs8:""}},[i("v-slider",{attrs:{color:"green",min:3,max:50},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1),t._v(" "),i("v-flex",{staticStyle:{"margin-right":"30px"},attrs:{xs1:""}},[i("v-text-field",{attrs:{type:"number"},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1)],1),t._v(" "),t.data.length>0?i("v-container",{attrs:{fluid:"","grid-list-md":""}},[i("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[t.data[0].album?i("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:"",lg3:"",xl4:""}},[i("v-btn",{on:{click:t.getData}},[t._v("Load")]),t._v(" "),t.data[0].album?i("v-btn",{on:{click:t.createPlaylist}},[t._v("Create Playlist")]):t._e()],1):i("v-flex",{attrs:{"d-flex":"",xs1:""}},[i("v-btn",{on:{click:t.getData}},[t._v("Load")])],1),t._v(" "),t.data[0].album?i("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:""}},[i("v-btn",{staticClass:"fr",attrs:{slot:"activator"},on:{click:function(e){e.preventDefault(),t.showMusicShare=!t.showMusicShare}},slot:"activator"},[i("span",{staticClass:"mr-auto"},[t._v("Share Your Top "+t._s(t.type))]),t._v(" "),t.showMusicShare?i("v-icon",[t._v("keyboard_arrow_up")]):i("v-icon",[t._v("keyboard_arrow_down")])],1)],1):i("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md4:"",lg3:""}},[i("v-btn",{staticClass:"fr",attrs:{slot:"activator"},on:{click:function(e){e.preventDefault(),t.showMusicShare=!t.showMusicShare}},slot:"activator"},[i("span",{staticClass:"mr-auto"},[t._v("Share Your Top "+t._s(t.type))]),t._v(" "),t.showMusicShare?i("v-icon",[t._v("keyboard_arrow_up")]):i("v-icon",[t._v("keyboard_arrow_down")])],1)],1),t._v(" "),i("top-music-share",{directives:[{name:"show",rawName:"v-show",value:t.showMusicShare,expression:"showMusicShare"}],attrs:{type:t.type,timeRange:t.timeRange,limit:t.limit,username:t.userData.display_name,showMusicShare:t.showMusicShare}})],1)],1):t._e()],1)],1)],1):t._e(),t._v(" "),t.spotifyToken?i("albums",{attrs:{data:t.data,timeRange:t.timeRange,limit:t.limit,type:t.type},on:{apiError:function(e){t.logout(t.err)}}}):i("login")],1)},staticRenderFns:[]};var V=i("VU/8")(q,j,!1,function(t){i("BRRd")},null,null).exports,z={components:{"v-container":p,Home:V}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"app"}},[e("v-container",[e("div",{staticClass:"content"},[e("home")],1)])],1)},staticRenderFns:[]};var N=i("VU/8")(z,B,!1,function(t){i("aCUj")},null,null).exports,W=i("Gu7T"),F=i.n(W),Y=i("/ocq"),G=[{path:"/",component:V}];a.a.use(Y.a);var K=new Y.a({mode:"history",routes:[].concat(F()(G))}),H=i("424j"),X=i("2mV7");a.a.use(s.a);var J=new s.a.Store({modules:X.default,strict:!1,plugins:[Object(H.a)()]});a.a.use(s.a),a.a.use(n.a),a.a.use(c.a),new a.a({el:"#app",render:function(t){return t(N)},router:K,store:J})},SFXb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={state:{spotifyToken:null},mutations:{SAVE_SPOTIFY_TOKEN:function(t,e){t.spotifyToken=e}},actions:{saveSpotifyToken:function(t,e){(0,t.commit)("SAVE_SPOTIFY_TOKEN",e)}},getters:{spotifyToken:function(t){return t.spotifyToken}}}},aCUj:function(t,e){},gNcp:function(t,e,i){var a={"./index.js":"2mV7","./spotify.js":"SFXb","./top20.js":"1AE0"};function s(t){return i(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(a)},s.resolve=o,t.exports=s,s.id="gNcp"},jqpW:function(t,e){},"n+X2":function(t,e){},ph5k:function(t,e){},pr3K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.63a2476041f64f6021e5.js.map
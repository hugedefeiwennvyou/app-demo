var Home=Vue.component("Home",{
    template:`<div class="rela">
                <Nav></Nav>
                <div class="abso">公司首页</div>
            </div>`,
})
var product=Vue.component("product",{
    template:`<div class="rela">
                <Nav></Nav>
                <div class="abso">产品介绍</div>
            </div>`,
})
var Nav=Vue.component("Nav",{
    template:`
    <div class="Nav"> 
        <router-link :to="item.url" v-for="(item,key) in navData" :key="key" exact>{{item.title}}</router-link>
       
       <router-link to="/login" v-if="!islogin">登录</router-link>
       
       <span v-if="islogin" class="info" @click="show">
       {{name}}
            <span  class="logout" v-show="isshow" @click="logout">退出</span>
       </span>
       
   
    </div>
`,
    data(){
        return {
            navData:[
                {title:"首页",url:"/"},
                {title:"公司简介",url:"/info"},
                {title:"产品介绍",url:"/product"},
                {title:"文档说明",url:"/doc"},
            ],
            islogin:false,
            name:"",
            isshow:false
        }
    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
            this.del("login");
            router.push("/")
        }
    }
})
var Info=Vue.component("Info",{
    template:`
    <div class="rela">
        <Nav></Nav>
        <transition name="opacity" mode="out-in">
            <router-view class="abso" ></router-view>
        </transition>
    </div>
    `,
})
var List=Vue.component("List",{
    template:`
        <ul class="mui-table-view">
	    <li class="mui-table-view-cell mui-media">
	        <router-link to="/info/1">
	            <img class="mui-media-object mui-pull-left" src="http://placehold.it/40x30">
	            <div class="mui-media-body">
	                幸福
	                <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
	            </div>
            </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media">
            <router-link to="/info/2">
                <img class="mui-media-object mui-pull-left" src="http://placehold.it/40x30">
                <div class="mui-media-body">
                    木屋
                    <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                </div>
            </router-link>
	    </li>
	    <li class="mui-table-view-cell mui-media">
            <router-link to="/info/1">
                <img class="mui-media-object mui-pull-left" src="http://placehold.it/40x30">
	            <div class="mui-media-body">
	                CBD
	                <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
	            </div>
            </router-link>
	    </li>
	</ul>
    `,
    beforeRouteEnter(to,from,next){
        console.log(1);
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log(2);
        next();
    }
})
var Con=Vue.component("Con",{
    template:`
        <div style="text-align: center">
            {{$route.params.id}}
        </div>
    `,
})
var doc=Vue.component("doc",{
    template:`
       <div class="rela">
            <Nav></Nav>
            <!--<transition  mode="out-in">-->
                <router-view class="left" name="slider"></router-view>
                <router-view class="right" ></router-view>
            <!--</transition>-->
       </div>
    `,
    beforeRouteEnter(to,from,next){
        next(function(vm){
            // console.log(vm);
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})
var docmenu=Vue.component("docmenu",{
    template:`
        <div>
           <h3>安装</h3>
           <ul>
             <router-link tag="li" to="#one">111</router-link>
             <router-link tag="li" to="#two">222</router-link>
             <router-link tag="li" to="#three">333</router-link>
           </ul>
        </div>
    `,
    watch:{
        $route(){
            var hash=this.$route.hash.slice(1);
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber:document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: (document.querySelector("#"+hash).offsetTop)-44 }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop= this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()

        }
    }
})
var right=Vue.component("right",{
    template:`
        <div class="rightbig">
            <div id="one">aaaaaaaaaaaaaaaaaaaaaaaa</div>
            <div>151534651546545</div>
            <div>151534651546545</div>
            <div>151534651546545</div>
            <div>151534651546545</div>
            <div id="two">bbbbbbbbbbbbbbbbbbbbbb</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
            <div id="three">ccccccccccccccccccccc</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
            <div>445531354651332165</div>
        </div>
    `
});
var Login=Vue.component("Login",{
    template:`
<div>
<header class="mui-bar mui-bar-nav">
     <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
</header>
<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
		
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div></div>`,
    methods:{
        back(){
            router.push("/");
        },
        submit(){
            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/doc")
        }

    }


})
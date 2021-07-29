<template>
  <div class="slide-bar">
    <div class="author-summary">
      <div class="top-bar">作者</div>
      <router-link
        :to="{
          name: 'user_info',
          params: {
            name: userinfo.loginname,
          }
        }">
        <img :src="userinfo.avatar_url" alt="" />
      </router-link>
    </div>
    <div class="recent-topics">
      <div class="top-bar">作者最近主题</div>
      <ul>
          <li v-for="list in topiclimitby5" :key="list.id">
              <router-link :to="{
                  name: 'post_content',
                  params: {
                      id: list.id,
                      name: list.author.loginname
                  }
              }">
                  {{list.title}}
              </router-link>
          </li>
      </ul>
    </div>
    <div class="recent-replies">
      <div class="top-bar">作者最近回复</div>
      <ul>
          <li v-for="list in replylimitby5" :key="list.id">
              <router-link :to="{
                  name: 'post_content',
                  params: {
                      id: list.id,
                      name: list.author.loginname
                  }
              }">
                  {{list.title}}
              </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  data() {
    return {
      userinfo: {},
    };
  },
  methods: {
    getSlideBarData() {
      this.$http
        .get(
          //`http://mock.hunger-valley.com/cnode/api/v1/user/${this.$route.params.name}`
          `https://cnodejs.org/api/v1/user/${this.$route.params.name}`
        )
        .then((res) => {
          /* 加载成功，去除动画 */
          this.isLoading = false;
          this.userinfo = res.data.data;
        })
        .catch((err) => {
          /* 处理返回失败后的问题 */
          console.log(err);
        });
    },
  },
  computed:{
      topiclimitby5(){
          if(this.userinfo.recent_topics){
              return this.userinfo.recent_topics.slice(0, 5)
          }else{
            return this.userinfo.recent_topics
          }
      },
      replylimitby5(){
          if(this.userinfo.recent_replies){
              return this.userinfo.recent_replies.slice(0, 5)
          }else{
            return this.userinfo.recent_replies
          }
      },
  },
  beforeMount() {
    /* 加载成功之前显示加载动画 */
    this.isLoading = true;
    /* 在页面加载之前获取数据 */
    this.getSlideBarData();
  },
};
</script>

<style scoped>
ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
}

.slide-bar {
  float: right;
  width: 290px;
  font-size: 14px;
  margin-bottom: 20px;
  color: #333;
}

.top-bar {
    color: #51585c;
    border-radius: 3px 3px 0 0;
    padding: 10px;
}

.author-summary {
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    margin-bottom: 13px;
}

.author-summary img {
    width: 48px;
    height: 48px;
    margin: 10px;
}

ul > li{
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
}

ul > li > a {
  text-decoration: none;
  font-size: 14px;
  color: #778087;
}
</style>

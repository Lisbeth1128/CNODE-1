<template>
  <div class="UserInfo">
    <!-- 在数据未返回的时候，显示这个正在加载的动图 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" />
    </div>
    <div class="panel" v-else>
      <div class="header">
        主页
      </div>
      <section class="user-info">
        <img :src="userinfo.avatar_url" />
        <span>{{ userinfo.loginname }}</span>
        <!-- <p>{{userinfo.score}} 积分</p> -->
        <!-- <p>注册时间：{{userinfo.create_at | formatDate}}</p> -->
      </section>
      <div class="topics">
        <p class="topics-header">回复的主题</p>
        <ul>
          <li v-for="item in userinfo.recent_replies" :key="item.id">
            <router-link
              :to="{
                name: 'post_content',
                params: {
                  id: item.id,
                },
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="topics">
        <p class="topics-header">创建的主题</p>
        <ul>
          <li v-for="item in userinfo.recent_topics" :key="item.id">
            <router-link
              :to="{
                name: 'post_content',
                params: {
                  id: item.id,
                },
              }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      isLoading: false,
      userinfo: {},
    };
  },
  methods: {
    getUserInfoData() {
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
  beforeMount() {
    /* 加载成功之前显示加载动画 */
    this.isLoading = true;
    /* 在页面加载之前获取数据 */
    this.getUserInfoData();
  },
};
</script>

<style scoped>
.header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  font-size: 14px;
  color: #80bd01;
  margin-top: 13px;
}

.user-info {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
}

.user-info > img {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  vertical-align: middle;
  margin-right: 10px;
}

.user-info > span {
  color: #778087;
  font-size: 14px;
  vertical-align: middle;
}

.topics-header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  font-size: 14px;
  color: #333;
  margin-top: 13px;
}

p,ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
}

.topics > ul > li {
    background-color: #fff;
    border-top: 1px solid #f0f0f0;
    padding: 10px 0 10px 10px;
    font-size: 14px;
}

.topics > ul > li > a {
  text-decoration: none;
  font-size: 16px;
  color: #08c;
}

.topics > ul > li > a:hover {
  text-decoration: underline;
  color: #005580;
}
</style>

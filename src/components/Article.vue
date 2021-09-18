<template>
  <div class="article">
    <!-- 在数据未返回的时候，显示这个正在加载的动图 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" />
    </div>
    <div v-else>
      <div class="panel">
        <div class="topic-header">
          <div class="topic-title">{{ post.title }}</div>
          <div class="changes">
            <span>发布于 {{ post.create_at | formatDate }}</span>
            <span>作者 {{ post.author.loginname }}</span>
            <span>{{ post.visit_count }} 次浏览</span>
            <span>来自 {{ post | formatTab }}</span>
          </div>
        </div>
        <div class="inner-topic markdown-body">
          <div v-html="post.content" class="topic-content"></div>
        </div>
      </div>

      <div class="top-bar">回复</div>
      <div
        v-for="(reply, index) in post.replies"
        :key="reply.author.id"
        class="reply-sec">
        <div class="reply-up">
          <router-link :to="{
            name:'user_info',
            params:{
              name:reply.author.loginname
            }
            }">
          <img :src="reply.author.avatar_url" alt="" />
          </router-link> 
          <!-- <router-link> -->
          <span class="reply-author">{{ reply.author.loginname }}</span>
          <!-- </router-link> -->
          <span class="reply-time"> {{ index + 1 }}楼 </span>
          <span v-if="reply.ups.length > 0">
            {{ reply.ups.length }}
          </span>
          <span v-else></span>
        </div>
        <p v-html="reply.content" class="reply-content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      isLoading: false, // 是否正在加载
      post: {}, //代表当前文章页的所有内容，所有属性
    };
  },
  methods: {
    getArticleData() {
      this.$http
        .get(
          //`http://mock.hunger-valley.com/cnode/api/v1/topic/${this.$route.params.id}`
          `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`
        )
        .then((res) => {
          if (res.data.success === true) {
            this.isLoading = false;
            this.post = res.data.data;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.isLoading = true;
    this.getArticleData();
  },
  watch: {
    '$route'(){
      this.getArticleData()
    }
  }
};
</script>

<style>
@import url('../assets/github-markdown.css');

.article {
  margin-right: 305px;
}

.panel {
  margin: 13px 0;
}

.topic-header {
  background-color: #fff;
  padding: 10px;
  border-radius: 3px 3px 0 0;
}

.topic-title {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
}

.changes {
  font-size: 12px;
  color: #838383;
}

.changes > span {
  padding: 0 2px;
}

.changes > span::before {
  content: "•";
  padding: 0 2px;
}

.inner-topic {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
}

.topic-content {
  margin: 0 10px;
  font-size: 14px;
}

.top-bar {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  font-size: 14px;
  color: #444;
}

.reply-sec {
  padding-right: 10px;
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
  padding: 10px 0 10px 10px;
  font-size: 14px;
}

.reply-up {
  margin-left: 10px;
}

.reply-up  img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
  vertical-align: middle;
}

.reply-author {
  color: #666;
  font-size: 12px;
  font-weight: 700;
  margin-left: 5px;
  vertical-align: middle;
}

.reply-time {
  font-size: 11px;
  color: #08c;
  vertical-align: middle;
}

.reply-content {
  color: #333;
  font-size: 15px;
}
</style>

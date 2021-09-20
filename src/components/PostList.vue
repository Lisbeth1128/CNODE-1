<template>
  <div class="PostList">
      <!-- 在数据未返回的时候，显示这个正在加载的动图 -->
      <div class="loading" v-if="isLoading">
          <img src="../assets/loading.gif">
      </div>
      <!-- 我们的主题帖子列表 -->
      <div class="posts" v-else>
          <ul>
              <li>
                  <div class="topbar">
                      <span>全部</span>
                      <span>精华</span>
                      <span>分享</span>
                      <span>问答</span>
                      <span>招聘</span>
                  </div>    
              </li>
              <li v-for="post in sortedArray" :key="post.author.id">
                  <!-- 头像 -->
                  <img :src="post.author.avatar_url" alt="">
                  <!-- 回复/浏览 -->
                  <span class="reply-count">
                      <span class="count-of-replies">{{post.reply_count}}</span>
                      <span class="count-seperator">/</span>
                      <span class="count-of-visits">{{post.visit_count}}</span>
                  </span>
                  <!-- 帖子的分类 -->
                  <span :class="[{'put-good':(post.good === true), 'put-top':(post.top === true),
                  'topiclist-tab':(post.good !== true && post.top !== true)}]">
                    <span>
                        {{post | formatTab}}
                    </span>
                  </span>
                  <!-- 标题 -->
                  <router-link :to="{name: 'post_content', params:{id: post.id, name:post.author.loginname}}">
                      <span class="posts-title">
                      {{post.title}}
                      </span>
                  </router-link>
                  <!-- 最终回复时间 -->
                  <span class="last-reply pull-right">{{post.last_reply_at | formatDate}}</span>
              </li>
              <li>
                <Pagination @handle="renderList()"></Pagination>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
    name: 'PostList',
    data() {
        return {
            isLoading: false,
            /* 代表页面的列表数组 */
            posts: [],
            postpage: 1
        }
    },
    components: {
        Pagination
    },
    computed: {
        sortedArray: function(){
            /* 数据里有同时拥有置顶和精华属性的数据 */
            let postsList = this.posts.slice(0)// 不要在computed里改变data的属性，所以做一个深拷贝
            return postsList.sort(a => a.top && !a.good ? -1 : 1)
        }
    },
    methods: {
        getData(){
            this.$http.get(
                //'http://mock.hunger-valley.com/cnode/api/v1/topics'
                'https://cnodejs.org/api/v1/topics', {
                params: {
                    page: this.postpage,
                    limit: 20
                }
            })
            .then(res=>{
                /* 加载成功，去除动画 */
                this.isLoading = false
                this.posts = res.data.data
            })
            .catch(err=>{
                /* 处理返回失败后的问题 */
                console.log(err)
            })
        },
        renderList(value){
            this.postpage = value
            this.getData()
        }
    },
    beforeMount(){
        /* 加载成功之前显示加载动画 */
        this.isLoading = true 
        /* 在页面加载之前获取数据 */
        this.getData()
    }
}
</script>

<style scoped>

img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
}

.posts > ul > li:first-child {
    list-style: none;
    background-color: #f6f6f6;
    padding: 10px;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
    color: #80bd01;
}

.topbar > span {
    padding:3px 4px;
    border-radius: 3px;
    margin: 0 10px;
    font-size: 14px;
}


.posts > ul > li:not(:first-child) {
    list-style: none;
    padding: 9px;
    font-size: 15px;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
}

.posts > ul > li:not(:first-child,:last-child):hover{
    background: #f6f6f6;
}

.posts > ul > li > a:link {
    text-decoration: none;
}

.posts > ul > li > a:hover {
    text-decoration: underline;
    color: #333;
}

.reply-count {
    display: inline-block;
    width: 70px;
    text-align: center;
}

.count-of-replies {
    color: #9e78c0;
    font-size: 14px;
    vertical-align: middle;
}

.count-seperator {
    font-size: 10px;
    vertical-align: middle;
}

.count-of-visits {
    color: #b4b4b4;
    font-size: 10px;
    vertical-align: middle;
}

.posts-title {
    color: #333;
    font-size: 16px;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    text-overflow: ellipsis;
}

.pull-right {
    float: right;
}

.last-reply {
    color: #778087;
}

.put-good, .put-top {
    background-color: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
}

.topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
}

</style>
<template>
<div class="pagination">
    <button @click="changeBtn" class="pagebtn">首页</button>
    <button @click="changeBtn" class="pagebtn">上一页</button>
    <button v-if="judge" class="pagebtn" @click.prevent="changeBtn">......</button>
    <button v-for="btn in pagebtns" :key="btn"
    @click="changeBtn(btn)" 
    :class="[{currentPage:btn === currentPage}, 'pagebtn']">
        {{btn}}
    </button>
    <button class="pagebtn" @click.prevent="changeBtn">......</button>
    <button @click="changeBtn" class="pagebtn">下一页</button>
</div> 
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Pagination',
    data() {
        return {
            pagebtns: [1, 2, 3, 4, 5],
            currentPage: 1,
            judge: false
        }
    },
    methods: {
        changeBtn(page){
            //点击上一页、下一页、首页
            if(typeof page !== 'number'){
                switch(page.target.innerText){
                    case '上一页':
                        $('button.currentPage').prev().click()
                        break;
                    case '下一页':
                        $('button.currentPage').next().click()
                        break;
                    case '首页':
                        this.pagebtns = [1,2,3,4,5]
                        this.changeBtn(1)
                        break;
                    default:
                        break;
                }
                return
            }
            this.currentPage = page
            if(page > 4){
                this.judge = true
            }else{
                this.judge = false
            }
            if(page === this.pagebtns[4]){
                this.pagebtns.shift()//移除第一个元素
                this.pagebtns.splice(4, 0, this.pagebtns[3]+1)//添加最后一个
            }else if(page === this.pagebtns[0] && page !== 1){
                //先在第一个位置加一个
                this.pagebtns.unshift(this.pagebtns[0]-1)
                //移除最后一个数字
                this.pagebtns.splice(5, 1)
            }
            this.$emit('handle', this.currentPage)
        }
    }
}
</script>

<style scoped>
.pagination {
    margin: 10px 0 0 10px;
    font-size: 14px;
}

button {
    margin: 0;
    padding: 0;
    outline: none;
    border-style: none;
}

.pagebtn {
    width: 60px;
    height: 30px;
    background-color: #fff;
    color: #333;
    border: 1px solid #dddddd;
    border-radius: 3px;
}

.pagebtn:hover {
    background-color: #f5f5f5;
}

.currentPage {
    color: #80bd01;
}

.currentPage:hover {
    background-color: #fff;
}

</style>
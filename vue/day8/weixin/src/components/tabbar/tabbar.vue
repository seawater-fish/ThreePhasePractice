<template>
    <div class="weui-tabbar">
    <router-link v-for="(item, index) in tabbar" @click="highLight(index)" :key="index" href="javascript:;" :class="['weui-tabbar__item',{
        'weui-bar__item_on': offset === index
    }]"
    :to="{
        name:item.url}">
        <span style="display: inline-block;position: relative;">
            <img :src="icon" alt="" class="weui-tabbar__icon">
            <span v-if="item.badge>0" class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
            <span v-if="item.dot" class="weui-badge weui-badge_dot"
                style="position: absolute;top: 0;right: -6px;"></span>
        </span>
        <p class="weui-tabbar__label" v-text="item.title"></p>
    </router-link>
</div>
</template>
<script>
import icon from "../../assets/icon_tabbar.png";
import observer from "../../tools/observer";
export default {
    // props: {
    //     offset:Number
    // },
      data() {
        return {
            icon,
            tabbar: [{
                    title: '微信',
                    url: 'main',
                    badge: 8,
                    dot: false
                }, {
                    title: '通讯录',
                    url: 'contact',
                    badge: 0,
                    dot: false
                }, {
                    title: '发现',
                    url: 'recover',
                    badge: 0,
                    dot: true
                },
                {
                    title: "我",
                    url: 'mine',
                    badge: 0,
                    dot: false
                }
            ],
            offset: 0
        }
    },
    methods: {
        highLight(index) {
            this.offset = index
            observer.emit('setTabbar', index)
            // console.log(index)
        }
    }
}
</script>
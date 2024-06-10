<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffdo4b">

        <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label" index="1">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group v-for=" subItem in item.children" :key="subItem.path">
                <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<style lang="less" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu {
    border-right: none;
    height: 100vh;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}
</style>

<script>
export default {
    data() {
        return {

            menuData: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: "地址解析",
                    icon: "video-play",
                    url: "MallManage/MallManage"
                },
                {
                    path: '/drug',
                    name: 'drug',
                    label: '药品用法说明解析',
                    icon: 'video-play',
                    url: "DrugChinese/DrugChinese"
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '手写数字识别',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    path: '/ocr',
                    name: 'ocr',
                    label: '图片转文字',
                    icon: 'video-play',
                    url: 'OcrDetect/OcrDetect'
                },
                {
                    label: "猫狗分类",
                    icon: "location",
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '手势识别',
                            icon: 'setting',
                            url: 'Other/PageOne',
                        }, {
                            path: '/page2',
                            name: 'page2',
                            label: '人脸检测',
                            icon: "setting",
                            url: "Other/PageTwo"
                        },
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        // 点击菜单
        clickMenu(item) {
            console.log(item);
            // 当页面的路由与跳转的路由不一致的时候才允许跳转
            console.log(this.$route.path)
            if (this.$route.path !== item.path && !(this.$route.path === '/home' && item.path === '/')) {
                this.$router.push(item.path)
            }
            this.$store.commit('selectMenu', item);
        }
    },
    computed: {
        // 没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        // 有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse;
        }
    }
}
</script>
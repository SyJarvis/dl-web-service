<template>
    <div>
        

        <el-row>
            <el-col :span="12">
                <h1>地址解析</h1>
                <div class="grid-content bg-purple">
                    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
                    </el-input>
                    <el-button type="primary" @click="uploadAddress">解析</el-button>
                </div>
            </el-col>
            <el-col :span="12">
                <h1>解析内容</h1>
                <div class="grid-content bg-purple-light">
                    <el-input type="textarea" :rows="5" placeholder="解析内容" v-model="resultText">
                    </el-input>
                    <el-button type="primary" @click="clearText">清空内容</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            textarea: '',
            resultText: '',
        }
    },
    methods: {
        uploadAddress() {
            let that = this;
            axios.post("http://127.0.0.1:8000/api/detect/address", {
                address: this.textarea
            }).then(function (response) {
                
                console.log(response.data);
                console.log(response.data['data'])
                that.resultText = response.data['data'];
            })
        },
        clearText() {
            this.resultText = '';
        }
    }
}
</script>
<style></style>
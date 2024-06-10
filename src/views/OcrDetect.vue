<template>
    <div>
        <h1>图片转文字</h1>

        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-upload action="http://127.0.0.1:8000/api/detect/ocr" list-type="picture-card"
                        :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
                        :on-success="handleSuccess">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <el-input type="textarea" :rows="25" placeholder="请输入内容" v-model="textarea">
                    </el-input>
                    <el-button slot="trigger" size="small" type="primary" @click="clearText()">清空内容</el-button>
                </div>
                
            </el-col>
        </el-row>


    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            textarea: ''
        }
    },
    mounted() {
        //将上传图片的原路径赋值给临时路径
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleSuccess(res) {
            console.log(res)
            console.log(res.data)
            this.textarea += res.data.textarea;
        },
        clearText(){
            this.textarea = "";
        }
    }
}
</script>
<style lang="less" scoped></style>
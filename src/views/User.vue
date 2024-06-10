<template>
    <div class="manage">
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <!-- 用户的表单信息 -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <div class="">
            <el-dialog title="图片预览" :visible.sync="previewVisible" width="50%">
                <img :src="previewPath" class="previewImg" />
            </el-dialog>
            <!-- <div class="manage-header">
                <el-button @click="dialogVisible = true" type="primary">+ 新增</el-button>
            </div> -->
            <h1>手写数字识别</h1>
            <div class="imgManage">
                
                <el-col :span="12">
                    <el-upload class="upload-demo" action="http://127.0.0.1:8000/api/detect/mnist"
                        :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess"
                        :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-col>
            </div>
            <div class="imgBox" v-if="imageUrl">
                <img :src="imageUrl" alt="Uploaded Image" />
                <p>{{ info }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false,
            form: {

            },
            imageUrl: '',
            tempUrl: '',
            fileList: [],
            headerObj: {
                Authorization: window.sessionStorage.getItem('token')
            },
            //控制图片预览窗口的显示与隐藏
            previewVisible: false,
            //图片地址
            previewPath: '',
            info: ""
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
            this.previewVisible = true;
            this.previewPath = file.response.data.url;
        },
        handleExceed(files, fileList) {

        },
        handleSuccess(res) {
            console.log(res)
            console.log(res.data)
            this.imageUrl = res.data.img_url;
            this.info = "预测类别:" + res.data.class_idx + ", 预测概率: " + res.data.confs
        }
    }

}
</script>
<style lang="less" scoped>
.manage {
    .imgManage {
        display: flex;
    }

    .imgBox {
        img {
            width: 100px;
            height: 100px;
        }
    }

}
</style>
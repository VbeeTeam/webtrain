<template>
  <div class="add">
    <h1>添加客户</h1>
    <div class="content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择活动区域">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >添加</el-button
          >
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { isPhone } from "@/assets/js/common.js";
import { apiAdd } from "@/api/api.js";

export default {
  // 定义属性
  name: "Add",
  data() {
    var checkPhone = (rule, value, callback) => {
      console.log(value);
      if (value == "") {
        return callback(new Error("手机号不能为空"));
      } else if (!isPhone(value)) {
        return callback(new Error("请输入正确手机号"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        sex: "",
        age: "",
        description: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { min: 1, max: 3, message: "长度在 1 到 3 个字符", trigger: "blur" },
        ],
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
      },
    };
  },
  methods: {
    //添加提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
          apiAdd(this.ruleForm).then((res) => {
            if (res.code == 200) {
              this.$router.push({ path: "/" });
            }
          });
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style lang='scss' scoped>
.add {
  h1 {
    color: #ccc;
    line-height: 80px;
    text-align: center;
  }
  .content {
    background-color: #fff;
    border-radius: 10px;
    width: 450px;
    height: 450px;
    margin: 100px auto;
    padding: 30px;
    box-sizing: border-box;
    .el-form-item {
      margin-bottom: 35px;
    }
  }
}
</style>
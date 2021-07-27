<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <h3>管理后台登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item class="last-item">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { apiLogn } from "@/api/api"

export default {
  // 定义属性
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("ruleForm", this.ruleForm);
          apiLogn(this.ruleForm).then(res => {
            if(res.code == 200){
              window.localStorage.setItem("token",JSON.stringify(res.token));
              this.$router.push({ path: "/" });
            }
          })
          
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
.login {
  height: 100%;
  position: relative;
  .el-form {
    width: 500px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    h3 {
      color: #409eff;
      line-height: 70px;
      text-align: center;
    }
    .el-form-item {
      margin-bottom: 35px;
      ::v-deep.el-form-item__label {
        padding-right: 20px !important;
      }
    }
    .el-input {
      width: 320px;
      height: 40px;
    }
    .last-item {
      ::v-deep.el-form-item__content {
        margin-left: 0 !important;
        text-align: center;
      }
    }
  }
}
</style>
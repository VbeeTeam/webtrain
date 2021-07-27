<template>
  <div class="home">
    <h1>客户信息管理系统</h1>

    <div class="content">
      <!-- 查询表单 -->
      <el-form :inline="true" :model="formInline">
        <el-form-item label="姓名">
          <el-input
            v-model="formInline.name"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formInline.sex" clearable placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="info" @click="toAdd">新增</el-button>
        </el-form-item>
      </el-form>
      <!-- 展示table列表 -->
      <el-table  v-loading="loading" border :data="tableData" style="width: 100%">
        <el-table-column label="序号" type="index" width="50">
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180"
          property="name"
        ></el-table-column>
        <el-table-column label="性别" width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.sex == '0'">女</span>
            <span v-else-if="scope.row.sex == '1'">男</span>
          </template>
        </el-table-column>
        <el-table-column
          label="年龄"
          width="180"
          property="age"
        ></el-table-column>
        <el-table-column
          label="手机号"
          width="180"
          property="phone"
        ></el-table-column>
        <el-table-column
          label="备注"
          width="180"
          property="description"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { apiList, apiDel } from "@/api/api.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      formInline: {
        name: "",
        sex: "",
      },
      tableData: [],
      currentPage: 1,
      page: 1,
      size: 5,
      total: 0,
      loading: true
    };
  },
  methods: {
    //表单查询
    onSubmit() {
      console.log("submit!", this.formInline);
      this.getList()
    },
    //表格编辑
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: "/edit", query: { row: row } });
    },
    //表格删除
    handleDelete(index, row) {
      console.log(index, row);

      apiDel({ id: row.id }).then((res) => {
        if (res.code == 200) {
          this.tableData.splice(index, 1);
          this.$message({
            message: "删除成功",
            type: "success",
          });
        }
      });
    },
    //每页条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.getList();
    },
    //当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.getList();
    },
    //跳转新增页
    toAdd() {
      this.$router.push({ path: "/add" });
    },
    //请求列表
    getList() {
      apiList({ page: this.page, size: this.size, name:this.formInline.name, sex:this.formInline.sex }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.tableData = res.data;
          this.total = res.total;
          this.loading = false;
        }else{
          this.tableData = [];
          this.total = 0;
          this.$message({
          message: '暂无数据',
          type: 'warning'
        });
        }
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="scss" scoped>
.home {
  h1 {
    text-align: center;
    line-height: 80px;
    color: #ccc;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    .el-form {
      text-align: center;
    }
    .el-table {
      margin-bottom: 20px;
      ::v-deep.cell {
        text-align: center;
      }
    }
  }
}
</style>

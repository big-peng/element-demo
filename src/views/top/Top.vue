<template>
  <div id="top">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="1">
          <a href="top">
                <el-image
                style="width: 40px"
                :src="require('@/assets/logo.png')"></el-image></a>
      </el-col>
      <el-col :span="6">
          <div class="grid-content bg-purple">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
           style="display: flex;justify-content: flex-end"
        >
          <el-menu-item index="1">文件列表</el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu> -->
          <div style="border: 0">
          <el-button @click="dialogFormVisible=true;isLogin=true" :plain="true" style="border: 0">登录</el-button>
          <el-dialog :show-close="false" width="400px" :visible.sync="dialogFormVisible" style="padding: 0px">
                <el-form ref="loginForm" :model="form" :rules="rules" label-width="70px" class="login-box">
                
                <h3 v-if="isLogin" class="login-title">欢迎登录</h3>
                <h3 v-else class="login-title">欢迎注册</h3>
                <el-form-item label="账号" prop="username">
                    <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
                </el-form-item>
                <el-form-item v-if="!isLogin" label="确认密码" prop="password">
                    <el-input type="password" placeholder="请再输入一次密码" v-model="form.password"/>
                </el-form-item>
                <el-form-item v-if="!isLogin" label="验证码" prop="password">
                    <el-col :span="12">
                    <el-input type="password" placeholder="验证码" v-model="form.password"/>
                    </el-col>
                    <el-col :span="12">
                    <el-image
                    style="width: 150px"
                    :src="imgUrl + captcha" @click="updateCaptcha()"></el-image>
                    </el-col>
                </el-form-item>
                <el-form-item v-if="isLogin" label-width="100px" >
                    <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
                    
                    <el-button @click="isLogin=false" :plain="true" style="border: 0">注册</el-button>
                </el-form-item>
                <el-form-item v-else label-width="100px">
                    <el-button type="primary" v-on:click="onSubmit('loginForm')">注册</el-button>
                    
                    <el-button @click="isLogin=true" :plain="true" style="border: 0">登录</el-button>
                </el-form-item>
                </el-form>

                <el-dialog
                title="温馨提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <span>请输入账号和密码</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
                </el-dialog>
            </el-dialog>
            <el-button type="primary" @click="dialogFormVisible=true;isLogin=false">注册</el-button>
            </div>
        </el-menu>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        imgUrl: "http://39.100.225.63:8999/test/image/captcha?content=",
        captcha: "",
      activeIndex: "1",
      activeIndex2: "1",
      dialogFormVisible: false,
      isLogin: false,
      form: {
          name: '',
          region: ''
        },
        formLabelWidth: '120px'
    };
  },
  created(){
      this.updateCaptcha();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    updateCaptcha() {
        this.captcha = this.createCode(6);
    },
    createCode(length) {
        var code = "";
        var codeLength = parseInt(length); //验证码的长度
        var checkCode = document.getElementById("checkCode");
        ////所有候选组成验证码的字符，当然也可以用中文的
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
        //循环组成验证码的字符串
        for (var i = 0; i < codeLength; i++)
        {
            //获取随机验证码下标
            var charNum = Math.floor(Math.random() * 62);
            //组合成指定字符验证码
            code += codeChars[charNum];
        }
        if (checkCode)
        {
            //为验证码区域添加样式名
            checkCode.className = "code";
            //将生成验证码赋值到显示区
            checkCode.innerHTML = code;
        }
        console.log(code);
        return code;
    }
  }
};
</script>

<style>
:focus { outline:0; }
.el-row {
    height: 60px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: solid 1px #e6e6e6;
}
.el-dialog__header {
    padding: 0px;
}
.el-dialog__body {
    padding: 10px 30px 20px 30px;
}
.login-title{
    margin-top: 0px;
}
</style>
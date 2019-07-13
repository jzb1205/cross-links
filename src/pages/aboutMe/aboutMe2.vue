<template>
  <div>
    <div class="edit_container">
      <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)" @change="onEditorChange($event)">
      </quill-editor>
      <button v-on:click="saveHtml">保存</button>
      <el-upload class="upload-demo" action="" drag :auto-upload="false" :show-file-list="false"
        :on-change='changeUpload'>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">点击上传</div>
        <div class="el-upload__tip">支持绝大多数图片格式，单张图片最大支持5MB</div>
      </el-upload>Ï
    </div>
    <div class=" ql-container ql-snow">

      <div class="ql-editor" v-html="content"></div>
    </div>
    <div>
      <div class="cropper-content">
        <div class="cropper">
          <vueCropper ref="cropper" :img="option.img" :outputSize="option.size" :outputType="option.outputType"
            :info="true" :full="option.full" :canMove="option.canMove" :canMoveBox="option.canMoveBox"
            :original="option.original" :autoCrop="option.autoCrop" :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight" :fixedBox="option.fixedBox" @realTime="realTime" @imgLoad="imgLoad">
          </vueCropper>
        </div>
        <div class="show-preview"
          :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
          <div :style="previews.div" class="preview">
            <img :src="previews.url" :style="previews.img">
          </div>
        </div>
      </div>

      <div class="footer-btn">
        <div class="scope-btn">
          <label class="btn" for="uploads">选择图片</label>
          <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
            accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
          <Button type="ghost" @click="changeScale(1)" icon="plus-round"></Button>
          <Button type="ghost" @click="changeScale(-1)" icon="minus-round"></Button>
          <Button type="ghost" @click="rotateLeft"><span style="font-weight: 600;">↺</span></Button>
          <Button type="ghost" @click="rotateRight"><span style="font-weight: 600;">↻</span></Button>
        </div>
        <div class="upload-btn">
          <Button type="primary" style="margin-left: 46px;" @click="down('base64')">上传头像</Button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: `<p>hello world</p>`,
        dialogVisible: false,
        editorOption: {
          modules: {
            imageDrop: true,
            imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: ['Resize', 'DisplaySize', 'Toolbar']
            },
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
              ['blockquote', 'code-block'], //引用，代码块


              [{
                'header': 1
              }, {
                'header': 2
              }], // 标题，键值对的形式；1、2表示字体大小
              [{
                'list': 'ordered'
              }, {
                'list': 'bullet'
              }], //列表
              [{
                'script': 'sub'
              }, {
                'script': 'super'
              }], // 上下标
              [{
                'indent': '-1'
              }, {
                'indent': '+1'
              }], // 缩进
              [{
                'direction': 'rtl'
              }], // 文本方向


              [{
                'size': ['small', false, 'large', 'huge']
              }], // 字体大小
              [{
                'header': [1, 2, 3, 4, 5, 6, false]
              }], //几级标题


              [{
                'color': []
              }, {
                'background': []
              }], // 字体颜色，字体背景颜色
              [{
                'font': []
              }], //字体
              [{
                'align': []
              }], //对齐方式


              ['clean'], //清除字体样式
              ['image', 'video'] //上传图片、上传视频

            ],
          },

          theme: 'snow',
        },
        // 裁剪组件的基础配置option
        crap: false,
        previews: {},
        option: {
          img: 'http:img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png',
          size: 1,
          full: false, // 输出原图比例截图 props名full
          outputType: 'png',
          canMove: true,
          original: false,
          canMoveBox: true,
          autoCrop: true,
          autoCropWidth: 200,
          autoCropHeight: 200,
          fixedBox: true
        },
        downImg: '#'
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      },
    },
    methods: {
      onEditorReady(editor) { // 准备编辑器
      },
      onEditorBlur() {}, // 失去焦点事件
      onEditorFocus() {}, // 获得焦点事件
      onEditorChange() {}, // 内容改变事件
      saveHtml: function (event) {
        alert(this.content);
      },
      changeUpload() {

      },

      // 上传按钮   限制图片大小
      changeScale(num) {
        num = num || 1
        this.$refs.cropper.changeScale(num)
      },
      rotateLeft() {
        this.$refs.cropper.rotateLeft()
      },
      rotateRight() {
        this.$refs.cropper.rotateRight()
      },
      finish(type) {
        // 输出
        // var test = window.open('about:blank')
        // test.document.body.innerHTML = '图片生成中..'
        if (type === 'blob') {
          this.$refs.cropper.getCropBlob(data => {
            var img = window.URL.createObjectURL(data)
            this.model = true
            this.modelSrc = img
          })
        } else {
          this.$refs.cropper.getCropData(data => {
            this.model = true
            this.modelSrc = data
          })
        }
      },
      // 实时预览函数
      realTime(data) {
        this.previews = data
      },
      down(type) {
        // event.preventDefault()
        var aLink = document.createElement('a')
        aLink.download = 'author-img'
        // 输出
        if (type === 'blob') {
          this.$refs.cropper.getCropBlob(data => {
            this.downImg = window.URL.createObjectURL(data)
            aLink.href = window.URL.createObjectURL(data)
            aLink.click()
          })
        } else {
          this.$refs.cropper.getCropData(data => {
            this.downImg = data
            // aLink.href = data
            // aLink.click()
            // 将头像图片数据发送给后台
          })
        }
      },
      uploadImg(e, num) {
        //上传图片
        // this.option.img
        var file = e.target.files[0]
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
          return false
        }
        var reader = new FileReader()
        reader.onload = e => {
          let data
          if (typeof e.target.result === 'object') {
            // 把Array Buffer转化为blob 如果是base64不需要
            data = window.URL.createObjectURL(new Blob([e.target.result]))
          } else {
            data = e.target.result
          }
          if (num === 1) {
            this.option.img = data
          } else if (num === 2) {
            this.example2.img = data
          }
        }
        // 转化为base64
        reader.readAsDataURL(file)
        // 转化为blob
        // reader.readAsArrayBuffer(file)
      },
      imgLoad(msg) {
      }
    }
  }

</script>

<style lang='less' scoped>
  .cropper-content {
    .cropper {
      width: auto;
      height: 300px;
    }
  }

  .cropper-content {
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;

    .cropper {
      width: 350px;
      height: 300px;
    }

    .show-preview {
      flex: 1;
      -webkit-flex: 1;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      -webkit-justify-content: center;

      .preview {
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #cccccc;
        background: #cccccc;
        margin-left: 40px;
      }
    }
  }

  .footer-btn {
    margin-top: 30px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;

    .scope-btn {
      width: 350px;
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      -webkit-justify-content: space-between;
    }

    .upload-btn {
      flex: 1;
      -webkit-flex: 1;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      -webkit-justify-content: center;
    }

    .btn {
      outline: none;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      -webkit-transition: 0.1s;
      transition: 0.1s;
      font-weight: 500;
      padding: 10px 15px;
      font-size: 12px;
      border-radius: 3px;
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
    }
  }

</style>

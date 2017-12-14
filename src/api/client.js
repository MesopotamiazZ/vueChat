import io from 'socket.io-client'
const CHAT = {
  userid: null,
  username: null,
  socket: null,
  onlineCount: 0, // 当前客户端人数
  onlineUsers: null, // 当前聊天室用户对象客户端备份
  msgArr: [], // 存放聊天记录和登陆信息
  init: function () {
    this.socket = io.connect('http://192.168.1.128:8787')
    this.userid = sessionStorage.getItem('userid')
    this.username = sessionStorage.getItem('username')
    // 给服务器发送login事件
    this.socket.emit('login', {userid: this.userid, username: this.username})
    // 监听服务器login事件
    this.socket.on('login', function (obj) {
      console.log(obj.user.username + '加入了聊天室')
      CHAT.msgArr.push(obj)
      CHAT.updateSys()
    })
    // 监听服务器message事件
    this.socket.on('sendMessage', function (obj) {
      console.log('接收服务器广播...')
      console.log(obj)
    })
    // 监听其它用户退出
    this.socket.on('lagout', function (obj) {
      // 更新聊天室用户对象客户端备份数据
      CHAT.updateSys()
    })
  },
  submit: msg => { // 提交聊天消息内容
    if (msg !== '') {
      let obj = {
        userid: this.userid,
        username: this.username,
        mag: msg
      }
      // 给服务器发送message事件
      this.socket.emit('sendMessage', obj)
    } else {
      console.log('msg is null')
    }
    return false
  },
  updateSys: function () { // 更新系统消息，本例中在用户加入、退出的时候调用
  },
  logout: function () {
    this.socket.disconnect()
  }
}
export default CHAT

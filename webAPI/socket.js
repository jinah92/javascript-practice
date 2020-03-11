const WebSocket = require("ws");

a = server => {
  //server socket... (서버단 소켓 통신)

  //wss : 서버 소켓, ws : 소켓
  const wss = new WebSocket.Server({ server }); //서버 소켓을 생성
  wss.on("connection", (ws, req) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress; //클라이언트 ip 획득
    console.log("새로운 클라이언트 접속: " + ip);

    //message: 클라이언트가 보낸 메시지
    ws.on("message", message => {
      wss.clients.forEach(client => {
        //클라이언트가 살아있는 상태인 경우
        if (client.readyState === WebSocket.OPEN) {
          client.send(message); //살아있는 클라이언트 모두에게 broadcast
        }
      });
    });
    //사용자가 연결을 끊은 경우
    ws.on("close", () => {
      console.log("클라이언트 접속 해제: " + ip);
    });
    //에러가 발생한 경우
    ws.on("error", error => {
      console.log(error);
    });
  }); //이벤트 등록 메서드: on , 이벤트가 발생하면 콜백함수를 실행(연결이 된 상태 => 소켓 객체가 존재한 상태)
};

module.exports = a;

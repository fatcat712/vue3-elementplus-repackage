/*
 * @Description: 
 * @Author: zhanyinjia
 * @Date: 2024-06-20 13:50:55
 * @LastEditors: zhanyinjia
 * @LastEditTime: 2024-06-20 16:38:56
 */
// 监听主线程中的消息。
// 如果消息中的 command 是 "generate"，则调用 `generatePrimse()`
addEventListener("message", (message) => {
  console.log('向worker发送消息', message);
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

// 生成质数 (非常低效)
function generatePrimes(quota) {
  let res = 0
 for (let index = 0; index < 10000000000; index++) {
  res = res+index
 }

  // 完成后给主线程发送一条包含我们生成的质数数量的消息消息。
  postMessage(res);
}

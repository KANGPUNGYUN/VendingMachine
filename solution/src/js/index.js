import ColaGenerator from "./components/colaGenerator.js";
import VendingMachine from "./components/vendingmachine.js";

const vendingMachine = new VendingMachine();
const colaGenerator = new ColaGenerator();

// 자바스크립트는 await를 만나면 프라미스 객체가 반환될때까지 기다립니다.
// 원래 await는 탑레벨에서 작동하지 않습니다. https://ko.javascript.info/async-await
// (async () => {
//     await colaGenerator.setup();
//     vendingmachineFunc.setup()

// })()

// 탑레벨 await는 최상위 모듈에서만 작동하며, async 함수만 사용할 수 있습니다. https://v8.dev/features/top-level-await
await colaGenerator.setup();
vendingMachine.setup();
import ReactDom from "react-dom/client"
// import App from "./11_render函数的优化/App"
import App from "./demo/App"

// 编写react代码，并进行渲染
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App />)
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;


const app = createApp(App)
import {
    Button,
    ConfigProvider,
    Layout,
    Menu,
    message,
    Input,
    Space,
    Dropdown,
    Divider,
    Form,
    AutoComplete,
    Modal,
    Tree,
    Drawer,
    Row,
    Col,
    Select,
    DatePicker,
    Tooltip,
    Breadcrumb,
    Popconfirm,
    InputNumber,
    Table,
    Pagination,
} from 'ant-design-vue'

app.use(Button)
    .use(Layout)
    .use(ConfigProvider)
    .use(Menu)
    // .use(message)
    .use(Input)
    .use(Space)
    .use(Dropdown)
    .use(Divider)
    .use(Form)
    .use(AutoComplete)
    .use(Modal)
    .use(Tree)
    .use(Drawer)
    .use(Row)
    .use(Col)
    .use(Select)
    .use(DatePicker)
    .use(Tooltip)
    .use(Breadcrumb)
    .use(Popconfirm)
    .use(InputNumber)
    .use(Table)
    .use(Pagination)
    .use(router)
    .mount('#app');

app.config.globalProperties.$message = message;
// createApp(App).mount('#app')

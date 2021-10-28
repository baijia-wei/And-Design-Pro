# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

##目录结构  
#我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。  

├── config                   # umi 配置，包含路由，构建等配置  
├── mock                     # 本地模拟数据  
├── public  
│   └── favicon.png          # Favicon  
├── src  
│   ├── assets               # 本地静态资源  
│   ├── components           # 业务通用组件  
│   ├── e2e                  # 集成测试用例  
│   ├── layouts              # 通用布局  
│   ├── models               # 全局 dva model  
│   ├── pages                # 业务页面入口和常用模板  
│   ├── services             # 后台接口服务  
│   ├── utils                # 工具库  
│   ├── locales              # 国际化资源  
│   ├── global.less          # 全局样式  
│   └── global.ts            # 全局 JS  
├── tests                    # 测试工具  
├── README.md  
└── package.json  
  

详细请参考 https://pro.ant.design/zh-CN/docs/folder

所有路由组件（会配置在路由配置中的组件）我们推荐以大驼峰命名打平到 pages 下面第一级（复杂的项目可以增加 group 层级，在 group 下放置 pages）。不建议在路由组件内部再嵌套路由组件 - 不方便分辨一个组件是否是路由组件，而且不方便快速从全局定位到路由组件。

我们推荐尽可能的拆分路由组件为更细粒度的组件，对于多个页面可能会用到的组件我们推荐放到 src/components 中，对于只是被单个页面依赖的（区块）组件，我们推荐就近维护到路由组件文件夹下即可。


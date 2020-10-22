// router/modules/home.js
const wallet = [
  {
    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
    path: "/pages/wallet/createWallet/index",
    name: "createWallet",
    meta: {
      title: "创建钱包",
    },
  },
  {
    path: "/pages/wallet/index",
    redirect: "/",
    name: "wallet",
    meta: {
      title: "钱包",
    },
  },
];
export default wallet;

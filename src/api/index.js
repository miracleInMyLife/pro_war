import ajax from './ajax'

// 必买清单（精选页）
export const reqBuyList = () => ajax('/buyList/mustBuy')


// 必买清单（家电页）


// 必买清单（酷机页）
export const reqCoolMachine = ()=>ajax('/buyList/coolMachine')
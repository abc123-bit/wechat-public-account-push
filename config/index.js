export const config = {

    // 公众号APP_ID
    APP_ID: "wx085d7f62d80a4890",
    // 公众号APP_SECRET
    APP_SECRET: "aa9184227312a0173ab7243feb7b7249",
    // 模板消息id
    TEMPLATE_ID: "gWmEAH0VxlW3Fcnt33itEByPkrTgkKR3N20t-3i6lqU",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["oO95X6xNiVFJiS0JNArFcXZhswEA"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "广西",
    // 所在城市
    CITY: "梧州",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "莹莹", "year": "2001", "date": "06-26"},
      

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2016-06-09",
        


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "哈喽宝贝，又是爱你的一天哦~"


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}} 
// 距离宝贝的生日还有：{{BIRTHDAYS.DATA}}
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

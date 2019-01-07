// pages/rule/rule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    duty: '本微信小程序所载之信息内容由第三方开发公司依据其现行惯例及政策，并利用其现时所得的信息内容编制。第三方开发公司在编制时已尽一切合理的努力确保微信小程序各页信息内容准确。第三方开发公司定期检查微信小程序，并于适当时更新各页的信息内容以反映情况的转变。\n\n虽然第三方开发公司已尽力确保微信小程序所载之信息内容准确，第三方开发公司不接受由于使用或参考微信小程序后发生的任何事宜或采取的任何行动引起的任何责任或法律责任，亦不会为上述信息内容的任何误差、遗漏、误述或错误、或为任何微信小程序的访客或其他可使用微信小程序信息内容的人士，可能直接或间接蒙受的任何经济或其他损失负上责任或法律责任。\n\n本微信小程序的信息内容仅供一般资讯用途，不存在任何专业意见或邀约出售，或第三方开发公司对用户所发布的信息内容的任何约束性承诺，而各用户如有任何疑问或对有关本微信小程序内任何信息内容的事宜有任何问题，应征询合适的专业人士的意见，第三方开发公司不承担任何由于使用本微信小程序而导致的损失。\n\n第三方开发公司不会受理任何用户或其他人士在参考本微信小程序的信息内容后提出与本微信小程序有关的任何申索、诉讼或法律程序。',
    cooperation: "“汉阳小狮子”是为即将进入汉阳大学本科、大学院的中国留学生量身打造的微信小程序。旨在帮助即将进入汉阳大学的同学提供了解和交流有关汉阳大学的校园生活的最佳机会和平台。“汉阳小狮子”主要功能涵盖课程的评价、常见问题答疑、二手书交易以及租房信息发布。同时“汉阳小狮子”也欢迎有意共同维护以及后续进行进一步开发的优秀在韩留学生加入我们。并且如果有想要加入或开发此类小程序的在韩其他学校，也可以通过以下联系方式发送合作意愿邮件到我们的邮箱。",
    email:"e-it@foxmail.com",
    privacy: '我们致力于保护您在使用我们“汉阳小狮子”微信小程序时所提供的私隐、私人资料以及个人的资料( 统称 "个人资料" )，使我们在收集、使用、储存和传送个人资料方面符合 (与个人资料私隐有关的法律法规) 及消费者保护方面的最高标准。\n为确保您对我们在处理个人资料上有充分信心，您切要详细阅读及理解隐私政策的条文。特别是您一旦使用我们的“汉阳小狮子”微信小程序，将被视为接受、同意、承诺和确认:\n您在自愿下连同所需的同意向我们披露个人资料；您会遵守本隐私政策的全部条款和限制；您在我们的“汉阳小狮子”微信小程序上作登记、资料会被收集；您同意日后我们对隐私政策的任何修改；您同意我们的分公司、附属公司、雇员、就您可能会感兴趣的产品和服务与您联络( 除非您已经表示不想收到该等讯息 )。被收集的个人资料的种类\n经您同意，我们会收集、管理和监控个人资料。为了向您提供我们的各项服务，您需要供給那些我们认为为达到你的指示和进一步改善我们的服务所需的个人资料和不具名的资料，包括但不限于:\n\n个人资料\n\n您的姓名、性别、年龄、出生日期、微信号、电话号码、传真号码、住址或通讯地址、电子邮箱地址。\n\n不具名的资料\n\n收集个人资料及不具名的资料的目的及用途如下：通过我们的“汉阳小狮子”微信小程序向您提供我们的各项服务；当您使用我们的“汉阳小狮子”微信小程序时，能辨认及确认您的身份；让您使用我们的“汉阳小狮子”微信小程序时得到为您而设的感受；我们的顾客服务人员有需要时可以与您联系；统计我们“汉阳小狮子”微信小程序使用量的数据；令您使用我们“汉阳小狮子”微信小程序时更方便；为改进我们的产品、服务及“汉阳小狮子”微信小程序内容而进行市场研究调查；为我们搞的活动、市场销售和推广计划收集资料；遵守法律、政府和监管机关的规定，包括但不限于对个人资料披露及通知的规定；让我们及可能处于您住的国家之外的我们的分公司、附属公司、关联公司、雇员、代理人、服务伙伴或其它跟我们合作的第三者进行产品及/或服务的推广；就我们提供的各项服务，分析、核对及/或审查您的信用、付款及/或地位；处理在您要求下的任何付款指示，直接扣帐及/或信用安排；使您能运作您的账户及/或使我们能从账户支取尚欠的服务费。\n\nCookies\n\n当您到访我们“汉阳小狮子”微信小程序时，我们通过cookies使用Google Stats去记录我们的业绩以及核对在线广告的效果。Cookie是发送到您的浏览器上并在您的电脑硬盘驱动器上存储的小量数据。只有当您使用您的电脑进入我们“汉阳小狮子”微信小程序时，Cookie才能够被发送到您的电脑硬盘上。Cookies常用于记录访问者浏览我们“汉阳小狮子”微信小程序上的各个项目时的习惯以及偏好。Cookies所搜集的资料是不记名的集体统计数据，不载有个人资料。Cookies不能用于取得您的硬盘上的数据、您的电邮地址、及您的私人数据。当您重新上访我们“汉阳小狮子”微信小程序时，可以省却您再次登记的步骤。大多数浏览器框架都预设为可以接受Cookies。您可以选择将您的浏览器设定为不接受Cookies，或如果Cookies一被装上就通知您。不过，若设定为禁止Cookies，您或许便不能启动或使用我们“汉阳小狮子”微信小程序的某些功能。若您不禁止或除去cookies，每次您使用同一台电脑进入我们的“汉阳小狮子”微信小程序时，我们的网络服务器会通知我们你上访了我们“汉阳小狮子”微信小程序，继而我们会辨认出您及接达您的登记数据及付款数据，搜集有关使用量、巿场研究、行迹进程及参与推广活动的资料等。\n您可以改动您用来进入我们“汉阳小狮子”微信小程序的电脑的浏览器上的设定来决定是否接受cookie。若您愿意，您可以改变浏览器上的设定。若您将您的偏好放在浏览器上，让您可以接受所有的cookies，收到cookies发出的通知，甚至可以拒绝一切cookies。然而，若在您的浏览器选用不要cookies或拒绝所有cookies，您有可能不能使用或启动我们“汉阳小狮子”微信小程序的某些功能，或有可能需要重新登入您的资料。\n\n保存个人资料及不具名资料\n\n您提供给我们的个人资料及不具名资料，只保留到搜集的目的已达到的时候，除非应适用的法律法规之规定而继续保留。\n\n个人资料的拥有权及披露\n\n在我们“汉阳小狮子”微信小程序上所搜集的一切资料都由我们所拥有，不会出租或出售给任何无关的第三方。\n\n个人资料的保护\n\n我们实施妥适的实物、电子、管理及技术方面的措施来保护和保障您的个人资料的安全。我们尽力确保通过我们“汉阳小狮子”微信小程序所搜集的任何个人资料皆免于任何与我们无关的第三者的滋扰。我们采取的安全措施包括但不限于：实物措施：存有您个人资料的记录会被存放在有锁的地方。\n电子措施：存有您个人资料的电脑数据会被存放在受严格登入限制的电脑系统和存储媒体上。\n管理措施：只有经我们授权的职员才能接触到您的个人资料，这些职员需要遵守我们个人资料保密的内部守则。\n技术措施：可能采用如Secure Socket Layer Encryption这种加密技术来输送您的个人资料。\n其它措施：我们的网络服务器受到"防火墙"的保护。\n若您知悉我们的“汉阳小狮子”微信小程序上有任何安全方面的漏洞，请不要遟疑去联絡我们，使我们可以尽快采取妥适的行动。\n尽管实施了上述技术和保安的措施，我们不能保证资料在互联网上的输送绝对安全，因此我们不能绝对保证您通过我们“汉阳小狮子”微信小程序提供给我们的个人资料在一切时候都是安全的。对任何因未经授权而接触您个人资料所发生的事件我们一槪不承担责任，于这方面产生或导致的任何损失或损害，我们也不负责赔偿。\n\n未成年人\n\n若任何家长或监护人相信有未成年人在未经家长或监护人批准或同意下向我们提供了个人资料，请随便联系我们的客户服务部，以确保该资料被除去，并从我们的促销名单中撤下。\n\n接达及更正个人资料\n\n您有权：查询我们是否持有您的任何个人资料；接达我们所持有的您的个人资料；要求我们更正任何不正确的个人资料；不时地征询有关我们所持有的个人资料的性质，政策和执行方法。\n然而在法律允许的极端有限的情况下，我们可以不允许您接达您的个人资料，例如：如您接达及得到您个人资料可能会对您有危险；当您的个人资料可能会影响一项正在进行的调查；当您的个人资料涉及到法庭程序，并且可能受到发现的限制。\n当您的个人资料涉及一项商业上敏感的决策过程；当另外一個人的个人资料也包含在同一份记录中。\n若您欲接达或更正个人资料，或索取有关个人资料的政策、执行方法和被持有的个人资料的种类，应致函到我们的下列的地址。 要求接达或更正资料可能要付合理的处理费用。\n\n安全保管您的密码\n\n除了我们致力确保您的个人资料存放和处理的安全外，您不应向任何人披露您的登录密码或帐户资料，以保护您的个人资料。每当您登录我们“汉阳小狮子”微信小程序时，尤其是当您使用他人的电脑或者是公共的互联网终端机时，请记着操作完毕后一定要点击退出。您的努力和协助对于我们保护您的个人资料绝对有帮助。\n\n隐私政策的修改\n\n本隐私政策可以不时(无需事先向您通知)被修改。任何对隐私政策的修改都会公示在我们“汉阳小狮子”微信小程序上。\n\n联系我们\n\n若您对我们的隐私政策有任何问题或忧虑，欢迎随时联系我们。'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
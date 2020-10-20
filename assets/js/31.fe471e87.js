(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{535:function(a,t,s){"use strict";s.r(t);var e=s(2),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"网络优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络优化"}},[a._v("#")]),a._v(" 网络优化")]),a._v(" "),s("h3",{attrs:{id:"缓存方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存方式"}},[a._v("#")]),a._v(" 缓存方式")]),a._v(" "),s("p",[a._v("缓存对于前端性能优化来说是个很重要的点，良好的缓存策略可以降低资源的重复加载提高网页的整体加载速度。")]),a._v(" "),s("p",[a._v("通常浏览器缓存策略分为两种：强缓存和协商缓存。")]),a._v(" "),s("h4",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),s("p",[a._v("实现强缓存可以通过两种响应头实现：Expires 和 Cache-Control 。强缓存表示在缓存期间不需要请求，"),s("code",[a._v("state code")]),a._v(" 为 200：")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("Expires"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Wed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2018")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("08")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("41")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("00")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GMT")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Expires 是 "),s("code",[a._v("HTTP / 1.0")]),a._v(" 的产物，表示资源会在 "),s("code",[a._v("Wed, 22 Oct 2018 08:41:00 GMT")]),a._v(" 后过期，需要再次请求。并且 Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("Cache"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" max"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("age"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Cache-Control 出现于 "),s("code",[a._v("HTTP / 1.1")]),a._v("，优先级高于 Expires 。该属性表示资源会在 "),s("code",[a._v("30")]),a._v(" 秒后过期，需要再次请求。")]),a._v(" "),s("h4",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),s("p",[a._v("如果缓存过期了，我们就可以使用协商缓存来解决问题。协商缓存需要请求，如果缓存有效会返回 304。")]),a._v(" "),s("p",[a._v("协商缓存需要客户端和服务端共同实现，和强缓存一样，也有两种实现方式。")]),a._v(" "),s("h5",{attrs:{id:"last-modified-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[a._v("#")]),a._v(" Last-Modified/If-Modified-Since")]),a._v(" "),s("p",[s("code",[a._v("Last-Modified")]),a._v(" 表示本地文件最后修改日期，"),s("code",[a._v("If-Modified-Since")]),a._v(" 会将 "),s("code",[a._v("Last-Modified")]),a._v(" 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。")]),a._v(" "),s("p",[a._v("但是如果在本地打开缓存文件，就会造成 "),s("code",[a._v("Last-Modified")]),a._v(" 被修改，所以在 "),s("code",[a._v("HTTP / 1.1")]),a._v(" 出现了 "),s("code",[a._v("ETag")]),a._v(" 。")]),a._v(" "),s("h5",{attrs:{id:"etag-if-none-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[a._v("#")]),a._v(" ETag/If-None-Match")]),a._v(" "),s("p",[a._v("ETag 类似于文件指纹，"),s("code",[a._v("If-None-Match")]),a._v(" 会将当前 "),s("code",[a._v("ETag")]),a._v(" 发送给服务器，询问该资源 "),s("code",[a._v("ETag")]),a._v(" 是否变动，有变动的话就将新的资源发送回来。并且 "),s("code",[a._v("ETag")]),a._v(" 优先级比 "),s("code",[a._v("Last-Modified")]),a._v(" 高。")]),a._v(" "),s("h3",{attrs:{id:"缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[a._v("#")]),a._v(" 缓存策略")]),a._v(" "),s("p",[a._v("对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略：")]),a._v(" "),s("ul",[s("li",[a._v("对于某些不需要缓存的资源，可以使用 "),s("code",[a._v("Cache-control: no-store")]),a._v(" ，表示该资源不需要缓存")]),a._v(" "),s("li",[a._v("对于频繁变动的资源，可以使用 "),s("code",[a._v("Cache-Control: no-cache")]),a._v(" 并配合 "),s("code",[a._v("ETag")]),a._v(" 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新。")]),a._v(" "),s("li",[a._v("对于代码文件来说，通常使用 "),s("code",[a._v("Cache-Control: max-age=31536000")]),a._v(" 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件。")])]),a._v(" "),s("h1",{attrs:{id:"http-2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0"}},[a._v("#")]),a._v(" HTTP 2.0")]),a._v(" "),s("p",[a._v("因为浏览器会有并发请求限制，在 "),s("code",[a._v("HTTP / 1.1")]),a._v(" 时代，每个请求都需要建立和断开，消耗了好几个 RTT 时间，并且由于 TCP 慢启动的原因，加载体积大的文件会需要更多的时间。")]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("HTTP / 2.0")]),a._v(" 中引入了多路复用，能够让多个请求使用同一个 TCP 链接，极大的加快了网页的加载速度。并且还支持 Header 压缩，进一步的减少了请求的数据大小。")]),a._v(" "),s("h3",{attrs:{id:"预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预解析"}},[a._v("#")]),a._v(" 预解析")]),a._v(" "),s("p",[a._v("DNS 解析也是需要时间的，可以通过预解析的方式来预先获得域名所对应的 IP：")]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("link")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("//yuchengkai.cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[a._v("#")]),a._v(" 预加载")]),a._v(" "),s("p",[a._v("在开发中，可能会遇到这样的情况。有些资源不需要马上用到，但是希望尽早获取，这时候就可以使用预加载。")]),a._v(" "),s("p",[a._v("预加载其实是声明式的 fetch ，强制浏览器请求资源，并且不会阻塞 onload 事件，可以使用以下代码开启预加载：")]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("link")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://example.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("预加载可以一定程度上降低首屏的加载时间，因为可以将一些不影响首屏但重要的文件延后加载，唯一缺点就是兼容性不好。")]),a._v(" "),s("h3",{attrs:{id:"预渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预渲染"}},[a._v("#")]),a._v(" 预渲染")]),a._v(" "),s("p",[a._v("可以通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染：")]),a._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("link")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("prerender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://example.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染")]),a._v(" "),s("h2",{attrs:{id:"渲染优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染优化"}},[a._v("#")]),a._v(" 渲染优化")]),a._v(" "),s("p",[a._v("对于代码层面的优化，你可以查阅浏览器系列中的 "),s("a",{attrs:{href:"https://yuchengkai.cn/docs/Browser/browser-ch.html##%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6",target:"_blank",rel:"noopener noreferrer"}},[a._v("相关内容"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[a._v("#")]),a._v(" 懒加载")]),a._v(" "),s("p",[a._v("懒加载就是将不关键的资源延后加载。")]),a._v(" "),s("p",[a._v("懒加载的原理就是只加载自定义区域（通常是可视区域，但也可以是即将进入可视区域）内需要加载的东西。对于图片来说，先设置图片标签的 src 属性为一张占位图，将真实的图片资源放入一个自定义属性中，当进入自定义区域时，就将自定义属性替换为 src 属性，这样图片就会去下载资源，实现了图片懒加载。")]),a._v(" "),s("p",[a._v("懒加载不仅可以用于图片，也可以使用在别的资源上。比如进入可视区域才开始播放视频等等。")]),a._v(" "),s("h3",{attrs:{id:"懒执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒执行"}},[a._v("#")]),a._v(" 懒执行")]),a._v(" "),s("p",[a._v("懒执行就是将某些逻辑延迟到使用时再计算。该技术可以用于首屏优化，对于某些耗时逻辑并不需要在首屏就使用的，就可以使用懒执行。懒执行需要唤醒，一般可以通过定时器或者事件的调用来唤醒。")]),a._v(" "),s("h2",{attrs:{id:"文件优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件优化"}},[a._v("#")]),a._v(" 文件优化")]),a._v(" "),s("h3",{attrs:{id:"图片文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片文件"}},[a._v("#")]),a._v(" 图片文件")]),a._v(" "),s("h4",{attrs:{id:"图片压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片压缩"}},[a._v("#")]),a._v(" 图片压缩")]),a._v(" "),s("p",[a._v("对于一张 "),s("code",[a._v("100x100")]),a._v(" 像素的图片来说，图像上有 "),s("code",[a._v("10000")]),a._v(" 个像素点，如果每个像素的值是 RGBA 存储的话，那么也就是说每个像素有 4 个通道，每个通道 1 个字节（8 位 = 1 个字节），所以该图片大小大概为 "),s("code",[a._v("39KB（10000 _ 1 \\* 4 / 1024）")]),a._v("。")]),a._v(" "),s("p",[a._v("但是在实际项目中，一张图片可能并不需要使用那么多颜色去显示，我们可以通过减少每个像素的调色板来相应缩小图片的大小。")]),a._v(" "),s("p",[a._v("了解了如何计算图片大小的知识，那么对于如何优化图片，想必大家已经有 2 个思路了：")]),a._v(" "),s("ul",[s("li",[a._v("减少像素点")]),a._v(" "),s("li",[a._v("减少每个像素点能够显示的颜色")])]),a._v(" "),s("h4",{attrs:{id:"图片加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片加载"}},[a._v("#")]),a._v(" 图片加载")]),a._v(" "),s("ul",[s("li",[a._v("不用图片。很多时候会使用到很多修饰类图片，其实这类修饰图片完全可以用 CSS 去代替。")]),a._v(" "),s("li",[a._v("对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加 载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。")]),a._v(" "),s("li",[a._v("小图使用 "),s("code",[a._v("base64")]),a._v(" 格式")]),a._v(" "),s("li",[a._v("将多个图标文件整合到一张图片中（雪碧图）")]),a._v(" "),s("li",[a._v("选择正确的图片格式：\n"),s("ul",[s("li",[a._v("对于能够显示 "),s("code",[a._v("WebP")]),a._v(" 格式的浏览器尽量使用 "),s("code",[a._v("WebP")]),a._v(" 格式。因为 "),s("code",[a._v("WebP")]),a._v(" 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好")]),a._v(" "),s("li",[a._v("小图使用 "),s("code",[a._v("PNG")]),a._v("，其实对于大部分图标这类图片，完全可以使用 "),s("code",[a._v("SVG")]),a._v(" 代替")]),a._v(" "),s("li",[a._v("照片使用 "),s("code",[a._v("JPEG")])])])])]),a._v(" "),s("h3",{attrs:{id:"其他文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他文件"}},[a._v("#")]),a._v(" 其他文件")]),a._v(" "),s("ul",[s("li",[a._v("CSS 文件放在 "),s("code",[a._v("head")]),a._v(" 中")]),a._v(" "),s("li",[a._v("服务端开启文件压缩功能")]),a._v(" "),s("li",[a._v("将 "),s("code",[a._v("script")]),a._v(" 标签放在 "),s("code",[a._v("body")]),a._v(" 底部，因为 JS 文件执行会阻塞渲染。当然也可以把"),s("code",[a._v("script")]),a._v(" 标签放在任意位置然后加上 "),s("code",[a._v("defer")]),a._v(" ，表示该文件会并行下载，但是会放到 HTML 解析完成后顺序执行。对于没有任何依赖的 JS 文件可以加上 "),s("code",[a._v("async")]),a._v(" ，表示加载和渲染后续文档元素的过程将和 JS 文件的加载与执行并行无序进行。")]),a._v(" "),s("li",[a._v("执行 JS 代码过长会卡住渲染，对于需要很多时间计算的代码可以考虑使用 "),s("code",[a._v("Webworker")]),a._v("，"),s("code",[a._v("Webworker")]),a._v(" 可以让我们另开一个线程执行脚本而不影响渲染。")])]),a._v(" "),s("h3",{attrs:{id:"cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[a._v("#")]),a._v(" CDN")]),a._v(" "),s("p",[a._v("静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie。")]),a._v(" "),s("h2",{attrs:{id:"其他优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他优化"}},[a._v("#")]),a._v(" 其他优化")]),a._v(" "),s("h3",{attrs:{id:"webpack-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置"}},[a._v("#")]),a._v(" Webpack 配置")]),a._v(" "),s("ul",[s("li",[a._v("对于 Webpack4，打包项目使用 "),s("code",[a._v("production")]),a._v(" 模式，这样会自动开启代码压缩")]),a._v(" "),s("li",[a._v("使用 ES6 模块来开启 "),s("code",[a._v("tree shaking")]),a._v("，这个技术可以移除没有使用的代码")]),a._v(" "),s("li",[a._v("优化图片，对于小图可以使用 "),s("code",[a._v("base64")]),a._v(" 的方式写入文件中")]),a._v(" "),s("li",[a._v("按照路由拆分代码，实现按需加载")]),a._v(" "),s("li",[a._v("给打包出来的文件名添加哈希，实现浏览器缓存文件")])]),a._v(" "),s("h3",{attrs:{id:"错误拦截"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误拦截"}},[a._v("#")]),a._v(" 错误拦截")]),a._v(" "),s("p",[a._v("对于代码运行错误，通常的办法是使用 "),s("code",[a._v("window.onerror")]),a._v(" 拦截报错。该方法能拦截到大部分的详细报错信息，但是也有例外：")]),a._v(" "),s("ul",[s("li",[a._v("对于跨域的代码运行错误会显示 "),s("code",[a._v("script error")]),a._v(". 对于这种情况我们需要给 "),s("code",[a._v("script")]),a._v(" 标签添加 "),s("code",[a._v("crossorigin")]),a._v(" 属性")]),a._v(" "),s("li",[a._v("对于某些浏览器可能不会显示调用栈信息，这种情况可以通过 "),s("code",[a._v("arguments.callee.caller")]),a._v(" 来做栈递归")]),a._v(" "),s("li",[a._v("对于异步代码来说，可以使用 "),s("code",[a._v("catch")]),a._v(" 的方式捕获错误。比如 "),s("code",[a._v("Promis")]),a._v("e 可以直接使用 "),s("code",[a._v("catch")]),a._v(" 函数，"),s("code",[a._v("async await")]),a._v("可以使用 "),s("code",[a._v("try catch")])])]),a._v(" "),s("p",[a._v("但是要注意线上运行的代码都是压缩过的，需要在打包时生成 "),s("code",[a._v("sourceMap")]),a._v(" 文件便于 "),s("code",[a._v("debug")]),a._v("，对于捕获的错误需要上传给服务器，通常可以通过 "),s("code",[a._v("img")]),a._v(" 标签的 "),s("code",[a._v("src")]),a._v(" 发起一个请求。")])])}),[],!1,null,null,null);t.default=v.exports}}]);
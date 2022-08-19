import{_ as i,r as a,o as u,c as k,a as t,w as e,e as d,b as n,d as s}from"./app.0ef7ca6e.js";const m={},b=d('<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><ul><li>ComTree \u6811\u7EC4\u4EF6</li></ul><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><ul><li>js\u4E2D\u5F15\u5165\u7EC4\u4EF6 <code>import ComTree from &#39;@/component/ComTree/index.vue</code></li><li>html\u4E2D\u6CE8\u5165\u7EC4\u4EF6 <code>&lt;ComTree config=[]/&gt;</code></li></ul><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2>',5),v=n("ul",null,[n("li",null,"\u6E90\u7801")],-1),y=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("box flex-pb p-10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ComTree")]),s(`
            `),n("span",{class:"token attr-name"},"search"),s(`
            `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u6811demo"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":treeData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("menuListData.treeData.data || []"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"@nodeClick"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("nodeClick"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":current-node-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("8481"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      \u5F53\u524D\u8282\u70B9id\uFF1A{{ state.nodeKey }} `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`\u5F53\u524D\u8282\u70B9label\uFF1A{{ state.nodeLabel }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ComTreeDemo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token operator"},"<"),s("template"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),s("div "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"box flex-pb p-10"'),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s(`ComTree
            search
            title`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"\u6811demo"'),s(`
    `),n("span",{class:"token operator"},":"),s("treeData"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"treeData"'),s(`
    @nodeClick`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nodeClick"'),s(`
    `),n("span",{class:"token operator"},":"),s("current"),n("span",{class:"token operator"},"-"),s("node"),n("span",{class:"token operator"},"-"),s("key"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"8481"'),s(`
    `),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("p"),n("span",{class:"token operator"},">"),s(`
      \u5F53\u524D\u8282\u70B9id\uFF1A`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" state"),n("span",{class:"token punctuation"},"."),s("nodeKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"<"),s("br "),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s("\u5F53\u524D\u8282\u70B9label\uFF1A"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" state"),n("span",{class:"token punctuation"},"."),s("nodeLabel "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("p"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("template"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token operator"},"<"),s("script setup name"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"ComTreeDemo"'),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token keyword"},"import"),s(" ComTree "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./index.vue"'),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(" treeData "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./json.js"'),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"nodeKey"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"8481"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"nodeLabel"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u9000\u8D27\u7BA1\u7406\u8BE6\u60C5"'),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"nodeClick"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"val"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  state`),n("span",{class:"token punctuation"},"."),s("nodeKey "),n("span",{class:"token operator"},"="),s(" val"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},";"),s(`
  state`),n("span",{class:"token punctuation"},"."),s("nodeLabel "),n("span",{class:"token operator"},"="),s(" val"),n("span",{class:"token punctuation"},"."),s("label"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".box"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token selector"},"> p"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"flex-basis"),n("span",{class:"token punctuation"},":"),s(" 60%"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u83DC\u5355\u7ED3\u6784"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"848"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/root"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"isRoot"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"true"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u56E2\u8D2D\u5408\u540C\u7BA1\u7406"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"846"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"contract"'),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u9000\u8D27\u7BA1\u7406\u8BE6\u60C5"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8481"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"returns/detail"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u7EC8\u6B62\u51FA\u5E93\u7BA1\u7406\u8BE6\u60C5"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"847"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"terminateDelivery/detail"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u9000\u8D27\u7BA1\u7406"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"842"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"returns"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u9000\u8D27\u7BA1\u7406\u8BE6\u60C5"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"841"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"returns/detail"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u7EC8\u6B62\u51FA\u5E93\u7BA1\u7406"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"840"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"terminateDelivery"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u5B9E\u63D0\u786E\u8BA4\u7BA1\u7406\u786E\u8BA4"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"839"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"confirmation/confirm"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u5B9E\u63D0\u786E\u8BA4\u7BA1\u7406"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"838"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"confirmation"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u5B9E\u63D0\u786E\u8BA4\u7BA1\u7406\u8BE6\u60C5"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"837"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"confirmation/detail"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u53D8\u66F4\u63D0\u8D27\u5355\u8BE6\u60C5"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"836"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"changeDelivery/detail"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u53D8\u66F4\u63D0\u8D27\u5355"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"835"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"changeDelivery"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u63D0\u8D27\u5355\u8BE6\u60C5"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"834"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/loadingDetail"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u63D0\u5355\u7EC8\u6B62\u51FA\u5E93"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"833"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/stopOutWarehouse"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u53D8\u66F4\u63D0\u8D27\u65B9\u5F0F"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"832"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/changeType"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u63D0\u8D27\u5355\u7BA1\u7406"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"831"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/ladingBill"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u9000\u8D27\u7533\u8BF7"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"830"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"refundApply"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u67E5\u770B\u5408\u540C"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"829"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"viewContract"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u63D0\u8D27\u7533\u8BF7"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"828"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"takeGoods"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u56E2\u8D2D\u8BA2\u5355\u8BE6\u60C5"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"827"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"detail"'),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u56E2\u8D2D\u8BA2\u5355\u7BA1\u7406"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"826"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"list"'),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" treeData"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function h(f,_){const o=a("ComTreeDemo"),p=a("CodeTabs");return u(),k("div",null,[b,t(o),v,t(p,{data:[{title:"template"},{title:"json.js"}],"tab-id":"shell"},{tab0:e(({title:l,value:c,isActive:r})=>[y]),tab1:e(({title:l,value:c,isActive:r})=>[g]),_:1},8,["data"])])}var C=i(m,[["render",h],["__file","index.html.vue"]]);export{C as default};

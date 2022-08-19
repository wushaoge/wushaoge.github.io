import{_ as i,r as p,o as c,c as l,b as n,a,e as o,d as s}from"./app.0ef7ca6e.js";var u="/img/router/router1.png",r="/img/router/router2.png",d="/img/router/router3.png",k="/img/router/router6.png",v="/img/router/router4.png",m="/img/router/router5.png",b="/img/router/router7.png";const g={},q=o(`<h2 id="\u4E00-\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u4E00\uFF1A\u914D\u7F6E\u9879</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// **\u8DEF\u7531\u5730\u5740\u548C\u6A21\u5757\u6587\u4EF6\u76EE\u5F55\u4FDD\u6301\u4E00\u81F4**</span>
  path<span class="token operator">:</span> <span class="token string">&quot;/permission&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8DEF\u7531\u540D\u5B57\uFF08\u5BF9\u5E94\u4E0D\u8981\u91CD\u590D\uFF09</span>
  name<span class="token operator">:</span> <span class="token string">&quot;permission&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// Layout\u7EC4\u4EF6\uFF0C\u4E00\u822C\u4E0D\u7528\u52A8\uFF08\u5982\u9700\u6574\u4F53\u7A7A\u767D\u9875\u9762\uFF0C\u8BF7\u53BB\u6389\uFF09</span>
  component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  <span class="token comment">// \u8DEF\u7531\u91CD\u5B9A\u5411</span>
  redirect<span class="token operator">:</span> <span class="token string">&quot;/permission/page&quot;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83DC\u5355\u540D\u79F0\uFF08\u517C\u5BB9\u56FD\u9645\u5316\u3001\u975E\u56FD\u9645\u5316\uFF0C\u5982\u4F55\u7528\u56FD\u9645\u5316\u7684\u5199\u6CD5\u5C31\u5FC5\u987B\u5728\u6839\u76EE\u5F55\u7684locales\u6587\u4EF6\u5939\u4E0B\u5BF9\u5E94\u6DFB\u52A0\uFF09</span>
    title<span class="token operator">:</span> <span class="token string">&quot;message.permission&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u56FE\u6807\uFF08\u53EA\u9488\u5BF9\u9876\u7EA7\u8DEF\u7531\uFF0C\u4E5F\u5C31\u662F\u4E0E\u5F53\u524Dmeta\u5E73\u7EA7\u7684component\u4E3ALayout\u7684\u8DEF\u7531\uFF09</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;Lollipop&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u5728\u83DC\u5355\u4E2D\u663E\u793A\uFF08\u53EF\u4E0D\u5199\uFF0C\u9ED8\u8BA4true\uFF09</span>
    showLink<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u5347\u5E8F\u6392\u5E8F\uFF0C\u503C\u8D8A\u9AD8\u6392\u7684\u8D8A\u540E\uFF08\u53EA\u9488\u5BF9\u9876\u7EA7\u8DEF\u7531\uFF0C\u4E5F\u5C31\u662F\u4E0E\u5F53\u524Dmeta\u5E73\u7EA7\u7684component\u4E3ALayout\u7684\u8DEF\u7531\uFF09</span>
    rank<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5B50\u8DEF\u7531\u914D\u7F6E\u9879</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// **_\u5B50\u8DEF\u7531\u5730\u5740\u548C\u9875\u9762\u7EC4\u4EF6\u76EE\u5F55\u4FDD\u6301\u4E00\u81F4_**</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/permission/page&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8DEF\u7531\u540D\u5B57\uFF08\u5BF9\u5E94\u4E0D\u8981\u91CD\u590D\uFF0C\u6839\u5F53\u524D\u7EC4\u4EF6\u7684name\u4FDD\u6301\u4E00\u81F4\uFF09</span>
      name<span class="token operator">:</span> <span class="token string">&quot;permissionPage&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6309\u9700\u52A0\u8F7D\u7EC4\u4EF6</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;/@/views/permission/page/index.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83DC\u5355\u540D\u79F0\uFF08\u517C\u5BB9\u56FD\u9645\u5316\u3001\u975E\u56FD\u9645\u5316\uFF0C\u5982\u4F55\u7528\u56FD\u9645\u5316\u7684\u5199\u6CD5\u5C31\u5FC5\u987B\u5728\u6839\u76EE\u5F55\u7684locales\u6587\u4EF6\u5939\u4E0B\u5BF9\u5E94\u6DFB\u52A0\uFF09</span>
        title<span class="token operator">:</span> <span class="token string">&quot;message.permissionPage&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u662F\u5426\u5728\u83DC\u5355\u4E2D\u663E\u793A\uFF08\u53EF\u4E0D\u5199\uFF0C\u9ED8\u8BA4true\uFF09</span>
        showLink<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u662F\u5426\u663E\u793A\u7236\u7EA7\u83DC\u5355</span>
        showParent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8DEF\u7531\u6743\u9650\u8BBE\u7F6E</span>
        authority<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8DEF\u7531\u7EC4\u4EF6\u7F13\u5B58\uFF08\u5F00\u542F true\u3001\u5173\u95ED false\uFF09</span>
        keepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5185\u5D4C\u7684iframe\u94FE\u63A5</span>
        frameSrc<span class="token operator">:</span> <span class="token string">&quot;https://pure-admin-doc.vercel.app&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u9875\u9762\u52A0\u8F7D\u52A8\u753B\uFF08\u6709\u4E24\u79CD\u5F62\u5F0F\uFF0C\u4E00\u79CD\u76F4\u63A5\u91C7\u7528vue\u5185\u7F6E\u7684transitions\u52A8\u753B\uFF0C\u53E6\u4E00\u79CD\u662F\u4F7F\u7528animate.css\u5199\u8FDB\u3001\u79BB\u573A\u52A8\u753B\uFF09</span>
        transition<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5F53\u524D\u8DEF\u7531\u52A8\u753B\u6548\u679C\uFF0C\u53C2\u8003https://next.router.vuejs.org/guide/advanced/transitions.html#transitions</span>
          name<span class="token operator">:</span> <span class="token string">&quot;fade&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// \u8FDB\u573A\u52A8\u753B</span>
          enterTransition<span class="token operator">:</span> <span class="token string">&quot;animate__zoomIn&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">// \u79BB\u573A\u52A8\u753B</span>
          leaveTransition<span class="token operator">:</span> <span class="token string">&quot;animate__zoomOut&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u52A8\u6001\u8DEF\u7531\u53EF\u6253\u5F00\u7684\u6700\u5927\u6570\u91CF</span>
        dynamicLevel<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5237\u65B0\u91CD\u5B9A\u5411\uFF08\u7528\u4E8E\u672A\u5F00\u542F\u6807\u7B7E\u9875\u7F13\u5B58\uFF0C\u5237\u65B0\u9875\u9762\u83B7\u53D6\u4E0D\u5230\u52A8\u6001title\uFF09</span>
        refreshRedirect<span class="token operator">:</span> <span class="token string">&quot;/tabs/index&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u83DC\u5355\u540D\u79F0\u53F3\u4FA7\u7684\u989D\u5916\u56FE\u6807\uFF0C\u652F\u6301fontawesome\u3001iconfont\u3001element-plus-icon</span>
      extraIcon<span class="token operator">:</span> <span class="token punctuation">{</span>
        svg<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;team-iconxinpinrenqiwang&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-\u540E\u53F0\u8FD4\u56DE\u8DEF\u7531\u751F\u6210\u83DC\u5355\u7684\u5404\u79CD\u683C\u5F0F\u914D\u7F6E\u53C2\u8003-\u4E0A\u9762\u4EE3\u7801-\u4E0B\u9762\u5BF9\u5E94\u6548\u679C\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u540E\u53F0\u8FD4\u56DE\u8DEF\u7531\u751F\u6210\u83DC\u5355\u7684\u5404\u79CD\u683C\u5F0F\u914D\u7F6E\u53C2\u8003-\u4E0A\u9762\u4EE3\u7801-\u4E0B\u9762\u5BF9\u5E94\u6548\u679C\u622A\u56FE" aria-hidden="true">#</a> \u4E8C\uFF1A\u540E\u53F0\u8FD4\u56DE\u8DEF\u7531\u751F\u6210\u83DC\u5355\u7684\u5404\u79CD\u683C\u5F0F\u914D\u7F6E\u53C2\u8003\uFF08\u4E0A\u9762\u4EE3\u7801\uFF0C\u4E0B\u9762\u5BF9\u5E94\u6548\u679C\u622A\u56FE\uFF09</h2><p>\u7B80\u8FF0\uFF1A\u4E00\u822C\u4E00\u7EA7\u83DC\u5355\u4EE3\u8868\u65E0\u4EFB\u4F55\u5B50\u83DC\u5355\u7684\u83DC\u5355\uFF0C\u4E8C\u7EA7\u83DC\u5355\u4EE3\u8868\u4E00\u7EA7\u83DC\u5355\u4E0B\u9762\u6709\u5B50\u83DC\u5355\uFF0C\u4E09\u7EA7\u83DC\u5355\u4EE3\u8868\u4E8C\u7EA7\u83DC\u5355\u4E0B\u9762\u6709\u5B50\u83DC\u5355\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002\u4E0B\u9762\u4F8B\u5B50\u7684\u56FD\u9645\u5316\uFF0C\u6211\u53EA\u5728\u4E00\u7EA7\u83DC\u5355\u90A3\u4E3E\u4F8B</p><h3 id="\u4E00\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F-\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F-\u56FD\u9645\u5316" aria-hidden="true">#</a> \u4E00\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F\uFF08\u56FD\u9645\u5316\uFF09</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> aboutRouter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u91CD\u5B9A\u5411</span>
  redirect<span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83DC\u5355\u56FE\u6807</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;question-line&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u6392\u5E8F\u663E\u793A\u7B49\u7EA7</span>
    rank<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u8DEF\u7531\u8DEF\u5F84</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u9875\u9762name\uFF0C\u4F5C\u4E3A\u4E00\u79CD\u89C4\u8303\u5FC5\u4F20</span>
      name<span class="token operator">:</span> <span class="token string">&quot;reAbout&quot;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83DC\u5355\u6807\u9898</span>
        title<span class="token operator">:</span> <span class="token string">&quot;menus.hsAbout&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="router1" loading="lazy"></p><h3 id="\u4E00\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F-\u975E\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F-\u975E\u56FD\u9645\u5316" aria-hidden="true">#</a> \u4E00\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F\uFF08\u975E\u56FD\u9645\u5316\uFF09</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> aboutRouter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u91CD\u5B9A\u5411</span>
  redirect<span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83DC\u5355\u56FE\u6807</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;question-line&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u6392\u5E8F\u663E\u793A\u7B49\u7EA7</span>
    rank<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u8DEF\u7531\u8DEF\u5F84</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u9875\u9762name\uFF0C\u4F5C\u4E3A\u4E00\u79CD\u89C4\u8303\u5FC5\u4F20</span>
      name<span class="token operator">:</span> <span class="token string">&quot;reAbout&quot;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83DC\u5355\u6807\u9898</span>
        title<span class="token operator">:</span> <span class="token string">&quot;\u5173\u4E8E&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="router2" loading="lazy"></p><h3 id="\u4E8C\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F-\u6709\u4E24\u79CD\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F-\u6709\u4E24\u79CD\u6A21\u5F0F" aria-hidden="true">#</a> \u4E8C\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F\uFF08\u6709\u4E24\u79CD\u6A21\u5F0F\uFF09</h3><p>\u2460 \u7B2C\u4E00\u79CD\uFF08\u8FD9\u79CD\u6A21\u5F0F\u9488\u5BF9\u7236\u7EA7\u83DC\u5355\u4E0B\u53EA\u6709\u4E00\u4E2A\u5B50\u83DC\u5355\u7684\u60C5\u51B5\uFF0C\u5728\u5B50\u83DC\u5355\u7684 meta \u5C5E\u6027\u4E2D\u52A0\u4E0A showParent: true \u5373\u53EF\uFF09</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> aboutRouter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u7684path\u5730\u5740\u53EF\u4EE5\u968F\u4FBF\u5199\uFF08\u524D\u63D0\u4EE5/\u5F00\u5934\uFF0C\u800C\u4E14\u4E0D\u80FD\u548C\u5B50\u8DEF\u7531\u7684path\u8DEF\u5F84\u91CD\u590D\uFF09\uFF0C\u4F46\u662F\u4E0D\u80FD\u4E0D\u5199\uFF0C\u56E0\u4E3A\u4E0D\u4F5C\u4E3A\u8DF3\u8F6C\uFF0C\u8DF3\u8F6C\u8D70\u7684\u662F\u5B50\u8DEF\u7531\u7684path\uFF0C\u4E5F\u5C31\u662F/about</span>
  path<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83DC\u5355\u56FE\u6807</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;question-line&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u6807\u9898</span>
    title<span class="token operator">:</span> <span class="token string">&quot;\u5173\u4E8E&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u6392\u5E8F\u663E\u793A\u7B49\u7EA7</span>
    rank<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u8DEF\u7531\u8DEF\u5F84</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u9875\u9762name\uFF0C\u4F5C\u4E3A\u4E00\u79CD\u89C4\u8303\u5FC5\u4F20</span>
      name<span class="token operator">:</span> <span class="token string">&quot;reAbout&quot;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83DC\u5355\u6807\u9898</span>
        title<span class="token operator">:</span> <span class="token string">&quot;\u5173\u4E8E\uFF08\u5B50\u83DC\u5355\uFF09&quot;</span><span class="token punctuation">,</span>
        showParent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="router3" loading="lazy"></p><p>\u2461 \u7B2C\u4E8C\u79CD\uFF08\u8FD9\u79CD\u6A21\u5F0F\u9488\u5BF9\u7236\u7EA7\u83DC\u5355\u4E0B\u6709\u5927\u4E8E\u6216\u7B49\u4E8E\u4E24\u4E2A\u5B50\u83DC\u5355\u7684\u60C5\u51B5\uFF09</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> systemRouter <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&quot;/system&quot;</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&quot;/system/user/index&quot;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;setting&quot;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&quot;\u7CFB\u7EDF\u7BA1\u7406&quot;</span><span class="token punctuation">,</span>
    rank<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/system/user/index&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&quot;\u57FA\u7840\u4FE1\u606F&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/system/dict/index&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&quot;dict&quot;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&quot;\u5B57\u5178\u7BA1\u7406&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt="router6" loading="lazy"></p><h3 id="\u4E09\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F" aria-hidden="true">#</a> \u4E09\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> nestedRouter <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&quot;/nested&quot;</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1&quot;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;\u591A\u7EA7\u83DC\u5355&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;histogram&quot;</span><span class="token punctuation">,</span>
    rank<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1&quot;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&quot;\u83DC\u53551&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      redirect<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1/menu1-1/index&quot;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1/menu1-1/index&quot;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Menu1-1&quot;</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&quot;\u83DC\u53551-1&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1/menu1-3/index&quot;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Menu1-3&quot;</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&quot;\u83DC\u53551-3&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="router4" loading="lazy"></p><h3 id="\u56DB\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u56DB\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F" aria-hidden="true">#</a> \u56DB\u7EA7\u83DC\u5355\u6700\u7B80\u5355\u7684\u683C\u5F0F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> nestedRouter <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&quot;/nested&quot;</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1&quot;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&quot;\u591A\u7EA7\u83DC\u5355&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;histogram&quot;</span><span class="token punctuation">,</span>
    rank<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1&quot;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&quot;\u83DC\u53551&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      redirect<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1/menu1-1/index&quot;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1/menu1-1/index&quot;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Menu1-1&quot;</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&quot;\u83DC\u53551-1&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1/menu1-2&quot;</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&quot;\u83DC\u53551-2&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          redirect<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1/menu1-2/menu1-2-1&quot;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&quot;/nested/menu1/menu1-2/menu1-2-1&quot;</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">&quot;Menu1-2-1&quot;</span><span class="token punctuation">,</span>
              meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&quot;\u83DC\u53551-2-1&quot;</span><span class="token punctuation">,</span>
                showParent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt="router5" loading="lazy"></p><h3 id="\u5185\u5D4Ciframe\u548C\u5916\u94FE" tabindex="-1"><a class="header-anchor" href="#\u5185\u5D4Ciframe\u548C\u5916\u94FE" aria-hidden="true">#</a> \u5185\u5D4C<code>iframe</code>\u548C<code>\u5916\u94FE</code></h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> frameRouter <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&quot;/iframe&quot;</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&quot;/iframe/pure&quot;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;monitor&quot;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&quot;\u5916\u90E8\u9875\u9762&quot;</span><span class="token punctuation">,</span>
    rank<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// iframe</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/iframe/pure&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&quot;reFramePure&quot;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&quot;\u5E73\u53F0\u6587\u6863(\u5185\u5D4C)&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u628A\u8981\u5185\u5D4C\u7684iframe\u94FE\u63A5\u5199\u5728frameSrc\u5C5E\u6027\u4E0A\u5373\u53EF</span>
        frameSrc<span class="token operator">:</span> <span class="token string">&quot;https://pure-admin-doc.vercel.app&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u5916\u94FE</span>
      path<span class="token operator">:</span> <span class="token string">&quot;/external&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u628A\u8981\u8DF3\u8F6C\u5230\u7684\u5916\u90E8\u94FE\u63A5\u5199\u5728name\u5C5E\u6027\u4E0A\u5373\u53EF</span>
      name<span class="token operator">:</span> <span class="token string">&quot;https://pure-admin-doc.vercel.app&quot;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&quot;\u5E73\u53F0\u6587\u6863(\u5916\u94FE)&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+'" alt="router7" loading="lazy"></p><h2 id="\u4E09-\u540E\u7AEF\u4F20-component-\u7EC4\u4EF6\u4E24\u79CD\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u540E\u7AEF\u4F20-component-\u7EC4\u4EF6\u4E24\u79CD\u6A21\u5F0F" aria-hidden="true">#</a> \u4E09\uFF1A\u540E\u7AEF\u4F20 component \u7EC4\u4EF6\u4E24\u79CD\u6A21\u5F0F</h2>',27),h={href:"https://gitee.com/yiming_chang/vue-pure-admin/blob/main/src/router/utils.ts#L228",target:"_blank",rel:"noopener noreferrer"},_=s("router/utils.ts"),y=s(),f=n("li",null,[n("p",null,[s("\u5BF9\u540E\u7AEF\u4F20"),n("code",null,"component"),s("\u7EC4\u4EF6\u8DEF\u5F84\u548C\u4E0D\u4F20\u505A\u517C\u5BB9\uFF08\u5982\u679C\u540E\u7AEF\u4F20"),n("code",null,"component"),s("\u7EC4\u4EF6\u8DEF\u5F84\uFF0C\u90A3\u4E48"),n("code",null,"path"),s("\u53EF\u4EE5\u968F\u4FBF\u5199\uFF0C\u5982\u679C\u4E0D\u4F20\uFF0C"),n("code",null,"component"),s("\u7EC4\u4EF6\u8DEF\u5F84\u4F1A\u6839 path \u4FDD\u6301\u4E00\u81F4\uFF09")])],-1),x=s("\u5BF9\u4E8E\u540E\u7AEF\u4F20"),w=n("code",null,"component",-1),L=s("\u7684"),R={href:"https://gitee.com/yiming_chang/vue-pure-admin/blob/main/mock/asyncRoutes.ts#L44",target:"_blank",rel:"noopener noreferrer"},z=s("\u4EE3\u7801\u53C2\u8003"),P=n("h2",{id:"\u56DB-\u91CD\u7F6E\u8DEF\u7531-\u4E3B\u8981\u7528\u4E8E\u7528\u6237\u89D2\u8272\u5207\u6362",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u56DB-\u91CD\u7F6E\u8DEF\u7531-\u4E3B\u8981\u7528\u4E8E\u7528\u6237\u89D2\u8272\u5207\u6362","aria-hidden":"true"},"#"),s(" \u56DB\uFF1A\u91CD\u7F6E\u8DEF\u7531\uFF08\u4E3B\u8981\u7528\u4E8E\u7528\u6237\u89D2\u8272\u5207\u6362\uFF09")],-1),A={href:"https://gitee.com/yiming_chang/vue-pure-admin/blob/main/src/router/utils.ts#L97",target:"_blank",rel:"noopener noreferrer"},B=s("resetRouter"),I=s(),M=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">{</span> resetRouter <span class="token punctuation">}</span> from <span class="token string">&quot;/@/router/utils&quot;</span>
resetRouter<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u867D\u7136<code>vue-router</code>\u5B98\u65B9\u53EA\u652F\u6301\u5230\u4E8C\u7EA7<code>keep-alive</code>\u7F13\u5B58\uFF0C\u4F46\u5E73\u53F0\u5BF9\u8DEF\u7531\u8FDB\u884C\u4E86\u5904\u7406\uFF0C\u53EA\u8981\u5BF9\u5F53\u524D\u8DEF\u7531\u8BBE\u7F6E\u4E86<code>keepAlive: true</code>\uFF0C\u5E76\u4E14\u5BF9\u5E94\u7684\u9875\u9762<code>name</code>\u4E0E\u8DEF\u7531\u7684 <code>name</code>\u4FDD\u6301\u4E00\u81F4\uFF0C\u4E0D\u7BA1\u5C42\u7EA7\u591A\u6DF1\u90FD\u4F1A\u652F\u6301<code>keep-alive</code>\u7F13\u5B58</p></div>`,2);function N(S,V){const t=p("ExternalLinkIcon"),e=p("Badge");return c(),l("div",null,[q,n("p",null,[n("a",h,[_,a(t)]),y,a(e,{text:"\u4EE3\u7801"})]),n("ul",null,[f,n("li",null,[n("p",null,[x,w,L,n("a",R,[z,a(t)])])])]),P,n("p",null,[n("a",A,[B,a(t)]),I,a(e,{text:"\u4EE3\u7801"})]),M])}var T=i(g,[["render",N],["__file","index.html.vue"]]);export{T as default};

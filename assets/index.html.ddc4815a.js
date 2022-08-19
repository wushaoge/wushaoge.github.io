import{_ as e,o as n,c as i,e as s}from"./app.0ef7ca6e.js";const l={},t=s(`<h2 id="\u7ED3\u6784\u603B\u89C8" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u603B\u89C8" aria-hidden="true">#</a> \u7ED3\u6784\u603B\u89C8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u251C\u2500\u2500 .github (\u53EF\u9009)                                           # GitHub Actions \u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 .husky (\u53EF\u9009)                                            # \u63D0\u4EA4\u6821\u9A8C\u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 .vscode (\u53EF\u9009)                                           # IDE\u5DE5\u5177\u63A8\u8350\u914D\u7F6E\u6587\u4EF6\uFF08\u5F00\u53D1\u8F85\u52A9\uFF09
\u251C\u2500\u2500 build											        # \u6784\u5EFA\u5DE5\u5177
\u251C\u2500\u2500 locales											        # \u56FD\u9645\u5316\u6587\u4EF6\u5B58\u653E\u5904
\u251C\u2500\u2500 mock                                                    # mock \u6A21\u62DF\u540E\u53F0\u6570\u636E
\u251C\u2500\u2500 node_modules                                            # \u6A21\u5757\u5305
\u251C\u2500\u2500 public                                                  # \u9759\u6001\u8D44\u6E90
\u251C\u2500\u2500 src
\u251C\u2500\u2500 types                                                   # \u5168\u5C40 TS \u7C7B\u578B\u914D\u7F6E
\u251C\u2500\u2500 .editorconfig                                           # \u7F16\u8F91\u5668\u8BFB\u53D6\u6587\u4EF6\u683C\u5F0F\u53CA\u6837\u5F0F\u5B9A\u4E49\u914D\u7F6E
\u251C\u2500\u2500 .env                                                    # \u5168\u5C40\u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u251C\u2500\u2500 .env.development                                        # \u5F00\u53D1\u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u251C\u2500\u2500 .env.production                                         # \u751F\u4EA7\u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u251C\u2500\u2500 .env.staging                                            # \u9884\u53D1\u5E03\u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u251C\u2500\u2500 .eslintignore                                           # eslint \u8BED\u6CD5\u68C0\u67E5\u5FFD\u7565\u6587\u4EF6
\u251C\u2500\u2500 .eslintrc.js                                            # eslint \u8BED\u6CD5\u68C0\u67E5\u914D\u7F6E
\u251C\u2500\u2500 .gitignore                                              # git \u63D0\u4EA4\u5FFD\u7565\u6587\u4EF6
\u251C\u2500\u2500 .gitpod.yml\uFF08\u53EF\u9009\uFF09
\u251C\u2500\u2500 .markdownlint.json                                      # markdown \u683C\u5F0F\u68C0\u67E5\u914D\u7F6E
\u251C\u2500\u2500 .prettierrc.js                                          # prettier \u63D2\u4EF6\u914D\u7F6E
\u251C\u2500\u2500 .stylelintignore                                        # stylelint \u63D2\u4EF6\u68C0\u67E5\u5FFD\u7565\u6587\u4EF6
\u251C\u2500\u2500 CHANGELOG.en_US.md\uFF08\u53EF\u9009\uFF09
\u251C\u2500\u2500 CHANGELOG.md\uFF08\u53EF\u9009\uFF09
\u251C\u2500\u2500 CHANGELOG.zh_CN.md                                      # \u6539\u52A8\u65E5\u5FD7\u8BB0\u5F55
\u251C\u2500\u2500 commitlint.config.js                                    # git \u63D0\u4EA4\u524D\u68C0\u67E5\u914D\u7F6E
\u251C\u2500\u2500 deploy.sh\uFF08\u53EF\u9009\uFF09                                        # \u81EA\u52A8\u90E8\u7F72\u811A\u672C\uFF08\u901A\u8FC7github action\u81EA\u52A8\u90E8\u7F72\uFF09
\u251C\u2500\u2500 index.html                                              # html \u4E3B\u5165\u53E3
\u251C\u2500\u2500 LICENSE                                                 # \u8BC1\u4E66
\u251C\u2500\u2500 package.json                                            # \u4F9D\u8D56\u5305\u7BA1\u7406 JSON \u6587\u4EF6
\u251C\u2500\u2500 pnpm-lock.yaml                                          # \u4F9D\u8D56\u5305\u7248\u672C\u5185\u5BB9\u9501\u5B9A\u6587\u4EF6(\u4E0D\u8981\u6539\u52A8\uFF01)
\u251C\u2500\u2500 postcss.config.js                                       # postcss \u63D2\u4EF6\u914D\u7F6E
\u251C\u2500\u2500 README.en-US.md\uFF08\u53EF\u9009\uFF09
\u251C\u2500\u2500 README.md                                               # README
\u251C\u2500\u2500 stylelint.config.js                                     # stylelint \u63D2\u4EF6\u914D\u7F6E
\u251C\u2500\u2500 tsconfig.json                                           # ts \u914D\u7F6E
\u251C\u2500\u2500 unocss.config.ts                                        # unocss \u914D\u7F6E
\u2514\u2500\u2500 vite.config.ts                                          # vite \u914D\u7F6E


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76EE\u5F55\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u6982\u8FF0" aria-hidden="true">#</a> \u76EE\u5F55\u6982\u8FF0</h2><h3 id="\u524D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E" aria-hidden="true">#</a> \u524D\u7F6E</h3><ul><li>.github\uFF1A\u8FD9\u91CC\u662F Github Actions \u76F8\u5173\u7684\u64CD\u4F5C\u5EFA\u8BAE\uFF0C\u4E3B\u8981\u5305\u62EC\u5411\u9879\u76EE\u63D0\u51FA\u95EE\u9898\u7684\u89C4\u8303\u64CD\u4F5C\uFF0C\u4EE5\u53CA git \u4F7F\u7528\u7684\u5DE5\u4F5C\u6D41\u914D\u7F6E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 .github (\u53EF\u9009)				                  \u{1F449} # GitHub Actions \u914D\u7F6E\u6587\u4EF6
\u2502   \u251C\u2500\u2500 ISSUE_TEMPLATE                                # \u95EE\u9898\u63D0\u4EA4\u53C2\u8003\u6A21\u677F
\u2502   \u2502   \u251C\u2500\u2500 bug_report.md				                # \u62A5\u544A\u95EE\u9898
\u2502   \u2502   \u2514\u2500\u2500 feature_request.md                          # \u65B0\u9700\u6C42\u5EFA\u8BAE
\u2502   \u251C\u2500\u2500 workflows                                     # git \u5DE5\u4F5C\u6D41
\u2502   \u2502   \u251C\u2500\u2500 linter.yml                                  # \u4EE3\u7801\u68C0\u67E5\uFF08\u4E66\u5199\u89C4\u8303\u3001\u6784\u5EFA\u68C0\u6D4B\uFF09
\u2502   \u2502   \u2514\u2500\u2500 preview.yml                                 # \u4EE3\u7801\u81EA\u52A8\u90E8\u7F72
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>.husky\uFF1AGitHooks \u5DE5\u5177\uFF0C\u7528\u4E8E\u5728 git \u6267\u884C\u67D0\u4E9B\u64CD\u4F5C\uFF08\u6BD4\u5982 commmit\uFF09\u65F6\u89E6\u53D1\u8BBE\u5B9A\u7684\u811A\u672C\uFF0C\u6BD4\u5982 commit \u524D\u914D\u5408 lint \u68C0\u9A8C\u63D0\u4EA4\u683C\u5F0F\u662F\u5426\u89C4\u8303</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 .husky (\u53EF\u9009)										\u{1F449} # \u63D0\u4EA4\u6821\u9A8C\u914D\u7F6E\u6587\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 _
\u2502   \u2502   |	\u251C\u2500\u2500 .gitignore
\u2502   \u2502   |	\u2514\u2500\u2500 husky.sh
\u2502   \u2502   \u251C\u2500\u2500 commit-msg
\u2502   \u2502   \u251C\u2500\u2500 common.sh
\u2502   \u2502   \u251C\u2500\u2500 lintstagedrc.js
\u2502   \u2502   \u2514\u2500\u2500 pre-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\u5728 package.json \u4E2D\u4F5C\u914D\u7F6E</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code> <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lint:eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --cache --max-warnings 0  \\&quot;{src,mock}/**/*.{vue,ts,tsx}\\&quot; --fix&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write  \\&quot;src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:stylelint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint --cache --fix \\&quot;**/*.{vue,css,scss,postcss,less}\\&quot; --cache --cache-location node_modules/.cache/stylelint/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:lint-staged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged -c ./.husky/lintstagedrc.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint:pretty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pretty-quick --staged&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm lint:eslint &amp;&amp; pnpm lint:prettier &amp;&amp; pnpm lint:stylelint&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 husky \u540E\u6267\u884C &quot;prepare&quot;: &quot;husky install&quot;\uFF0C\u4F1A\u81EA\u52A8\u751F\u6210\u5982\u4E0B\u7ED3\u6784</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 .husky (\u53EF\u9009)										\u{1F449} # \u63D0\u4EA4\u6821\u9A8C\u914D\u7F6E\u6587\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 _
\u2502   \u2502   |	\u251C\u2500\u2500 .gitignore
\u2502   \u2502   |	\u2514\u2500\u2500 husky.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672C\u9879\u76EE\u4E2D\u8FD8\u589E\u6DFB\u4E86\u4E00\u4E2A\u63D0\u4EA4\u68C0\u9A8C\u7684\u914D\u7F6E\u6587\u4EF6 commilint.config.js</p><ul><li>.vscode\uFF1AIDE \u5DE5\u5177\u4E2D\u6070\u5F53\u7684\u914D\u7F6E\u80FD\u591F\u6781\u5927\u7684\u63D0\u9AD8\u6211\u4EEC\u7684\u5F00\u53D1\u6548\u7387\u548C\u5F00\u53D1\u4E50\u8DA3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 .vscode (\u53EF\u9009\uFF0C\u8BE6\u7EC6\u4F7F\u7528\u8BF7\u770B \u5176\u4ED6 - .vscode\u6587\u4EF6\u5939\u8BE6\u89E3)	\u{1F449} IDE\u5DE5\u5177\u63A8\u8350\u914D\u7F6E\u6587\u4EF6\uFF08\u5F00\u53D1\u8F85\u52A9\uFF09
\u2502   \u2502   \u251C\u2500\u2500 extensions.jsonn                                # \u4E00\u952E\u5B89\u88C5\u9879\u76EE\u63A8\u8350\u7684vscode\u63D2\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 settings.json\uFF08\u53EF\u81EA\u5B9A\u4E49\uFF09                         # vscode \u914D\u7F6E
\u2502   \u2502   \u251C\u2500\u2500 vue3.0.code-snippets                            # vue3.0\u4EE3\u7801\u7247\u6BB5\u6A21\u677F
\u2502   \u2502   \u2514\u2500\u2500 vue3.2.code-snippets                            # vue3.2+\u4EE3\u7801\u7247\u6BB5\u6A21\u677F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>build\uFF1A\u6784\u5EFA\u5DE5\u5177\u51FD\u6570</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 build                                             	\u{1F449} \u6784\u5EFA\u5DE5\u5177\u51FD\u6570
\u2502   \u2502   \u251C\u2500\u2500 index.ts                                        # \u5BFC\u51FA\u73AF\u5883\u53D8\u91CF\u3001\u8DE8\u57DF\u4EE3\u7406\u7B49\u5DE5\u5177
\u2502   \u2502   \u251C\u2500\u2500 info.ts                                         # \u8F93\u51FA\u6253\u5305\u4FE1\u606F\uFF08\u5927\u5C0F\u3001\u7528\u65F6\uFF09
\u2502   \u2502   \u251C\u2500\u2500 plugins.ts                                      # vite\u76F8\u5173\u63D2\u4EF6\u5B58\u653E\u5904
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>locales\uFF1A\u56FD\u9645\u5316\u914D\u7F6E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 locales                                             \u{1F449} \u56FD\u9645\u5316\u914D\u7F6E\uFF08\u91C7\u7528.yarml\u6587\u4EF6\u683C\u5F0F\uFF09
\u2502   \u2502   \u251C\u2500\u2500 en.yaml                                         # \u82F1\u6587\u914D\u7F6E
\u2502   \u2502   \u251C\u2500\u2500 zh-CN.yaml                                      # \u4E2D\u6587\u914D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>mock\uFF1A\u6A21\u62DF\u540E\u53F0\u63A5\u53E3\u7684\u8C03\u7528</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 mock			          \u{1F449} mock \u6A21\u62DF\u540E\u53F0\u6570\u636E\uFF08http://mockjs.com/examples.html#Object\uFF09
\u2502   \u2502   \u251C\u2500\u2500 asyncRoutes.ts		  # \u52A8\u6001\u8DEF\u7531
\u2502   \u2502   \u251C\u2500\u2500 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>public\uFF1A\u9759\u6001\u8D44\u6E90</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 public											\u{1F449} \u9759\u6001\u8D44\u6E90
\u2502   \u2502   \u251C\u2500\u2500 html\uFF08\u53EF\u5220\u9664\uFF09                                # \u4F5C\u4E3Aiframe\u9875\u9762
\u2502   \u2502   \u2502   \u2514\u2500\u2500 button.html
\u2502   \u2502   \u251C\u2500\u2500 favicon.ico
\u2502   \u2502   \u251C\u2500\u2500 serverConfig.json                           # \u5168\u5C40\u914D\u7F6E\u6587\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 sortable.min.js\uFF08\u53EF\u5220\u9664\uFF09                     # SortableJS\u9759\u6001\u8D44\u6E90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>types\uFF1A\u5168\u5C40 TS \u7C7B\u578B\u914D\u7F6E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 types                                            \u{1F449} \u5168\u5C40 TS \u7C7B\u578B\u914D\u7F6E
\u2502   \u2502   \u251C\u2500\u2500 global.d.ts
\u2502   \u2502   \u251C\u2500\u2500 index.d.ts
\u2502   \u2502   \u251C\u2500\u2500 shims-tsx.d.ts
\u2502   \u2502   \u2514\u2500\u2500 shims-vue.d.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6838\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3" aria-hidden="true">#</a> \u6838\u5FC3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 src										             \u{1F449} \u9879\u76EE\u6E90\u4EE3\u7801
\u2502   \u251C\u2500\u2500 api                                                  # \u8BF7\u6C42 api
\u2502   \u251C\u2500\u2500 assets                                               # \u5B57\u4F53\u3001\u56FE\u7247\u7B49\u9759\u6001\u8D44\u6E90
\u2502   \u251C\u2500\u2500 components                                           # \u5168\u5C40\u81EA\u5B9A\u4E49\u516C\u7528\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 config                                               # \u9879\u76EE\u6E90\u4EE3\u7801\u5168\u5C40\u914D\u7F6E
\u2502   \u251C\u2500\u2500 directives                                           # \u5168\u5C40\u81EA\u5B9A\u4E49\u6307\u4EE4
\u2502   \u251C\u2500\u2500 layout                                               # \u4E3B\u8981\u9875\u9762\u5E03\u5C40
\u2502   \u251C\u2500\u2500 plugins                                              # \u5904\u7406\u4E00\u4E9B\u4E3B\u8981\u5E93\u6216\u8005\u63D2\u4EF6\uFF0C\u5BFC\u51FA\u66F4\u65B9\u4FBF\u7684api
\u2502   \u251C\u2500\u2500 router                                               # \u8DEF\u7531\u914D\u7F6E
\u2502   \u251C\u2500\u2500 store                                                # \u5168\u5C40\u72B6\u6001\u7BA1\u7406
\u2502   \u251C\u2500\u2500 style                                                # \u5168\u5C40\u6837\u5F0F
\u2502   \u251C\u2500\u2500 utils                                                # \u5168\u5C40\u5DE5\u5177\u65B9\u6CD5
\u2502   \u251C\u2500\u2500 views                                                # \u5168\u5C40\u5355\u9875\u9762\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 App.vue                                              # \u5165\u53E3\u9875\u9762
\u2502   \u251C\u2500\u2500 main.ts                                              # \u5165\u53E3\u6587\u4EF6
\u2502   \u2514\u2500\u2500 mockProdServer.ts                                    # mock \u670D\u52A1\u76F8\u5173
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>components\uFF1A\u5168\u5C40\u81EA\u5B9A\u4E49\u7EC4\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2502   \u251C\u2500\u2500 components							 \u{1F449} \u5168\u5C40\u81EA\u5B9A\u4E49\u516C\u7528\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReBarcode                           # \u6761\u5F62\u7801\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReCountTo                           # \u6570\u5B57\u52A8\u753B\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReCropper                           # \u56FE\u7247\u88C1\u526A\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReFlicker                           # \u5706\u70B9\u3001\u65B9\u5F62\u95EA\u70C1\u52A8\u753B\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReFlop                              # \u65F6\u95F4\u7FFB\u724C\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReFlowChart                         # LogicFlow\u6D41\u7A0B\u56FE\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReIcon                              # \u56FE\u6807\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReImageVerify                       # \u56FE\u5F62\u9A8C\u8BC1\u7801\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReMap                               # \u9AD8\u5FB7\u5730\u56FE\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReQrcode                            # \u4E8C\u7EF4\u7801\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReSeamlessScroll                    # \u65E0\u7F1D\u6EDA\u52A8\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReSelector                          # \u9009\u62E9\u5668\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReSplitPane                         # \u5207\u5272\u9762\u677F\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ReTable                             # table-crud\u7EC4\u4EF6\uFF08\u57FA\u4E8Eelement-plus\uFF09
\u2502   \u2502   \u251C\u2500\u2500 ReTreeLine                          # \u6811\u5F62\u8FDE\u63A5\u7EBF\u7EC4\u4EF6\uFF08\u57FA\u4E8Eelement-plus\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>config\uFF1A\u5168\u5C40\u914D\u7F6E\uFF08\u8FD9\u91CC\u83B7\u53D6\u52A8\u6001\u5168\u5C40\u914D\u7F6E\uFF0Cpublic \u6587\u4EF6\u4E0B\u4E3A\u6B64\u81EA\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5168\u5C40\u73AF\u5883\u4E0B\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF09</p></li><li><p>directives\uFF1A\u5168\u5C40\u81EA\u5B9A\u4E49\u6307\u4EE4\uFF08\u65B9\u4FBF\u903B\u8F91\u5904\u7406\uFF09</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2502   \u251C\u2500\u2500 directives						\u{1F449} \u5168\u5C40\u81EA\u5B9A\u4E49\u6307\u4EE4
\u2502   \u2502   \u251C\u2500\u2500 elResizeDetector                # \u5BB9\u5668\u6539\u53D8\u76D1\u542C
\u2502   \u2502   \u251C\u2500\u2500 permission                      # \u6743\u9650\u6307\u4EE4
\u2502   \u2502   \u2514\u2500\u2500 index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>utils\uFF1A\u5C01\u88C5\u7684\u65B9\u6CD5\u5DE5\u5177</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2502   \u251C\u2500\u2500 utils			       \u{1F449} \u5168\u5C40\u65B9\u6CD5\u5DE5\u5177
\u2502   \u2502   \u251C\u2500\u2500 debounce                # \u5EF6\u8FDF\u3001\u9632\u6296\u51FD\u6570
\u2502   \u2502   \u251C\u2500\u2500 deviceDtection          # \u68C0\u6D4B\u8BBE\u5907\u7C7B\u578B\u3001\u83B7\u53D6\u6D4F\u89C8\u5668\u578B\u53F7\u4EE5\u53CA\u7248\u672C
\u2502   \u2502   \u251C\u2500\u2500 http                    # \u5C01\u88C5axios
\u2502   \u2502   \u251C\u2500\u2500 loaders                 # \u52A8\u6001\u521B\u5EFA\u6807\u7B7E\u52A0\u8F7Djs\u3001css\u8D44\u6E90\uFF08promise\u6A21\u5F0F\uFF09
\u2502   \u2502   \u251C\u2500\u2500 message                 # \u5C01\u88C5element-plus\u6D88\u606F\u7EC4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 operate                 # \u7C7B\u540D\u64CD\u4F5C\uFF08hasClass\u3001addClass\u3001removeClass\u3001toggleClass\uFF09
\u2502   \u2502   \u251C\u2500\u2500 progress                # \u5C01\u88C5nprogress
\u2502   \u2502   \u251C\u2500\u2500 resize                  # \u76D1\u542C\u5BB9\u5668\u51FD\u6570\uFF08resizeHandler\u3001addResizeListener\u3001removeResizeListener\uFF09
\u2502   \u2502   \u2514\u2500\u2500 storage                 # \u5C01\u88C5\u672C\u5730\u5B58\u50A8
\u2502   \u2502   \u2514\u2500\u2500 auth                    # \u5904\u7406token
\u2502   \u2502   \u2514\u2500\u2500 chinaArea.ts            # \u6C49\u5B57\u8F6C\u533A\u57DF\u7801
\u2502   \u2502   \u251C\u2500\u2500 is.ts                   # \u7C7B\u578B\u5224\u65AD
\u2502   \u2502   \u251C\u2500\u2500 link.ts                 # \u521B\u5EFA\u8D85\u94FE\u63A5
\u2502   \u2502   \u251C\u2500\u2500 mitt.ts                 # \u516C\u5171\u4E8B\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 print.ts                # \u6253\u5370\u5DE5\u5177\u51FD\u6570
\u2502   \u2502   \u251C\u2500\u2500 propTypes.ts            # \u5C01\u88C5propTypes
\u2502   \u2502   \u251C\u2500\u2500 tree.ts                 # \u6811\u7ED3\u6784\u5904\u7406\u5DE5\u5177\u51FD\u6570
\u2502   \u2502   \u251C\u2500\u2500 useAttrs.ts             # \u5C01\u88C5attrs
\u2502   \u2502   \u251C\u2500\u2500 useComponent.ts         # tsx\u4E2D\u7684\u52A8\u6001component\u5199\u6CD5
\u2502   \u2502   \u251C\u2500\u2500 useCopyToClipboard.ts   # \u590D\u5236\u3001\u62F7\u8D1D\u5DE5\u5177
\u2502   \u2502   \u2514\u2500\u2500 uuid.ts                 # uuid
\u2502   \u2502   \u2514\u2500\u2500 watermark.ts            # \u6C34\u5370\u5DE5\u5177\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),d=[t];function a(r,v){return n(),i("div",null,d)}var u=e(l,[["render",a],["__file","index.html.vue"]]);export{u as default};

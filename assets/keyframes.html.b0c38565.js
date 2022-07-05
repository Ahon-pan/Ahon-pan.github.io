import{_ as e,r as c,o,c as i,a as s,e as p,d as a,b as n}from"./app.ede35192.js";const l={},u=a(`<h1 id="\u5E27\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u5E27\u52A8\u753B" aria-hidden="true">#</a> \u5E27\u52A8\u753B</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u{1F4D7} \u901A\u8FC7\u5B9A\u4E49\u4E00\u6BB5\u52A8\u753B\u4E2D\u7684\u5173\u952E\u70B9\u3001\u5173\u952E\u72B6\u6001\u6765\u521B\u5EFA\u52A8\u753B\u3002Keyframes\u76F8\u6BD4transition\u5BF9\u52A8\u753B\u8FC7\u7A0B\u548C\u7EC6\u8282\u6709<strong>\u66F4\u5F3A</strong>\u7684\u63A7\u5236\u3002</p><p>\u{1F4CC}\u8FC7\u6E21\u52A8\u753B\u662F\u4E24\u4E2A\u72B6\u6001\u95F4\u7684\u53D8\u5316\uFF0C\u5E27\u52A8\u753B\u53EF\u4EE5\u5904\u7406\u52A8\u753B\u8FC7\u7A0B\u4E2D\u4E0D\u540C\u65F6\u95F4\u7684\u7EC6\u8282\u53D8\u5316\uFF0C\u4E5F\u53EF\u4EE5\u628A\u5E27\u52A8\u753B\u7406\u89E3\u4E3A\u591A\u4E2A\u5E27\u4E4B\u95F4\u7684\u8FC7\u6E21\u52A8\u753B\u3002</p><h2 id="\u5173\u952E\u5E27" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5E27" aria-hidden="true">#</a> \u5173\u952E\u5E27</h2><div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528\`@keyframes\` \u89C4\u5219\u914D\u7F6E\u52A8\u753B\u4E2D\u7684\u5404\u4E2A\u5E27</p><ul><li>from \u8868\u793A\u8D77\u59CB\u70B9</li><li>to \u8868\u793A\u7EC8\u70B9</li><li>\u53EF\u4EE5\u4F7F\u7528\u767E\u5206\u6570\u5982 20%\uFF0C\u52A8\u753B\u8FD0\u884C\u523020%\u65F6</li></ul></div><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p>\u{1F4D7} \u4E0B\u9762\u4F7F\u7528 <code>@keyframes</code> \u5B9A\u4E49\u4E86\u52A8\u753B\u53EB <code>test</code> \u5E76\u914D\u7F6E\u4E86\u4E24\u4E2A\u5E27\u52A8\u4F5C<code>from/to</code> \uFF0C\u7136\u540E\u5728div\u5143\u7D20\u4E2D\u4F7F\u7528<code>animation-name</code> \u5F15\u7528\u4E86\u52A8\u753B\u5E76\u4F7F\u7528<code>animation-duration</code>\u58F0\u660E\u6267\u884C\u4E09\u79D2\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token comment">/* transform: scale(1); */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">animation-name</span><span class="token punctuation">:</span> test<span class="token punctuation">;</span>
<span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F47E} \u52A8\u753B\u547D\u540D\u4E0D\u8981\u4F7F\u7528CSS\u5173\u952E\u5B57\u5982 <code>none</code></p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/1.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 20px #ddd<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> test<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65F6\u95F4\u70B9" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u70B9" aria-hidden="true">#</a> \u65F6\u95F4\u70B9</h3><div class="custom-container tip"><p class="custom-container-title">\u{1F4D7} \u5E27\u52A8\u753B\u9700\u8981\u5B9A\u4E49\u5728\u4E0D\u540C\u65F6\u95F4\u6267\u884C\u7684\u52A8\u4F5C\uFF0C\u5F00\u59CB\u4E0E\u7ED3\u675F\u53EF\u4EE5\u4F7F\u7528 \`form/to\` \u6216 \`0%/100%\` \u58F0\u660E\u3002</p><ul><li>\u5FC5\u987B\u6DFB\u52A0\u767E\u5206\u53F7\uFF0C25%\u662F\u6B63\u786E\u5199\u6CD5</li><li>\u65F6\u95F4\u70B9\u6CA1\u6709\u987A\u5E8F\u8981\u6C42\uFF0C\u5373100%\u5199\u572825%\u524D\u4E5F\u53EF\u4EE5</li><li>\u672A\u8BBE\u7F6E<code>0%</code>\u4E0E<code>100%</code> \u65F6\u5C06\u4F7F\u7528\u5143\u7D20<strong>\u539F\u59CB\u72B6\u6001</strong> \u{1F4CC}</li></ul></div><h3 id="\u7269\u4F53\u79FB\u52A8" tabindex="-1"><a class="header-anchor" href="#\u7269\u4F53\u79FB\u52A8" aria-hidden="true">#</a> \u7269\u4F53\u79FB\u52A8</h3><p>\u4E0B\u9762\u5B9A\u4E49\u4E0D\u540C\u65F6\u95F4\u70B9\u6765\u8BA9\u7269\u4F53\u5143\u7D20\u79FB\u52A8\u4E00\u5708\uFF0C\u4E0B\u4F8B\u4E2D\u53EF\u4EE5\u4E0D\u8BBE\u7F6E<code>from/to</code> \u7CFB\u7EDF\u5C06\u5B9A\u4E49\u4E3A\u5143\u7D20\u521D\u59CB\u72B6\u6001\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/2.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> test<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token selector">25%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">50%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300%<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">75%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540C\u65F6\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u540C\u65F6\u58F0\u660E" aria-hidden="true">#</a> \u540C\u65F6\u58F0\u660E</h3><p>\u65F6\u95F4\u70B9\u53EF\u4EE5\u52A8\u753B\u6837\u5F0F\u4E00\u6837\u65F6\u53EF\u4EE5\u4E00\u8D77\u58F0\u660E\uFF0C\u4E0B\u9762\u5C0625%/75%\u80CC\u666F\u4E00\u8D77\u58F0\u660E\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/3.gif" alt=""></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> test</span> <span class="token punctuation">{</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300%<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">25%,
    75%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%,
    100%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u52A8\u753B" aria-hidden="true">#</a> \u4F7F\u7528\u52A8\u753B</h2><div class="custom-container tip"><p class="custom-container-title">\`animation-name\` \u89C4\u5219\u53EF\u4EE5\u5728\u5143\u7D20\u8EAB\u4E0A\u540C\u65F6\u4F7F\u7528\u591A\u4E2A\u52A8\u753B\u3002</p><ul><li>\u4F7F\u7528\u591A\u4E2A\u52A8\u753B\u65F6\u7528\u9017\u53F7\u5206\u9694</li><li>\u591A\u4E2A\u52A8\u753B\u6709\u76F8\u540C\u5C5E\u6027\u65F6\uFF0C\u540E\u9762\u52A8\u753B\u7684\u5C5E\u6027\u4F18\u5148\u4F7F\u7528</li></ul></div><h3 id="\u57FA\u672C\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528-1" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/4.gif" alt=""></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> translate<span class="token punctuation">,</span> scale<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> translate</span> <span class="token punctuation">{</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300%<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">25%,
    75%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%,
    100%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> scale</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u753B\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u65F6\u95F4" aria-hidden="true">#</a> \u52A8\u753B\u65F6\u95F4</h2><div class="custom-container tip"><p class="custom-container-title">\`animation-duration\` \u53EF\u4EE5\u58F0\u660E\u52A8\u753B\u64AD\u653E\u7684\u65F6\u95F4\uFF0C\u5373\u628A\u6240\u6709\u5E27\u6267\u884C\u4E00\u904D\u6240\u9700\u8981\u7684\u65F6\u95F4\u3002</p><ul><li>\u53EF\u4EE5\u4F7F\u7528m\u79D2\uFF0Cms\u6BEB\u79D2\u65F6\u95F4\u5355\u4F4D</li><li>\u53EF\u4E3A\u4E0D\u540C\u52A8\u753B\u5355\u72EC\u8BBE\u7F6E\u6267\u884C\u65F6\u95F4</li><li>\u5982\u679C\u52A8\u753B\u6570\u91CF\u5927\u4E8E\u65F6\u95F4\u6570\u91CF\uFF0C\u5C06\u91CD\u65B0\u4ECE\u65F6\u95F4\u5217\u8868\u4E2D\u8BA1\u7B97</li></ul></div><h3 id="\u70AB\u5F69\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u70AB\u5F69\u80CC\u666F" aria-hidden="true">#</a> \u70AB\u5F69\u80CC\u666F</h3><p>\u4E0B\u9762\u5B9E\u4F8B\u58F0\u660E\u4E09\u4E2A\u52A8\u753B\uFF0C\u4F7F\u7528 <code>animation-duration</code>\u4E3A\u6BCF\u4E2A\u52A8\u753B\u8BBE\u7F6E\u4E0D\u540C\u6267\u884C\u7684\u65F6\u95F4\u3002</p><p>\u{1F4CC} \u5F53\u52A8\u753B\u5F00\u59CB\u65F6\uFF0C\u4E09\u4E2A\u52A8\u753B\u662F\u540C\u65F6\u5F00\u59CB\u6267\u884C\u7684\uFF0Cduration\u89C4\u5B9A\u4E86\u4ECE\u5F00\u59CB\u5230\u7ED3\u675F\u7684\u603B\u65F6\u95F4\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/5.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> scale<span class="token punctuation">,</span> colors<span class="token punctuation">,</span> rotate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">,</span> 5s<span class="token punctuation">,</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> scale</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> colors</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">50%</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #16a085<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> rotate</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">50%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C5E\u6027\u91CD\u53E0" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u91CD\u53E0" aria-hidden="true">#</a> \u5C5E\u6027\u91CD\u53E0</h2><p>\u{1F4D7} \u5982\u679C\u591A\u4E2A\u5E27\u52A8\u753B\u8BBE\u7F6E\u4E86\u76F8\u540C\u7684\u5C5E\u6027\uFF0C\u4E0D\u540C\u6D4F\u89C8\u5668\u7684\u5BF9\u5F85\u65B9\u5F0F\u7565\u6709\u4E0D\u540C\u3002\u6BD4\u5982 chrome/edge\u6700\u65B0\u7248\u672C\u5BF9\u52A8\u753B\u7684\u8BA1\u7B97\u5C31\u6709\u53D8\u5316\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">*</span> <span class="token punctuation">{</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
                <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
                <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
                <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">main</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #ddd<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">div</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
                <span class="token property">animation-name</span><span class="token punctuation">:</span> translate<span class="token punctuation">,</span> background<span class="token punctuation">;</span>
                <span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">,</span> 4s<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token atrule"><span class="token rule">@keyframes</span> translate</span> <span class="token punctuation">{</span>
                <span class="token selector">25%</span> <span class="token punctuation">{</span>
                    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token selector">50%</span> <span class="token punctuation">{</span>
                    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300px<span class="token punctuation">,</span> 300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token selector">75%</span> <span class="token punctuation">{</span>
                    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token atrule"><span class="token rule">@keyframes</span> background</span> <span class="token punctuation">{</span>
                <span class="token selector">25%</span> <span class="token punctuation">{</span>
                    <span class="token property">background</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>
                    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token selector">50%</span> <span class="token punctuation">{</span>
                    <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token selector">75%</span> <span class="token punctuation">{</span>
                    <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F47E} \u4E0A\u9762\u7684\u793A\u4F8B\u5728\u65E9\u671Fchrome\u4E0Esafari\u6D4F\u89C8\u5668\u6548\u679C\u662F\u76F8\u540C\u7684\uFF1A\u540E\u9762\u7684background\u52A8\u753B\u4F18\u5148\u7EA7\u9AD8\uFF0C4\u79D2\u65F6\u957F\u7684\u52A8\u753B\u90FD\u7528background\u52A8\u753B\u6765\u63A7\u5236translate\u5C5E\u6027\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/6.gif" alt=""></p><p>\u5728\u6700\u65B0\u7248\u672C\u7684chrome/edge\u4E2D\u6267\u884C\u8FC7\u7A0B\u5C06\u4E24\u4E2A\u5E27\u52A8\u753B<strong>\u7ED3\u5408</strong>\u5904\u7406</p><ul><li>\u524D25%\u5E27\u4F7F\u7528background\u7684\u52A8\u753B</li><li>25%\u5E27\u540E\u7EFC\u5408\u4F7F\u7528background\u4E0Etranslate\u52A8\u753B</li></ul><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/7.gif" alt=""></p><p>\u2705 \u6240\u4EE5\u5EFA\u8BAE\u5C3D\u91CF\u4E0D\u8981\u5728\u4E24\u4E2A\u52A8\u753B\u4E2D\u63A7\u5236\u76F8\u540C\u7684\u5C5E\u6027</p><h2 id="\u52A8\u753B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u753B\u5C5E\u6027</h2>`,45),r=n("\u{1F4D7} \u4E0D\u662F\u6240\u6709css\u5C5E\u6027\u90FD\u6709\u8FC7\u6E21\u6548\u679C\uFF0C"),k={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties",target:"_blank",rel:"noopener noreferrer"},d=n("\u67E5\u770B\u652F\u6301\u52A8\u753B\u7684CSS\u5C5E\u6027 (opens new window)"),v=n("\uFF0C\u4E00\u822C\u6765\u8BB2\u6709\u4E2D\u95F4\u503C\u7684\u5C5E\u6027\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u52A8\u753B\u5982\u5BBD\u5EA6\u3001\u900F\u660E\u5EA6\u7B49\u3002"),m=a(`<h3 id="\u5C5E\u6027\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u4F53\u9A8C" aria-hidden="true">#</a> \u5C5E\u6027\u4F53\u9A8C</h3><p>\u{1F4CC} \u4E0B\u4F8B\u4E2D\u7684\u8FB9\u6846\u53D8\u5316<strong>\u6CA1\u6709\u4E2D\u95F4\u503C</strong>\uFF0C\u6240\u4EE5\u662F\u77AC\u95F4\u6539\u53D8\u4E5F\u6CA1\u6709\u4EA7\u751F\u52A8\u753B\u6548\u679C\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/8.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">h2</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #f39c12<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> gg<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> gg</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> solid 10px #000<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> double 10px #000<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>William<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E2D\u95F4\u503C" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u503C" aria-hidden="true">#</a> \u4E2D\u95F4\u503C</h3><p>\u4E0B\u9762\u662F\u4F8B\u5B50\u5C3A\u5BF8\u6CA1\u6709\u4EA7\u751F\u52A8\u753B\uFF0C\u56E0\u4E3A<code>0%</code>\u5E27\u8BBE\u7F6E\u7684\u5C3A\u5BF8\u5355\u4F4D\u4E0E <code>100%</code> \u8BBE\u7F6E\u7684\u5C3A\u5BF8\u6CA1\u6709\u4E2D\u95F4\u503C\uFF0C\u89E3\u6790\u5668\u6CA1\u6709\u529E\u6CD5\u8BA1\u7B97\uFF0C\u6700\u7EC8\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/9.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">h2</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #f39c12<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> jj<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> jj</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>William<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B63\u786E\u6548\u679C\u5E94\u8BE5\u662F\u8FD9\u6837</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/10.gif" alt=""></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> jj</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> cornsilk<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">100%</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u91CD\u590D\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u52A8\u753B" aria-hidden="true">#</a> \u91CD\u590D\u52A8\u753B</h2><div class="custom-container tip"><p class="custom-container-title">\`animation-iteration-count\` \u89C4\u5219\u8BBE\u7F6E\u52A8\u753B\u91CD\u590D\u6267\u884C\u6B21\u6570\uFF0C\u8BBE\u7F6E\u503C\u4E3A \`infinite\` \u8868\u793A\u65E0\u9650\u5FAA\u73AF\u6267\u884C\u3002</p><ul><li>\u53EF\u540C\u65F6\u8BBE\u7F6E\u5143\u7D20\u7684\u591A\u4E2A\u52A8\u753B\u91CD\u590D\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u9694</li><li>\u5982\u679C\u52A8\u753B\u6570\u91CF\u5927\u4E8E\u91CD\u590D\u6570\u91CF\u5B9A\u4E49\uFF0C\u540E\u9762\u7684\u52A8\u753B\u5C06\u91CD\u65B0\u8BA1\u7B97\u91CD\u590D</li></ul></div><h3 id="\u5FC3\u52A8\u611F\u89C9" tabindex="-1"><a class="header-anchor" href="#\u5FC3\u52A8\u611F\u89C9" aria-hidden="true">#</a> \u5FC3\u52A8\u611F\u89C9</h3><p>\u4F7F\u7528\u5FAA\u73AF\u52A8\u753B\u7ED8\u5236\u5FC3\u52A8\u6548\u679C</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/11.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.heart</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> heart<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.heart::before</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> 0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.heart::after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> heart</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.3<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>heart<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u753B\u65B9\u5411-\u{1F4A1}" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u65B9\u5411-\u{1F4A1}" aria-hidden="true">#</a> \u52A8\u753B\u65B9\u5411 \u{1F4A1}</h2><p>\u4F7F\u7528 <code>animation-direction</code> \u63A7\u5236\u52A8\u753B\u8FD0\u884C\u7684\u65B9\u5411\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>normal</td><td>\u4ECE0%\u5230100%\u8FD0\u884C\u52A8\u753B</td></tr><tr><td>reverse</td><td>\u4ECE100%\u52300%\u8FD0\u884C\u52A8\u753B</td></tr><tr><td>alternate</td><td>\u5148\u4ECE0%\u5230100%\uFF0C\u7136\u540E\u4ECE100%\u52300%</td></tr><tr><td>alternate-reverse</td><td>\u5148\u4ECE100%\u52300%\uFF0C\u7136\u540E\u4ECE0%\u5230100%</td></tr></tbody></table><h3 id="\u6548\u679C\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u6BD4\u8F83" aria-hidden="true">#</a> \u6548\u679C\u6BD4\u8F83</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/12.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">h2</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #f39c12<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li</span> <span class="token punctuation">{</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li span</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #ecf0f1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> hd<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(1)&gt;i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(2)&gt;i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">animation-direction</span><span class="token punctuation">:</span> reverse<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(3)&gt;i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(4)&gt;i.fa</span> <span class="token punctuation">{</span>
            <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate-reverse<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> hd</span> <span class="token punctuation">{</span>
            <span class="token selector">from</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa fa-heart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa fa-heart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>reverse<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa fa-heart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>alternate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa fa-heart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>alternate-reverse<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse</h3><p>\u6839\u636E\u4E0A\u9762\u7684\u5FC3\u52A8\u4F8B\u5B50\u6539\u53D8\u65B9\u5411\u4E3A100%~0%</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/13.gif" alt="Untitled"></p><h3 id="alternate" tabindex="-1"><a class="header-anchor" href="#alternate" aria-hidden="true">#</a> alternate</h3><p>\u6839\u636E\u4E0A\u9762\u7684\u5FC3\u52A8\u4F8B\u5B50\u6539\u53D8\u65B9\u5411\u4E3A0%~100%\u7136\u540E100%~0%</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/14.gif" alt="Untitled"></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate-reverse<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="alternate-reverse" tabindex="-1"><a class="header-anchor" href="#alternate-reverse" aria-hidden="true">#</a> alternate-reverse</h3><p>\u901A\u8FC7\u4F7F\u7528\u5408\u9002\u7684\u8FD0\u52A8\u65B9\u5411 <code>alternate-reverse</code> \u5236\u4F5C\u8DF3\u52A8\u7684\u5C0F\u7403</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/15.gif" alt="Untitled"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> ball<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate-reverse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> ball</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-300px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token selector">section</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> shadow<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> shadow</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>35px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #aaa<span class="token punctuation">;</span>
            <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5EF6\u8FDF\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u52A8\u753B" aria-hidden="true">#</a> \u5EF6\u8FDF\u52A8\u753B</h2><p>\u4F7F\u7528 <code>animation-delay</code> \u89C4\u5219\u5B9A\u4E49\u52A8\u753B\u7B49\u5F85\u591A\u957F\u65F6\u95F4\u540E\u6267\u884C\u3002</p><h3 id="\u5FAE\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u573A\u666F" aria-hidden="true">#</a> \u5FAE\u573A\u666F</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/16.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">header</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 2.5em<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-translate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 500ms<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;5.jpg&quot;</span><span class="token punctuation">)</span></span> no-repeat right bottom<span class="token punctuation">;</span>
        <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-rotate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main&gt;*</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> .8<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .6<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main&gt;.lesson</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 80vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 40vw<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">,</span> -100vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-rotate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main&gt;.video</span> <span class="token punctuation">{</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 60vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 40vw<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2980b9<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-translate<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">,</span> -100vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">footer</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 10vh<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jr-skew<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 500ms<span class="token punctuation">;</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> jr-translate</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100vw<span class="token punctuation">,</span> -100vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> jr-rotate</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-100%<span class="token punctuation">,</span> -100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> jr-skew</span> <span class="token punctuation">{</span>
        <span class="token selector">from</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span> <span class="token function">skew</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">to</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewX</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
    Hello world
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lesson<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        1
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video jr-translate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        2
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
    caffreygo.com
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u753B\u901F\u7387" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u901F\u7387" aria-hidden="true">#</a> \u52A8\u753B\u901F\u7387</h2><h3 id="\u7CFB\u7EDF\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u5C5E\u6027" aria-hidden="true">#</a> \u7CFB\u7EDF\u5C5E\u6027</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>animation-timing-function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">linear</td><td style="text-align:left;">\u89C4\u5B9A\u4EE5\u76F8\u540C\u901F\u5EA6\u5F00\u59CB\u81F3\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C\uFF08\u7B49\u4E8E cubic-bezier(0,0,1,1)\uFF09\u3002</td></tr><tr><td style="text-align:left;">ease</td><td style="text-align:left;">\u5F00\u59CB\u6162\uFF0C\u7136\u540E\u5FEB\uFF0C\u6162\u4E0B\u6765\uFF0C\u7ED3\u675F\u65F6\u975E\u5E38\u6162\uFF08cubic-bezier(0.25,0.1,0.25,1)\uFF09</td></tr><tr><td style="text-align:left;">ease-in</td><td style="text-align:left;">\u5F00\u59CB\u6162\uFF0C\u7ED3\u675F\u5FEB\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,1,1)\uFF09</td></tr><tr><td style="text-align:left;">ease-out</td><td style="text-align:left;">\u5F00\u59CB\u5FEB\uFF0C\u7ED3\u675F\u6162\uFF08\u7B49\u4E8E cubic-bezier(0,0,0.58,1)\uFF09</td></tr><tr><td style="text-align:left;">ease-in-out</td><td style="text-align:left;">\u4E2D\u95F4\u5FEB\uFF0C\u4E24\u8FB9\u6162\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,0.58,1)\uFF09</td></tr><tr><td style="text-align:left;">cubic-bezier(<em>n</em>,<em>n</em>,<em>n</em>,<em>n</em>)</td><td style="text-align:left;">\u5728 cubic-bezier \u51FD\u6570\u4E2D\u5B9A\u4E49\u81EA\u5DF1\u7684\u503C</td></tr></tbody></table><blockquote><p>\u53EF\u4EE5\u5728\u5E27\u4E2D\u5355\u72EC\u5B9A\u4E49\uFF0C\u5C06\u5F71\u54CD\u5F53\u524D\u5E27\u7684\u901F\u7387</p></blockquote><h3 id="\u8D1D\u585E\u5C14\u66F2\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u8D1D\u585E\u5C14\u66F2\u7EBF" aria-hidden="true">#</a> \u8D1D\u585E\u5C14\u66F2\u7EBF</h3>`,45),b=n("\u{1F4D7} \u9700\u8981\u8BBE\u7F6E\u56DB\u4E2A\u503C "),g=s("code",null,"cubic-bezier(<x1>, <y1>, <x2>, <y2>)",-1),y=n("\uFF0C\u6765\u63A7\u5236\u66F2\u7EBF\u901F\u5EA6\uFF0C\u53EF\u5728 "),h={href:"https://cubic-bezier.com/",target:"_blank",rel:"noopener noreferrer"},f=n("https://cubic-bezier.com (opens new window)"),x=n("\u7F51\u7AD9\u5728\u7EBF\u4F53\u9A8C\u6548\u679C\u3002"),w=a(`<p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/17.jpg" alt=""></p><h3 id="\u4F53\u9A8C\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u4F53\u9A8C\u6548\u679C" aria-hidden="true">#</a> \u4F53\u9A8C\u6548\u679C</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/17.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li</span> <span class="token punctuation">{</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(1)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(2)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(3)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(4)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(5)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>90vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>ease<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>ease-in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>ease-out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>ease-in-out<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>linear<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F39\u8DF3\u5C0F\u7403-\u{1F4A1}" tabindex="-1"><a class="header-anchor" href="#\u5F39\u8DF3\u5C0F\u7403-\u{1F4A1}" aria-hidden="true">#</a> \u5F39\u8DF3\u5C0F\u7403 \u{1F4A1}</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/18.gif" alt="Untitled"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0vw<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at right top<span class="token punctuation">,</span> #f39c12<span class="token punctuation">,</span> #d35400<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> jump<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(2)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-delay</span><span class="token punctuation">:</span> .2s<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> jump</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">30%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>10vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">60%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>40vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">80%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>60vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">95%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>75vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">15%,
            45%,
            70%,
            85%,
            100%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>80vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9B54\u672F\u5C0F\u7403" tabindex="-1"><a class="header-anchor" href="#\u9B54\u672F\u5C0F\u7403" aria-hidden="true">#</a> \u9B54\u672F\u5C0F\u7403</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/19.gif" alt="Untitled"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-20vw<span class="token punctuation">,</span> -300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at right top<span class="token punctuation">,</span> #f39c12<span class="token punctuation">,</span> #d35400<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> jump<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1.5s<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(2)</span> <span class="token punctuation">{</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> .2s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:nth-child(3)</span> <span class="token punctuation">{</span>
        <span class="token property">animation-delay</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> jump</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-20vw<span class="token punctuation">,</span> -300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">10%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>15vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">20%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>20vw<span class="token punctuation">,</span> -200%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">30%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>30vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">40%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>40vw<span class="token punctuation">,</span> -120%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">50%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>50vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">60%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>60vw<span class="token punctuation">,</span> -70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">70%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>70vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">80%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>80vw<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">90%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>90vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">95%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>95vw<span class="token punctuation">,</span> -30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.9<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>100vw<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
        <span class="token selector">0%</span> <span class="token punctuation">{</span>
            <span class="token comment">/* transform: translateY(-400%); */</span>
        <span class="token punctuation">}</span>

        <span class="token selector">100%</span> <span class="token punctuation">{</span>
            <span class="token comment">/* right: 100px; */</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6309\u94AE\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u6309\u94AE\u63D0\u4EA4" aria-hidden="true">#</a> \u6309\u94AE\u63D0\u4EA4</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/20.gif" alt="Untitled"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">button</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 10px 50px<span class="token punctuation">;</span>
            <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 5px white<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">button::after</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span> 3px 0 currentColor<span class="token punctuation">,</span> 9px 0 currentColor<span class="token punctuation">,</span> 15px 0 currentColor<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> point<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> point</span> <span class="token punctuation">{</span>
            <span class="token selector">from</span> <span class="token punctuation">{</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">30%</span> <span class="token punctuation">{</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> 3px 0 currentColor<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">60%</span> <span class="token punctuation">{</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> 3px 0 currentColor<span class="token punctuation">,</span> 9px 0 currentColor<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">90%</span> <span class="token punctuation">{</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> 3px 0 currentColor<span class="token punctuation">,</span> 9px 0 currentColor<span class="token punctuation">,</span> 15px 0 currentColor<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa fa-code<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
        \u63D0\u4EA4
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6B65\u8FDB\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6B65\u8FDB\u901F\u5EA6" aria-hidden="true">#</a> \u6B65\u8FDB\u901F\u5EA6</h2><p>\u8FC7\u6E21\u4F7F\u7528\u9636\u68AF\u5316\u5448\u73B0\uFF0C\u6709\u70B9\u50CF\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u673A\u68B0\u821E\uFF0C\u4E0B\u9762\u662F\u628A\u8FC7\u6E21\u5206\u4E94\u6B65\u5B8C\u6210\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>steps(n,start)</td><td>\u8BBE\u7F6En\u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u53D8\u5316\u72B6\u6001</td></tr><tr><td>steps(n,end)</td><td>\u8BBE\u7F6En\u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u521D\u59CB\u72B6\u6001</td></tr><tr><td>step-start</td><td>\u7B49\u4E8Esteps(1,start)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u4E0B\u4E00\u6B65\u5F00\u59CB</td></tr><tr><td>step-end</td><td>\u7B49\u4E8Esteps(1,end)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u5F53\u524D\u6B65\u5F00\u59CB</td></tr></tbody></table><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> steps</h3><p>\u{1F4D7} <code>steps(n,start)</code> \u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\u4ECE\u7B2C\u4E8C\u4E2A\u5F00\u59CB\uFF0C<code>steps(n,end)</code> \u4ECE\u7B2C\u4E00\u4E2A\u5F00\u59CB\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/21.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token comment">/* justify-content: center;
            align-content: center; */</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span>/<span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">border-right</span><span class="token punctuation">:</span> solid 1px #2c3e50<span class="token punctuation">;</span>
            <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 1px #2c3e50<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(5)::before</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;END&#39;</span><span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(1)::after</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;START&#39;</span><span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>400px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-start" tabindex="-1"><a class="header-anchor" href="#step-start" aria-hidden="true">#</a> step-start</h3><p>\u{1F4D7} <code>step-start</code> \u6548\u679C\u7B49\u4E8E <code>steps(1,start)</code> ,<code>step-end</code> \u6548\u679C\u7B49\u540C\u4E8E <code>steps(1,end)</code>\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/22.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
            <span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span>/<span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 1px #2c3e50<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(1)::before,
        div:nth-child(5)::before</span> <span class="token punctuation">{</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> hd<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> .5s<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(1)::before</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;START&#39;</span><span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #8e44ad<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> step-start<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div:nth-child(5)::before</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;END&#39;</span><span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> step-end<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> hd</span> <span class="token punctuation">{</span>
            <span class="token selector">50%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u64AD\u653E\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u64AD\u653E\u72B6\u6001" aria-hidden="true">#</a> \u64AD\u653E\u72B6\u6001</h2><p>\u{1F4D7} \u4F7F\u7528 <code>animation-play-state</code> \u53EF\u4EE5\u63A7\u5236\u52A8\u753B\u7684\u6682\u505C\u4E0E\u8FD0\u884C\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>paused</td><td>\u6682\u505C</td></tr><tr><td>running</td><td>\u8FD0\u884C</td></tr></tbody></table><h3 id="\u5E7B\u706F\u7247" tabindex="-1"><a class="header-anchor" href="#\u5E7B\u706F\u7247" aria-hidden="true">#</a> \u5E7B\u706F\u7247</h3><p>\u4E0B\u9762\u662F\u4F7F\u7528\u65E0JS\u811A\u672C\u53C2\u4E0E\u7684\u56FE\u7247\u8F6E\u6362\u6548\u679C\uFF0C\u56FE\u7247\u5207\u6362\u4F7F\u7528<code>steps</code> \u6B65\u8FDB\u4E0E<code>animation-play-state</code>\u64AD\u653E\u72B6\u6001\u6280\u672F\u3002</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/23.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>https://code.jquery.com/jquery-3.3.1.slim.min.js<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 5px #ddd<span class="token punctuation">;</span>
            <span class="token property">border-width</span><span class="token punctuation">:</span> 5px 0 5px 0<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main:hover section</span> <span class="token punctuation">{</span>
            <span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">main:hover ul::before</span> <span class="token punctuation">{</span>
            <span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">section</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 1600px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> slide<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">section div</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">section div img</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
            <span class="token property">bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul li</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
            <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 3px transparent<span class="token punctuation">;</span>
            <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul::before</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> num<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">;</span>
            <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
            <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">steps</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> slide</span> <span class="token punctuation">{</span>
            <span class="token selector">from</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">to</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> num</span> <span class="token punctuation">{</span>
            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u586B\u5145\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u586B\u5145\u6A21\u5F0F" aria-hidden="true">#</a> \u586B\u5145\u6A21\u5F0F</h2><p>\u{1F4D7} <code>animation-fill-mode</code> \u7528\u4E8E\u5B9A\u4E49\u52A8\u753B\u64AD\u653E\u7ED3\u675F\u540E\u7684\u5904\u7406\u6A21\u5F0F\uFF0C\u662F\u56DE\u5230\u539F\u6765\u72B6\u6001\u8FD8\u662F\u505C\u6B62\u5728\u52A8\u753B\u7ED3\u675F\u72B6\u6001\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>none</td><td>\u9700\u8981\u7B49\u5EF6\u8FDF\u7ED3\u675F\uFF0C\u8D77\u59CB\u5E27\u5C5E\u6027\u624D\u5E94\u7528</td></tr><tr><td>backwards</td><td>\u52A8\u753B\u6548\u679C\u5728\u8D77\u59CB\u5E27\uFF0C\u4E0D\u7B49\u5EF6\u8FDF\u7ED3\u675F</td></tr><tr><td>forwards</td><td>\u7ED3\u675F\u540E\u505C\u7559\u52A8\u753B\u7684\u6700\u540E\u4E00\u5E27</td></tr><tr><td>both</td><td>\u5305\u542Bbackwards\u4E0Eforwards\u89C4\u5219\uFF0C\u5373\u52A8\u753B\u6548\u679C\u5728\u8D77\u59CB\u5E27\uFF0C\u4E0D\u7B49\u5EF6\u8FDF\u7ED3\u675F\uFF0C\u5E76\u4E14\u5728\u7ED3\u675F\u540E\u505C\u6B62\u5728\u6700\u540E\u4E00\u5E27</td></tr></tbody></table><h3 id="\u6548\u679C\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u5BF9\u6BD4" aria-hidden="true">#</a> \u6548\u679C\u5BF9\u6BD4</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/css/keyframes/24.gif" alt=""></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li</span> <span class="token punctuation">{</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #ecf0f1<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">animation-name</span><span class="token punctuation">:</span> hd<span class="token punctuation">;</span>
            <span class="token property">animation-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(1)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(2)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> backwards<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(3)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">li:nth-child(4)</span> <span class="token punctuation">{</span>
            <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token atrule"><span class="token rule">@keyframes</span> hd</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>none<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>backwards<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>forwards<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>both<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u5408\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u5408\u5B9A\u4E49</h2><p>\u{1F4D7} \u548CCSS\u4E2D\u7684\u5176\u4ED6\u5C5E\u6027\u4E00\u6837\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>animation</code>\u7EC4\u5408\u5B9A\u4E49\u5E27\u52A8\u753B\u3002animation \u5C5E\u6027\u662F\u4E00\u4E2A\u7B80\u5199\u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E<strong>\u516D\u4E2A</strong>\u52A8\u753B\u5C5E\u6027\uFF1A</p><ul><li>animation-name</li><li>animation-duration</li><li>animation-timing-function</li><li>animation-delay</li><li>animation-iteration-count</li><li>animation-direction</li></ul><blockquote><p>\u5FC5\u987B\u5B58\u5728 <code>animation-duration</code>\u5C5E\u6027\uFF0C\u5426\u5219\u8FC7\u6E21\u65F6\u95F4\u4E3A0\u6CA1\u6709\u52A8\u753B\u6548\u679C\u3002</p></blockquote>`,41);function q(j,_){const t=c("ExternalLinkIcon");return o(),i("div",null,[u,s("p",null,[r,s("a",k,[d,p(t)]),v]),m,s("p",null,[b,g,y,s("a",h,[f,p(t)]),x]),w])}var Y=e(l,[["render",q],["__file","keyframes.html.vue"]]);export{Y as default};

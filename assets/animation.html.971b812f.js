import{_ as n,o as s,c as a,d as t}from"./app.ede35192.js";const p={},e=t(`<h1 id="vue\u4E2D\u7684\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#vue\u4E2D\u7684\u52A8\u753B" aria-hidden="true">#</a> Vue\u4E2D\u7684\u52A8\u753B</h1><p>https://cn.vuejs.org/v2/guide/transitions.html</p><h2 id="vue\u57FA\u7840\u52A8\u753B\u548C\u8FC7\u6E21" tabindex="-1"><a class="header-anchor" href="#vue\u57FA\u7840\u52A8\u753B\u548C\u8FC7\u6E21" aria-hidden="true">#</a> Vue\u57FA\u7840\u52A8\u753B\u548C\u8FC7\u6E21</h2><ul><li>\u8FC7\u6E21\uFF1A\u72B6\u6001\u7684\u53D8\u5316\u8FC7\u7A0B</li><li>\u52A8\u753B\uFF1A\u5143\u7D20\u7684\u8FD0\u52A8\u8FC7\u7A0B</li></ul><h3 id="\u52A8\u753Banimation" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753Banimation" aria-hidden="true">#</a> \u52A8\u753Banimation</h3><p>\u901A\u8FC7 <code>@keyframes</code> \u5B9A\u4E49\u4E00\u4E2A\u52A8\u753B\uFF0C\u7136\u540E\u4F7F\u7528css3\u7684 <strong>animations</strong> \u4F7F\u7528\u8BE5\u52A8\u753B</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/animation2.gif" alt=""></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> leftToRight</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.animation</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> leftToRight 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">animate</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>animate<span class="token punctuation">.</span>animation <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>animate<span class="token punctuation">.</span>animation
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
        &lt;div :class=&quot;animate&quot;&gt;hello world&lt;/div&gt;
        &lt;button @click=&quot;handleClick&quot;&gt;d\u52A8\u753B&lt;/button&gt;
        &lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FC7\u6E21transition" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6E21transition" aria-hidden="true">#</a> \u8FC7\u6E21transition</h3><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/animation1.gif" alt=""></p><p>\u901A\u8FC7 <strong>transition</strong> \u7684css\u5C5E\u6027\u5B9A\u4E49\u72B6\u6001\u3001\u65F6\u95F4\u548C\u6548\u679C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.transition</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 3s background-color ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">styleObj</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>styleObj<span class="token punctuation">.</span>background <span class="token operator">===</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>styleObj<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>styleObj<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;div&gt;
        &lt;div class=&quot;transition&quot; :style=&quot;styleObj&quot;&gt;hello world&lt;/div&gt;
        &lt;button @click=&quot;handleClick&quot;&gt;\u5207\u6362&lt;/button&gt;
        &lt;/div&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5355\u5143\u7D20\u7EC4\u4EF6\u52A8\u753B\u548C\u8FC7\u6E21" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u7D20\u7EC4\u4EF6\u52A8\u753B\u548C\u8FC7\u6E21" aria-hidden="true">#</a> \u5355\u5143\u7D20\u7EC4\u4EF6\u52A8\u753B\u548C\u8FC7\u6E21</h2><div class="custom-container tip"><p class="custom-container-title">Transition</p><p>\u200B Vue\u5185\u7F6E\u4E86Transition\u7EC4\u4EF6\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u5B9E\u73B0\u52A8\u753B\u548C\u8FC7\u6E21</p><p>\u200B \u5165\u573A\uFF1A\u9690\u85CF =&gt; \u5C55\u793A</p><p>\u200B \u51FA\u573A\uFF1A\u5C55\u793A =&gt; \u9690\u85CF</p></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/transition.jpg" alt="transition"></p><h3 id="\u5165\u573A\u51FA\u573A\u8FC7\u6E21" tabindex="-1"><a class="header-anchor" href="#\u5165\u573A\u51FA\u573A\u8FC7\u6E21" aria-hidden="true">#</a> \u5165\u573A\u51FA\u573A\u8FC7\u6E21</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>v-if</code>\u548C<code>v-show</code>\u90FD\u53EF\u4EE5\u4F7F\u7528transition\u6807\u7B7E\u5B9E\u73B0\u6548\u679C</p></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/animation3.gif" alt=""></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5355\u5143\u7D20\uFF0C\u5355\u7EC4\u4EF6\u7684\u5165\u573A\u51FA\u573A */</span>
<span class="token selector">.v-enter-from</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-enter-active, .v-leave-active</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> opacity 1s ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-enter-to</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u53EF\u5220\u9664 */</span>
<span class="token selector">.v-leave-to</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>show<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
        &lt;transition&gt;
        	&lt;div v-if=&quot;show&quot;&gt;hello world&lt;/div&gt;
        &lt;/transition&gt;
        &lt;button @click=&quot;handleClick&quot;&gt;\u5207\u6362&lt;/button&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5165\u573A\u51FA\u573A\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u5165\u573A\u51FA\u573A\u52A8\u753B" aria-hidden="true">#</a> \u5165\u573A\u51FA\u573A\u52A8\u753B</h3><ul><li><p>\u5728\u5173\u952E\u5E27<code>keyframes</code>\u5185\u5B9A\u4E49\u597D\u52A8\u753B\u8FC7\u7A0B</p></li><li><p>\u5728\u56FA\u5B9A\u7684class\u5185\u4F7F\u7528<code>animation</code>\u5E94\u7528\u8BE5\u52A8\u753B</p></li><li><p>v-enter\u662F\u9ED8\u8BA4\u7684\u52A8\u753B\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u547D\u540D\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/animation4.gif" alt=""></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> shake</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100px<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50px<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>50px<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.hello-leave-active</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> shake 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hello-enter-active</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> shake 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u7C7B\u540D" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7C7B\u540D" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7C7B\u540D</h2><ul><li>enter-from-class</li><li>enter-active-class</li><li>enter-to-class</li><li>leave-from-class</li><li>leave-active-class</li><li>leave-to-class</li></ul><h4 id="\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F" aria-hidden="true">#</a> \u6837\u5F0F</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.bye</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> shake 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.hello</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> shake 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a> \u6A21\u677F</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span>
   <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span>
   <span class="token attr-name">leave-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bye<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u7B2C\u4E09\u65B9\u52A8\u753B\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7B2C\u4E09\u65B9\u52A8\u753B\u5E93" aria-hidden="true">#</a> \u4F7F\u7528\u7B2C\u4E09\u65B9\u52A8\u753B\u5E93</h2><p>Animate.css: https://animate.style/</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/animation5.gif" alt=""></p><ol><li><p>Head\u5934\u90E8\u5F15\u5165animate.css</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539active\u4E0B\u5E94\u7528\u7684\u52A8\u753B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span>
    <span class="token attr-name">enter-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animate__animated animate__bounce<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">leave-active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>animate__animated animate__flash<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u52A8\u753B-\u8FC7\u6E21" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B-\u8FC7\u6E21" aria-hidden="true">#</a> \u52A8\u753B+\u8FC7\u6E21</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>v-enter-from\u5305\u542B\u5728active\u5185\uFF0C\u8BBE\u7F6E\u8FC7\u6E21\u521D\u59CB\u4E3Ared,active\u8FC7\u7A0B\u5C06\u4F7F\u7528\u8FC7\u6E21\u6548\u679C\u8F6C\u5316\u4E3A\u9ED1\u8272</li><li>v-enter-from\u9ED8\u8BA4\u4E3A\u9ED1\u8272\uFF0C\u8BBE\u7F6E\u8FC7\u6E21\u671F\u95F4\u4E3A\u7EA2\u8272\u5373\u53EF\uFF0C(?)\u6700\u7EC8\u8FD8\u662F\u9ED1\u8272</li><li>type=&quot;transition&quot; \u5982\u679C\u8FC7\u6E21\u548C\u52A8\u753B\u65F6\u95F4\u4E0D\u4E00\u81F4\uFF0C\u4EE5\u8FC7\u6E21\u65F6\u95F4\u4E3A\u7EDF\u4E00\u65F6\u95F4</li><li>:duration=&quot;1000&quot; \u5C06\u8FC7\u6E21\u548C\u52A8\u753B\u65F6\u95F4\u90FD\u8BBE\u7F6E\u4E3A1s\u7ED3\u675F\uFF0C:duration=&quot;{enter:1000, leave:3000}&quot;\u5165\u573A1s\u51FA\u573A3s</li></ul></div><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/animation6.gif" alt=""></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> shake</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100px<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50px<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>50px<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-enter-from</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red
<span class="token punctuation">}</span>
<span class="token selector">.v-enter-active</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> shake 1s<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all 1s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-leave-active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> shake 1s<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all 1s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js\u52A8\u753B\u6548\u679C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#js\u52A8\u753B\u6548\u679C\u5B9E\u73B0" aria-hidden="true">#</a> JS\u52A8\u753B\u6548\u679C\u5B9E\u73B0</h2><ul><li>:css=&quot;false&quot; \u5173\u95EDcss\u7684\u52A8\u753B\u6548\u679C</li><li>\u901A\u8FC7\u94A9\u5B50\u51FD\u6570\u5B9A\u4E49\u5404\u4E2A\u65F6\u95F4\u70B9\u7684\u6837\u5F0F\u53D8\u5316\u51FD\u6570\uFF1A<code>before-enter</code>\u3001<code>enter</code>\u3001<code>after-enter</code></li><li>@enter(el, done) \u8C03\u7528done\u51FD\u6570\u505C\u6B62\u52A8\u753B\uFF0C\u7136\u540E\u89E6\u53D1@after-enter</li><li>css\u52A8\u753B\u6027\u80FD\u4E00\u822C\u4F1A\u6BD4js\u52A8\u753B\u597D\u4E00\u4E9B</li><li><code>before-leave</code>\u3001<code>leave</code>\u3001<code>after-leave</code></li></ul><p>\u4F7F\u7528<strong>\u751F\u547D\u5468\u671F\u94A9\u5B50</strong>\u5B9E\u73B0js\u7684\u52A8\u753B\u6548\u679C</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/animation7.gif" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>show<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">handleBeforeEnter</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">handleEnterActive</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> animation <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> color <span class="token operator">=</span> el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color<span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">clearInterval</span><span class="token punctuation">(</span>animation<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">handleEnterEnd</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
        &lt;transition
            :css=&quot;false&quot;
            @before-enter=&quot;handleBeforeEnter&quot;
            @enter=&quot;handleEnterActive&quot;
            @after-enter=&quot;handleEnterEnd&quot;
            &gt;
        &lt;div v-show=&quot;show&quot;&gt;hello world&lt;/div&gt;
        	&lt;/transition&gt;
        &lt;button @click=&quot;handleClick&quot;&gt;\u5207\u6362&lt;/button&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u4E2A\u5143\u7D20\u548C\u7EC4\u4EF6\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u5143\u7D20\u548C\u7EC4\u4EF6\u5207\u6362" aria-hidden="true">#</a> \u591A\u4E2A\u5143\u7D20\u548C\u7EC4\u4EF6\u5207\u6362</h2><ul><li>\u5207\u6362\u6548\u679C\u4E3B\u8981\u501F\u52A9\u4E8E<code>v-if</code>\u548C<code>v-else</code>\uFF0C\u5207\u6362\u65F6\u5C55\u793A\u6548\u679C\uFF1B</li><li>\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6<code>component</code>\u5207\u6362</li><li>mode=&quot;out-in&quot;\u5B9E\u73B0\u5148\u9690\u85CF\u518D\u5C55\u793A\uFF08\u907F\u514D\u51FA\u573A\u5165\u573A\u52A8\u753B\u540C\u65F6\u663E\u793A\uFF09</li><li>appear\u5C5E\u6027\u5B9E\u73B0\u521D\u59CB\u52A0\u8F7D\u65F6\u4E5F\u6709\u52A8\u753B</li></ul><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/animation8.gif" alt=""></p><ol><li><p>\u8FC7\u6E21\u6837\u5F0F\u6548\u679C\u5B9A\u4E49</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.v-leave-to,
.v-enter-from</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-enter-active,
.v-leave-active</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> opacity 1s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-leave-from,
.v-enter-to</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7EC4\u4EF6\u6216\u5143\u7D20\u5207\u6362</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ComponentA <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;&lt;div&gt;hello world&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ComponentB <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;&lt;div&gt;bye world&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&quot;component-a&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>component <span class="token operator">===</span> <span class="token string">&quot;component-a&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>component <span class="token operator">=</span> <span class="token string">&quot;component-b&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>component <span class="token operator">=</span> <span class="token string">&quot;component-a&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;component-a&quot;</span><span class="token operator">:</span> ComponentA<span class="token punctuation">,</span>
        <span class="token string-property property">&quot;component-b&quot;</span><span class="token operator">:</span> ComponentB<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
        &lt;transition mode=&quot;out-in&quot; appear&gt;
        	&lt;component :is=&quot;component&quot; /&gt;
        &lt;/transition&gt;
        &lt;button @click=&quot;handleClick&quot;&gt;\u5207\u6362&lt;/button&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u5217\u8868\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868\u52A8\u753B" aria-hidden="true">#</a> \u5217\u8868\u52A8\u753B</h2><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/listAnimation.gif" alt=""></p><ol><li><p>\u5B9A\u4E49<strong>\u5165\u573A\u52A8\u753B</strong>\uFF08<strong>v-enter</strong>\uFF09\u548C<strong>\u79FB\u52A8\u8FC7\u6E21</strong>\u6548\u679C\u7684\u6837\u5F0F\u540D\uFF08<strong>v-move\uFF09</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.v-enter-from</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-enter-active</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all .5s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-enter-to</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-move</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all .5s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.list-item</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u589E\u52A0\u5217\u8868\u9879</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
        &lt;transition-group&gt;
        	&lt;span class=&quot;list-item&quot; v-for=&quot;item in list&quot; :key=&quot;item&quot;&gt;{{item}}&lt;/span&gt;
        &lt;/transition-group&gt;
        &lt;button @click=&quot;handleClick&quot;&gt;\u589E\u52A0&lt;/button&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u72B6\u6001\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u52A8\u753B" aria-hidden="true">#</a> \u72B6\u6001\u52A8\u753B</h2><p>\u72B6\u6001\u52A8\u753B\u5B9E\u9645\u4E0A\u5C31\u662F\u901A\u8FC7js\u7684\u6570\u636E\u53D8\u5316\u5904\u7406</p><p><img src="https://raw.githubusercontent.com/caffreygo/static/main/blog/vue/stateAnimation.gif" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">animateNumber</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>animateNumber <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> animation <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>animateNumber <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>animateNumber <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">clearInterval</span><span class="token punctuation">(</span>animation<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div&gt;
    	&lt;div&gt;{{animateNumber}}&lt;/div&gt;
    	&lt;button @click=&quot;handleClick&quot;&gt;\u589E\u52A0&lt;/button&gt;
    &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),o=[e];function i(c,l){return s(),a("div",null,o)}var r=n(p,[["render",i],["__file","animation.html.vue"]]);export{r as default};

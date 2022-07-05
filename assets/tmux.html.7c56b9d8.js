import{_ as n,o as t,c as s,d as e}from"./app.ede35192.js";const a={},d=e(`<h1 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux" aria-hidden="true">#</a> tmux</h1><blockquote><p>prefix: ctrl + b\u5728\u914D\u7F6E\u5DF2\u6539\u6210ctrl + f</p></blockquote><h2 id="\u56DE\u8BDD\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8BDD\u5B58\u50A8" aria-hidden="true">#</a> \u56DE\u8BDD\u5B58\u50A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4FDD\u5B58\u4F1A\u8BDD</span>
prefix ctrl+s
<span class="token comment"># \u6062\u590D\u4F1A\u8BDD</span>
prefix ctrl+r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B0\u5EFA\u4F1A\u8BDD</span>
tmux new -s windowName
<span class="token comment"># \u67E5\u770B\u4F1A\u8BDD</span>
prefix s
<span class="token comment"># \u91CD\u547D\u540D\u4F1A\u8BDD</span>
prefix $

<span class="token comment"># \u521B\u5EFA\u7A97\u53E3</span>
prefix c
<span class="token comment"># \u5207\u6362\u52302\u53F7\u7A97\u53E3</span>
prefix <span class="token number">2</span>
<span class="token comment"># \u91CD\u547D\u540D\u7A97\u53E3</span>
prefix , 
<span class="token comment"># \u5173\u95ED\u7A97\u53E3</span>
prefix <span class="token operator">&amp;</span>

<span class="token comment"># \u6C34\u5E73\u62C6\u5206\u51FA\u4E00\u4E2A\u65B0\u7A97\u683C</span>
prefix %
<span class="token comment"># \u5782\u76F4\u62C6\u5206\u7A97\u683C</span>
prefix &quot;
<span class="token comment"># \u5207\u6362\u5230\u4E0B\u4E00\u4E2A\u7A97\u683C</span>
prefix o
<span class="token comment"># \u5173\u95ED\u7A97\u683C</span>
prefix x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F1A\u8BDD\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4F1A\u8BDD\u7BA1\u7406" aria-hidden="true">#</a> \u4F1A\u8BDD\u7BA1\u7406</h2><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th><th>\u5FEB\u6377\u952E</th></tr></thead><tbody><tr><td>tmux new -s</td><td>\u521B\u5EFA\u4F1A\u8BDD</td><td></td></tr><tr><td>tmux detach</td><td>\u9000\u51FA\u5F53\u524D\u4F1A\u8BDD\uFF0C\u4F1A\u8BDD\u8FDB\u7A0B\u4ECD\u7136\u5728\u540E\u53F0\u8FD0\u884C</td><td>Ctrl+b d</td></tr><tr><td>tmux ls</td><td>\u67E5\u770B\u5F53\u524D\u6240\u6709\u7684 \u4F1A\u8BDD</td><td>Ctrl+b s</td></tr><tr><td>tmux attach -t</td><td>\u91CD\u65B0\u63A5\u5165\u67D0\u4E2A\u5DF2\u5B58\u5728\u7684\u4F1A\u8BDD</td><td></td></tr><tr><td>tmux kill-session</td><td>\u6740\u6B7B\u67D0\u4E2A\u4F1A\u8BDD</td><td></td></tr><tr><td>tmux switch -t</td><td>\u5207\u6362\u4F1A\u8BDD</td><td></td></tr><tr><td>tmux rename-session</td><td>\u91CD\u65B0\u547D\u540D\u4F1A\u8BDD</td><td>Ctrl+b $</td></tr><tr><td>tmux at -d</td><td>\u91CD\u7ED8\u7A97\u53E3\uFF0C\u5728\u4E0D\u540C\u5C4F\u5E55\u4E0A\u4FDD\u6301\u7A97\u53E3\u4E3A\u6700\u5C0F\u5C3A\u5BF8</td><td></td></tr></tbody></table><h2 id="\u7A97\u53E3\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7A97\u53E3\u7BA1\u7406" aria-hidden="true">#</a> \u7A97\u53E3\u7BA1\u7406</h2><p>\u7A97\u53E3\u5C5E\u4E8E\u4F1A\u8BDD\uFF0C\u7A97\u53E3\u5305\u542B\u591A\u4E2A\u7A97\u683C</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th><th>\u5FEB\u6377\u952E</th></tr></thead><tbody><tr><td>tmux new-window -n</td><td>\u521B\u5EFA\u65B0\u7A97\u53E3</td><td>Ctrl+b c</td></tr><tr><td>tmux select-window -t</td><td>\u5207\u6362\u7A97\u53E3</td><td></td></tr><tr><td>tmux rename-window</td><td>\u91CD\u547D\u540D\u5F53\u524D\u7A97\u53E3</td><td>Ctrl+b ,</td></tr></tbody></table><p>\u5207\u6362\u7A97\u53E3\u5FEB\u6377\u952E</p><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Ctrl+b p</td><td>\u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u7A97\u53E3\uFF08\u6309\u7167\u72B6\u6001\u680F\u4E0A\u7684\u987A\u5E8F\uFF09</td></tr><tr><td>Ctrl+b n</td><td>\u5207\u6362\u5230\u4E0B\u4E00\u4E2A\u7A97\u53E3</td></tr><tr><td>Ctrl+b</td><td>\u5207\u6362\u5230\u6307\u5B9A\u7F16\u53F7\u7684\u7A97\u53E3\uFF0Cnumber \u662F\u72B6\u6001\u680F\u4E0A\u7684\u7A97\u53E3\u7F16\u53F7</td></tr><tr><td>Ctrl+b w</td><td>\u4ECE\u5217\u8868\u4E2D\u9009\u62E9\u7A97\u53E3</td></tr><tr><td>ctrl+b &amp;</td><td>\u5173\u95ED\u5F53\u524D\u7A97\u53E3</td></tr><tr><td>ctrl+b x</td><td>\u5220\u9664\u7A97\u53E3</td></tr></tbody></table><h2 id="\u7A97\u683C\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7A97\u683C\u7BA1\u7406" aria-hidden="true">#</a> \u7A97\u683C\u7BA1\u7406</h2><p><strong>\u62C6\u5206\u7A97\u683C</strong></p><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th><th></th></tr></thead><tbody><tr><td>tmux split-window -h</td><td>\u5212\u5206\u5DE6\u53F3\u4E24\u4E2A\u7A97\u683C</td><td>prefix %</td></tr><tr><td>tmux split-window</td><td>\u5212\u5206\u4E0A\u4E0B\u4E24\u4E2A\u7A97\u683C</td><td>prefix &quot;</td></tr></tbody></table><p><strong>\u79FB\u52A8\u7A97\u683C</strong></p><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tmux select-pane -U</td><td>\u5149\u6807\u5207\u6362\u5230\u4E0A\u65B9\u7A97\u683C</td></tr><tr><td>tmux select-pane -D</td><td>\u5149\u6807\u5207\u6362\u5230\u4E0B\u65B9\u7A97\u683C</td></tr><tr><td>tmux select-pane -L</td><td>\u5149\u6807\u5207\u6362\u5230\u5DE6\u8FB9\u7A97\u683C</td></tr><tr><td>tmux select-pane -R</td><td>\u5149\u6807\u5207\u6362\u5230\u53F3\u8FB9\u7A97\u683C</td></tr><tr><td>tmux swap-pane -U</td><td>\u5F53\u524D\u7A97\u683C\u4E0A\u79FB</td></tr><tr><td>tmux swap-pane -D</td><td>\u5F53\u524D\u7A97\u683C\u4E0B\u79FB</td></tr></tbody></table><p><strong>\u7A97\u683C\u5FEB\u6377\u952E</strong></p><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Ctrl+b %</td><td>\u5212\u5206\u5DE6\u53F3\u4E24\u4E2A\u7A97\u683C</td></tr><tr><td>Ctrl+b &quot;</td><td>\u5212\u5206\u4E0A\u4E0B\u4E24\u4E2A\u7A97\u683C</td></tr><tr><td>Ctrl+b ;</td><td>\u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u7A97\u683C</td></tr><tr><td>Ctrl+b o</td><td>\u5149\u6807\u5207\u6362\u5230\u4E0B\u4E00\u4E2A\u7A97\u683C</td></tr><tr><td>Ctrl+b {</td><td>\u5F53\u524D\u7A97\u683C\u5DE6\u79FB</td></tr><tr><td>Ctrl+b }</td><td>\u5F53\u524D\u7A97\u683C\u53F3\u79FB</td></tr><tr><td>Ctrl+b Ctrl+o</td><td>\u5F53\u524D\u7A97\u683C\u4E0A\u79FB</td></tr><tr><td>Ctrl+b Alt+o</td><td>\u5F53\u524D\u7A97\u683C\u4E0B\u79FB</td></tr><tr><td>Ctrl+b x</td><td>\u5173\u95ED\u5F53\u524D\u7A97\u683C</td></tr><tr><td>Ctrl+b !</td><td>\u5C06\u5F53\u524D\u7A97\u683C\u62C6\u5206\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7A97\u53E3</td></tr><tr><td>Ctrl+b z</td><td>\u5F53\u524D\u7A97\u683C\u5168\u5C4F\u663E\u793A\uFF0C\u518D\u4F7F\u7528\u4E00\u6B21\u4F1A\u53D8\u56DE\u539F\u6765\u5927\u5C0F</td></tr><tr><td>Ctrl+b q</td><td>\u663E\u793A\u7A97\u683C\u7F16\u53F7</td></tr><tr><td>Ctrl+b Alt+\u65B9\u5411\u952E</td><td>\u8C03\u6574\u7A97\u683C\u5927\u5C0F</td></tr><tr><td></td><td></td></tr></tbody></table><h2 id="\u6EDA\u52A8\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u7A97\u53E3" aria-hidden="true">#</a> \u6EDA\u52A8\u7A97\u53E3</h2><p>tmux\u6EDA\u52A8\u7A97\u53E3\u9700\u8981\u901A\u8FC7\u6307\u4EE4\u64CD\u4F5C</p><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>Ctrl+b [ \uFF08\u6309q\u9000\u51FA\u6EDA\u52A8\u6A21\u5F0F\uFF09</td><td>\u6EDA\u52A8\u7A97\u53E3</td></tr></tbody></table><h2 id="\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> \u8F6F\u4EF6\u5B89\u88C5</h2><h3 id="tmux\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#tmux\u4E0B\u8F7D" aria-hidden="true">#</a> tmux\u4E0B\u8F7D</h3><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 tmux\uFF0Clinux\u4E0Emac\u90FD\u53EF\u4EE5\u4F7F\u7528[brew (opens new window)](http://houdunren.gitee.io/note/linux/2 \u5E38\u7528\u5DE5\u5177.html#brew)\u8FDB\u884C\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Mac</span>
$ brew <span class="token function">install</span> tmux

<span class="token comment"># CentOS \u6216 Fedor\u53EF\u4EE5\u4F7F\u7528yum/dnf/brew\u7B49\u65B9\u5F0F\u5B89\u88C5\uFF0Cbrew\u7248\u672C\u66F4\u9AD8\u4E9B</span>
$ yum <span class="token function">install</span> tmux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B57\u4F53\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53\u56FE\u6807" aria-hidden="true">#</a> \u5B57\u4F53\u56FE\u6807</h3><p>\u6267\u884C\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88C5\u5B57\u4F53\u56FE\u6807\u5230\u7CFB\u7EDF\u4E2D\uFF0C\u6709\u4E9B\u98CE\u683C\u9700\u8981\u56FE\u6807\u65F6\u5C31\u53EF\u4EE5\u6B63\u5E38\u663E\u793A\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span>
<span class="token function">git</span> clone https://github.com/powerline/fonts.git --depth<span class="token operator">=</span><span class="token number">1</span>
<span class="token builtin class-name">cd</span> fonts
./install.sh
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">rm</span> -rf fonts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>items2\u9700\u8981\u5728perference =&gt; profile =&gt; text:</p><p>\u2705 Use built-in Powerline glyphs + Font \u9009\u62E9</p></blockquote><h3 id="\u5B89\u88C5\u98CE\u683C" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u98CE\u683C" aria-hidden="true">#</a> \u5B89\u88C5\u98CE\u683C</h3><ol><li><p>Clone \u9879\u76EE\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/odedlaz/tmux-onedark-theme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5220\u9664\u539F~/.tmux.conf\u6587\u4EF6\uFF08\u6CE8\u610F\u4E0D\u662F\u5220\u9664\u5185\u5BB9\uFF0C\u56E0\u4E3A\u5B58\u5728\u7684.tmux.conf\u53EF\u80FD\u662F\u8F6F\u94FE\u63A5\uFF09\uFF0C\u7136\u540E\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6 <code>~/.tmux.conf</code> \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u5982\u679C\u60F3\u663E\u793A\u5B8C\u6574\u65E5\u671F\u5C31\u5C06\u524D2~4\u884C\u6CE8\u91CA\u6389\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>run-shell ~/tmux-onedark-theme/tmux-onedark-theme.tmux
<span class="token builtin class-name">set</span> -g @onedark_widgets <span class="token string">&quot; &quot;</span>
<span class="token builtin class-name">set</span> -g @onedark_time_format <span class="token string">&quot;%I:%M &quot;</span>
<span class="token builtin class-name">set</span> -g @onedark_date_format <span class="token string">&quot;%m/%d&quot;</span>
set-option -g status-position bottom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u52A0\u8F7D\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tmux source-file ~/.tmux.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="\u603B\u4F53\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u603B\u4F53\u914D\u7F6E" aria-hidden="true">#</a> \u603B\u4F53\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>run-shell ~/tmux-onedark-theme/tmux-onedark-theme.tmux

<span class="token comment">#set -g @onedark_widgets&quot;</span>
<span class="token builtin class-name">set</span> -g @onedark_widgets <span class="token string">&quot;William&quot;</span>
<span class="token builtin class-name">set</span> -g @onedark_time_format <span class="token string">&quot;%I:%M&quot;</span>
<span class="token builtin class-name">set</span> -g @onedark_date_format <span class="token string">&quot;%m:%d&quot;</span>
<span class="token comment">#set -g @onedark_date_format &quot;%m:%d&quot;</span>
set-option -g default-terminal <span class="token string">&quot;screen-256color&quot;</span>
<span class="token builtin class-name">set</span> -g default-terminal <span class="token string">&quot;screen-256color&quot;</span>

<span class="token comment"># \u89E3\u51B3neovim\u4E2Desc\u54CD\u5E94\u6162</span>
<span class="token builtin class-name">set</span> -s escape-time <span class="token number">0</span>
set-option -g status-position bottom

<span class="token comment"># \u81EA\u52A8\u4FDD\u5B58\u4F1A\u8BDD</span>
<span class="token builtin class-name">set</span> -g @plugin <span class="token string">&#39;tmux-plugins/tpm&#39;</span>
<span class="token builtin class-name">set</span> -g @plugin <span class="token string">&#39;tmux-plugins/tmux-sensible&#39;</span>
<span class="token builtin class-name">set</span> -g @plugin <span class="token string">&#39;tmux-plugins/tmux-resurrect&#39;</span>
<span class="token builtin class-name">set</span> -g @plugin <span class="token string">&#39;tmux-plugins/tmux-continuum&#39;</span>\u200B
<span class="token builtin class-name">set</span> -g @continuum-save-interval <span class="token string">&#39;15&#39;</span>
<span class="token builtin class-name">set</span> -g @continuum-restore <span class="token string">&#39;on&#39;</span>
<span class="token builtin class-name">set</span> -g @resurrect-capture-pane-contents <span class="token string">&#39;on&#39;</span>
run <span class="token string">&#39;~/.tmux/plugins/tpm/tpm&#39;</span>

run-shell ~/.tmux/plugins/resurrect/resurrect.tmux

<span class="token comment"># \u89E3\u9664\u9ED8\u8BA4\u524D\u7F00</span>
unbind C-b
<span class="token comment"># \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u524D\u7F00</span>
<span class="token builtin class-name">set</span> -g prefix C-f
<span class="token comment"># \u91C7\u7528vim\u7684\u64CD\u4F5C\u65B9\u5F0F</span>
setw -g mode-keys <span class="token function">vi</span>
<span class="token comment"># \u7A97\u53E3\u5E8F\u53F7\u4ECE1\u5F00\u59CB\u8BA1\u6570</span>
<span class="token builtin class-name">set</span> -g base-index <span class="token number">1</span>
<span class="token comment"># \u5F00\u542F\u9F20\u6807\u6A21\u5F0F</span>
set-option -g mouse off

<span class="token comment"># \u901A\u8FC7\u524D\u7F00+KJHL\u5FEB\u901F\u5207\u6362pane</span>
<span class="token comment">#up</span>
bind-key k select-pane -U
<span class="token comment">#down</span>
bind-key j select-pane -D
<span class="token comment">#left</span>
bind-key h select-pane -L
<span class="token comment">#right</span>
bind-key l select-pane -R
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),i=[d];function l(r,c){return t(),s("div",null,i)}var u=n(a,[["render",l],["__file","tmux.html.vue"]]);export{u as default};

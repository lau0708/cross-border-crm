# Cloudflare Pages 部署

把 `cross-border-crm` 的静态 demo（`examples/chat-first-demo/dist`）部署到 Cloudflare Pages，获得一个免费、不睡眠的访问域名（`*.pages.dev`）。

## 为什么可行

- demo 产物已提交在 `examples/chat-first-demo/dist`，是纯静态文件，无需构建。
- demo 使用 hash 路由（`#/app/ai/workbench`），**不需要** `_redirects` 回退配置。

## 一次性准备

1. 登录 Cloudflare，记录右侧的 **Account ID**。
2. 创建 API Token：`My Profile → API Tokens → Create Token → Edit Cloudflare Workers` 模板（Pages 部署需要 Workers 权限），保存 token。
3. 在 GitHub 仓库 `Settings → Secrets and variables → Actions` 新增两个 secret：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

## 方式一：GitHub Actions（推荐）

仓库已提供 `.github/workflows/deploy-cloudflare.yml`。配置好上面两个 secret 后：

- `examples/chat-first-demo/dist/**` 有变更时自动部署；
- 也可手动：`Actions → Deploy to Cloudflare Pages → Run workflow`。

未配置 secret 时该 workflow 会自动跳过，不影响其它 CI。

## 方式二：本地命令行

```bash
npx wrangler login
npx wrangler pages deploy --project-name lau-crm-demo
```

首次会创建项目，完成后输出 `https://lau-crm-demo.pages.dev`。

## 绑定自定义域名

Cloudflare 控制台 → `Workers & Pages` → 项目 `lau-crm-demo` → `Custom domains` → Add domain（如 `crm.lau0708.com`），按提示添加 CNAME 记录。

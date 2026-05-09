# 【再不吃就坏了】小程序展示页 - Vercel 部署指南

## 前置准备

### 1. 登录 Vercel
- 访问 https://vercel.com
- 使用 GitHub、GitLab、邮箱等方式登录账号

### 2. 获取项目代码
确保您的项目代码已上传到 GitHub 仓库

## 部署步骤

### 方式一：通过 Vercel 网页部署（推荐）

1. **访问 Vercel 控制台**
   - 打开 https://vercel.com/new

2. **导入 Git 仓库**
   - 点击 "Import Git Repository"
   - 选择您的 GitHub 仓库
   - 选择要部署的分支（通常选择 `main` 或 `master`）

3. **配置项目**
   - **Framework Preset**: 选择 `Vite`
   - **Root Directory**: 保持默认（`.`）
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **环境变量**（如有需要）
   - 不需要额外环境变量，保持默认

5. **点击 Deploy**
   - Vercel 将自动构建并部署您的网站
   - 等待 1-2 分钟完成部署

6. **获取访问地址**
   - 部署成功后，Vercel 会提供一个 `.vercel.app` 域名
   - 示例：`https://your-project.vercel.app`

### 方式二：通过命令行部署

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```
   - 按照提示完成登录

3. **部署项目**
   ```bash
   vercel
   ```
   - 首次部署会提示设置项目名称
   - 选择合适的配置选项

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

## 自定义域名（可选）

1. **购买域名**
   - 建议在阿里云、腾讯云等平台购买

2. **配置域名**
   - 在 Vercel 项目设置中找到 "Domains"
   - 添加您的自定义域名
   - 按照提示配置 DNS 记录

3. **等待验证**
   - DNS 更改可能需要几分钟到 48 小时生效

## 常见问题

### Q: 部署失败怎么办？
A: 检查以下内容：
- Build Command 是否正确（`npm run build`）
- Output Directory 是否正确（`dist`）
- 查看 Vercel 部署日志，定位具体错误

### Q: 如何更新网站？
A: 
- 方式一：将代码推送到 GitHub，Vercel 会自动重新部署
- 方式二：运行 `vercel --prod` 手动部署

### Q: 如何查看访问统计？
A: 在 Vercel 控制台中，点击项目可以查看 Analytics 数据

## 项目已完成的配置文件

项目已包含以下配置，无需修改：

- ✅ `vercel.json` - Vercel 路由配置
- ✅ `package.json` - 项目依赖和脚本
- ✅ `vite.config.ts` - Vite 构建配置

## 快速开始

如果您还没有 GitHub 仓库，可以：

1. 初始化 Git 仓库
   ```bash
   git init
   ```

2. 添加所有文件
   ```bash
   git add .
   ```

3. 提交
   ```bash
   git commit -m "Initial commit"
   ```

4. 创建 GitHub 仓库并推送
   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   git branch -M main
   git push -u origin main
   ```

5. 按照上面的步骤在 Vercel 网页上导入并部署

---

## 技术支持

如有问题，请参考：
- Vercel 官方文档：https://vercel.com/docs
- Vercel 中文社区：https://vercel.cool

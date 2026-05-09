import { Bell, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">再不吃就坏了</h3>
                <p className="text-gray-400 text-sm">记录新鲜，守护健康</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              一款帮助您管理食品保质期的智能工具，让每一餐都安心，告别食物浪费。
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">快速链接</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-green-400 transition-colors">
                  核心功能
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-400 hover:text-green-400 transition-colors">
                  背景故事
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors">
                  使用流程
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  用户协议
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  隐私政策
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">联系我们</h4>
            <div className="space-y-4">
              <p className="text-gray-400">
                邮箱：hello@zbcjhl.com
              </p>
              <p className="text-gray-400">
                微信：zbcjhl_official
              </p>
              <p className="text-gray-400">
                工作时间：周一至周五 9:00-18:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 再不吃就坏了 版权所有
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            用 <Heart className="w-4 h-4 text-red-400 inline" /> 打造
          </p>
        </div>
      </div>
    </footer>
  );
}

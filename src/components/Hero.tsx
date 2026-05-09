import { Bell, Apple, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="absolute top-20 left-10 opacity-20">
        <Leaf className="w-16 h-16 text-green-400 animate-bounce" style={{ animationDuration: '3s' }} />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <Bell className="w-12 h-12 text-orange-400 animate-pulse" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-15">
        <Apple className="w-10 h-10 text-red-400 animate-bounce" style={{ animationDuration: '4s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          微信小程序
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          再不吃就坏了
          <span className="block mt-2 text-2xl md:text-3xl font-normal text-gray-600">
            记录每一份新鲜，守护每一餐健康
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          智能食品保质期管理工具，帮你追踪食物的新鲜度，
          <br className="hidden md:block" />
          及时提醒，告别浪费，让每一餐都安心。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              立即体验
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
            了解更多
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-64 h-80 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-gray-800 font-semibold">小程序码</p>
                  <p className="text-gray-500 text-sm mt-1">扫码体验</p>
                </div>
                <div className="w-32 h-32 bg-white rounded-xl shadow-inner flex items-center justify-center">
                  <div className="w-28 h-28 border-2 border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-green-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-sm font-bold">NEW</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

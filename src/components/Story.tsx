import { Heart, Leaf, Users, TrendingUp } from 'lucide-react';

export function Story() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white" id="story">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20warm%20and%20cozy%20kitchen%20scene%20with%20fresh%20vegetables%20and%20fruits%20on%20the%20table%2C%20soft%20natural%20lighting%2C%20healthy%20eating%20concept%2C%20minimalist%20style%2C%20warm%20color%20palette&image_size=portrait_4_3"
                  alt="厨房场景"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">50万+</p>
                    <p className="text-gray-500 text-sm">用户信赖</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                    <Heart className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">98%</p>
                    <p className="text-gray-500 text-sm">好评率</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-1/4 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
          </div>

          <div>
            <span className="inline-block text-green-600 font-medium mb-4">背后的故事</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              源于一份对食物的珍惜
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                2023年的一个普通周末，我们团队的小伙伴们聚在一起做饭。
                打开冰箱，发现了好几样已经过期的食材——上周买的新鲜蔬菜、
                朋友送的进口奶酪、还有妈妈特意带来的土鸡蛋...
              </p>
              
              <p>
                看着这些被遗忘在角落、最终只能扔进垃圾桶的食物，我们感到非常可惜。
                那一刻，一个想法在我们心中萌芽：能不能做一款工具，
                帮助大家更好地管理食品保质期？
              </p>
              
              <p>
                于是，【再不吃就坏了】应运而生。我们希望这款小程序不仅是一个提醒工具，
                更是一种生活态度的倡导——珍惜每一份食物，尊重每一份劳动，
                让健康饮食成为一种习惯。
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">用户第一</p>
                  <p className="text-sm text-gray-500">倾听需求，持续改进</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">持续创新</p>
                  <p className="text-sm text-gray-500">追求更好的体验</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

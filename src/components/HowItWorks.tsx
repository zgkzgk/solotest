import { Smartphone, Plus, Bell, Check } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    step: '01',
    title: '打开小程序',
    description: '微信搜索「再不吃就坏了」，或扫码进入',
  },
  {
    icon: Plus,
    step: '02',
    title: '添加食品',
    description: '手动输入或拍照识别食品信息',
  },
  {
    icon: Bell,
    step: '03',
    title: '智能提醒',
    description: '系统自动推送过期提醒通知',
  },
  {
    icon: Check,
    step: '04',
    title: '享用美食',
    description: '及时食用，告别浪费',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-medium mb-4">使用流程</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            四步开启健康生活
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            简单易用，让食品管理变得轻松愉快
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-emerald-300 to-green-200" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      
                      <span className="inline-block text-5xl font-bold text-green-200 absolute top-4 right-4">
                        {step.step}
                      </span>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-20">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

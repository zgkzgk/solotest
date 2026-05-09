import { Bell, Camera, Database, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: '智能提醒',
    description: '基于食品保质期，智能推送食用提醒，确保在最佳时间享用美食',
    color: 'green',
  },
  {
    icon: Camera,
    title: '拍照识别',
    description: '一键拍照识别食品包装信息，自动提取生产日期和保质期',
    color: 'blue',
  },
  {
    icon: Database,
    title: '分类管理',
    description: '支持冷藏、冷冻、干货等多种分类，管理更清晰',
    color: 'purple',
  },
  {
    icon: RefreshCw,
    title: '批量操作',
    description: '一键添加、批量过期提醒，操作更便捷高效',
    color: 'orange',
  },
  {
    icon: AlertTriangle,
    title: '过期预警',
    description: '提前3天预警即将过期的食品，减少浪费',
    color: 'red',
  },
  {
    icon: CheckCircle,
    title: '食用记录',
    description: '记录已食用或丢弃的食品，统计浪费情况',
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; text: string; shadow: string }> = {
  green: { bg: 'bg-green-100', text: 'text-green-600', shadow: 'shadow-green-200' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', shadow: 'shadow-blue-200' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', shadow: 'shadow-purple-200' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', shadow: 'shadow-orange-200' },
  red: { bg: 'bg-red-100', text: 'text-red-600', shadow: 'shadow-red-200' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', shadow: 'shadow-emerald-200' },
};

export function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-medium mb-4">核心功能</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            让食品管理更简单
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们精心设计每一个功能，只为让您的生活更加便捷
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`absolute -bottom-2 -right-2 w-24 h-24 ${colors.bg} rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

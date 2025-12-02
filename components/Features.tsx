import React from 'react';
import { Sparkles, Droplet, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-2">Doctor Magic</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Glow like never before!</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="w-8 h-8 text-brand-purple" />,
              title: "Công Thức Độc Quyền",
              desc: "Sự kết hợp hoàn hảo giữa các tinh chất thiên nhiên quý hiếm giúp nuôi dưỡng mi từ sâu bên trong."
            },
            {
              icon: <Droplet className="w-8 h-8 text-brand-purple" />,
              title: "Thẩm Thấu Nhanh",
              desc: "Tinh chất dạng lỏng nhẹ, không gây bết dính, thẩm thấu ngay tức thì giúp mi khỏe mạnh."
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-brand-purple" />,
              title: "An Toàn Tuyệt Đối",
              desc: "Được kiểm định nghiêm ngặt, phù hợp với mọi loại da, kể cả vùng da mắt nhạy cảm nhất."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-brand-pink/50 p-8 rounded-2xl text-center hover:bg-brand-pink transition-colors duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
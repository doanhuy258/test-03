import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-pink via-white to-purple-50 pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-semibold">
            <Star className="w-4 h-4 fill-current" />
            <span>Sản phẩm bán chạy nhất năm</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Dưỡng Mi <span className="text-brand-purple">Doctor Magic</span> <br/>
            Dài & Khỏe Từ Gốc
          </h1>
          
          <p className="text-lg text-gray-600 md:pr-10">
            Tinh chất dưỡng lông mày, mi giúp bổ sung dưỡng chất cho hàng mi mềm mại, chắc khỏe và ngăn gãy rụng. Đánh thức vẻ đẹp tự nhiên của đôi mắt bạn.
          </p>

          <div className="space-y-3">
            {['Mi dài cong vút tự nhiên', 'Ngăn ngừa gãy rụng hiệu quả', 'An toàn, không kích ứng', 'Hiệu quả thấy rõ sau 7 ngày'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a 
              href="#order-form" 
              className="inline-block bg-brand-purple hover:bg-purple-800 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-200 transition-all transform hover:-translate-y-1"
            >
              Đặt Mua Ngay
            </a>
          </div>
        </div>

        {/* Right: Product Image Mockup */}
        <div className="relative z-10 flex justify-center">
           {/* Abstract Background Blobs */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
           
           <div className="relative">
             <img 
               src="https://picsum.photos/id/433/600/800" 
               alt="Doctor Magic Product" 
               className="rounded-3xl shadow-2xl border-4 border-white object-cover h-[500px] w-full max-w-sm mx-auto z-10 relative"
             />
             {/* Badge */}
             <div className="absolute -top-6 -right-6 bg-brand-gold text-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-xl shadow-lg animate-bounce z-20 border-4 border-white">
               MS09
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
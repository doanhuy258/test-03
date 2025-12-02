import React from 'react';
import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-4">Doctor Magic</h2>
            <p className="text-gray-400 max-w-sm">
              Chuyên cung cấp các sản phẩm làm đẹp cao cấp, mang lại vẻ đẹp tự nhiên và sự tự tin cho người phụ nữ hiện đại.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 0778 522 677
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> TP. Hồ Chí Minh
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Mạng Xã Hội</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2024 Doctor Magic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { X, CheckCircle, Smartphone, Check } from 'lucide-react';
import { PAYMENT_INFO } from '../constants';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  amount: number;
  orderDescription: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onConfirm, amount, orderDescription }) => {
  if (!isOpen) return null;

  // Construct Seepay URL
  const qrUrl = `https://qr.sepay.vn/img?acc=${PAYMENT_INFO.account}&bank=${PAYMENT_INFO.bank}&amount=${amount}&des=${encodeURIComponent(orderDescription)}&template=${PAYMENT_INFO.template}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-green-50 p-6 text-center border-b border-green-100">
          <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
             <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800">Đặt hàng thành công!</h3>
          <p className="text-green-700 text-sm mt-1">Vui lòng thanh toán để hoàn tất đơn hàng</p>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Body */}
        <div className="p-6 md:p-8 flex flex-col items-center">
          <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 mb-6">
            <img 
              src={qrUrl} 
              alt="Mã QR Thanh Toán" 
              className="w-56 md:w-64 h-auto rounded-lg"
            />
          </div>
          
          <div className="w-full space-y-3 text-sm mb-6">
             <div className="flex justify-between py-2 border-b border-gray-100">
               <span className="text-gray-500">Ngân hàng</span>
               <span className="font-semibold text-gray-900">{PAYMENT_INFO.bank}</span>
             </div>
             <div className="flex justify-between py-2 border-b border-gray-100">
               <span className="text-gray-500">Số tài khoản</span>
               <span className="font-semibold text-gray-900">{PAYMENT_INFO.account}</span>
             </div>
             <div className="flex justify-between py-2 border-b border-gray-100">
               <span className="text-gray-500">Số tiền</span>
               <span className="font-bold text-brand-purple text-lg">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)}
               </span>
             </div>
             <div className="flex justify-between py-2 border-b border-gray-100">
               <span className="text-gray-500">Nội dung CK</span>
               <span className="font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">{orderDescription}</span>
             </div>
          </div>

          <button
            onClick={onConfirm}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-200 transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            Xác nhận đã thanh toán
          </button>

          <div className="mt-4 text-center text-xs text-gray-400 flex items-center gap-1">
             <Smartphone className="w-3 h-3" />
             <span>Quét mã QR bằng ứng dụng ngân hàng của bạn</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentModal;
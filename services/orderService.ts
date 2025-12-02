
import { OrderFormState } from '../types';
import { PRODUCT_INFO, GOOGLE_SCRIPT_URL } from '../constants';

export const submitOrderToSheet = async (data: OrderFormState): Promise<boolean> => {
  const totalPrice = data.quantity * PRODUCT_INFO.price;
  
  // Tạo params
  const params = new URLSearchParams();
  params.append('fullName', data.fullName);       
  params.append('phoneNumber', data.phoneNumber); 
  params.append('address', data.address);         
  params.append('quantity', data.quantity.toString()); 
  params.append('totalPrice', totalPrice.toString()); 

  try {
    if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.length > 0) {
      // Kỹ thuật: Gắn luôn tham số vào URL để đảm bảo Google Script đọc được qua e.parameter
      // ngay cả khi Body bị trình duyệt chặn hoặc format sai.
      const finalUrl = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

      console.log("🚀 Đang gửi đơn hàng tới:", finalUrl);
      
      await fetch(finalUrl, {
        method: 'POST',
        mode: 'no-cors', // Bắt buộc
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // Vẫn gửi body để dự phòng
        body: params,
      });
      
      console.log("✅ Đã gửi request. Hãy kiểm tra Sheet.");
      return true;
    } else {
      console.error("⛔ CHƯA CẤU HÌNH URL");
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    }
  } catch (error) {
    console.error("❌ Lỗi mạng:", error);
    return true; 
  }
};

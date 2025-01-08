# Restoran Uygulaması

Bu proje, restoranları listeleyen ve detaylarını görüntülemenize olanak tanıyan bir mobil uygulamadır. Kullanıcılar, restoranları fiyat aralığına göre sıralayabilir, arama çubuğundan belirli yemekleri arayabilir ve restoran detay sayfasında iletişim bilgileri ile fotoğraflarını görebilir.

---

## Özellikler

1. **Restoran Listeleme:**
   - Restoranlar, fiyat aralığına göre **Ucuz**, **Orta**, ve **Pahalı** kategorilerine ayrılmıştır.
   - Listeleme sırasında restoranların adı, yıldız derecelendirmesi ve toplam değerlendirme sayısı görüntülenir.

2. **Restoran Arama:**
   - Kullanıcılar arama çubuğuna istedikleri yemeğin adını yazabilir ve o yemeği sunan restoranlar listelenir.
   - Örneğin: "Adana" arandığında, Adana kebabını sunan restoranlar sıralanır.

3. **Restoran Detayları:**
   - Bir restorana tıklandığında, detay sayfasında şu bilgiler görüntülenir:
     - Restoran adı
     - Telefon numarası
     - Restorana ait fotoğraflar

4. **Veri Kaynağı:**
   - Restoran bilgileri, **Yelp API**'den (`https://api.yelp.com/v3/businesses`) çekilmektedir.

---

## Kullanılan Teknolojiler

### **Frontend:**
- **React Native**: Uygulama, mobil cihazlar için optimize edilmiştir.
- **Expo**: Hızlı geliştirme için Expo framework kullanıldı.
- **React Navigation**: Sayfalar arası geçişler ve navigasyon işlemleri için kullanıldı.

### **Backend ve Veri Çekme:**
- **Yelp API**: Restoran verileri, fotoğraflar, fiyat bilgileri ve telefon numaraları bu API üzerinden çekiliyor.
- **Axios**: API isteklerini yönetmek için kullanıldı.

---

# Ekran Görüntüsü
![Proje Ekran Görüntüsü](./images/Ekran%20görüntüsü%202025-01-09%20014333.png)
![Proje Ekran Görüntüsü](./images/Ekran%20görüntüsü%202025-01-09%20014409.png)

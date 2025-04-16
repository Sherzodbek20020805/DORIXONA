
# 🏥 Dorixona Qidiruv Tizimi

**Dorixona Qidiruv Tizimi** — foydalanuvchilarga dorilarni onlayn tarzda qidirish, ularning narxlarini solishtirish va dorixonalar haqida to‘liq ma’lumot olish imkonini beruvchi veb-ilova.

---

## 🔍 Asosiy Imkoniyatlar

- 🔎 Dori nomi bo‘yicha tezkor qidiruv
- 💸 Dorilar narxlarini solishtirish
- 🏪 Dorixonalarning to‘liq ro‘yxati
- ✅ Dori mavjudligini tekshirish
- 🗺 Xarita orqali eng yaqin dorixonani topish (ixtiyoriy)
- 📦 Onlayn buyurtma berish

---

## 🧩 Ma’lumotlar Modellari

### 1. 🧪 `Dori` modeli

| Maydon nomi         | Turi       | Tavsif                                      |
|---------------------|------------|---------------------------------------------|
| `nomi`              | String     | Dori vositasi nomi                          |
| `ishlabChiqaruvchi` | String     | Kompaniya nomi                              |
| `tavsif`            | String     | Dorining qisqacha izohi                     |
| `narx`              | Number     | Narxi (so‘mda)                              |
| `mavjud`            | Boolean    | Dorixonada mavjud yoki yo‘qligi             |
| `dorixonaId`        | ObjectId   | Ushbu dori tegishli dorixona identifikatori |

---

### 2. 🏪 `Dorixona` modeli

| Maydon nomi      | Turi       | Tavsif                                   |
|------------------|------------|------------------------------------------|
| `nomi`           | String     | Dorixona nomi                            |
| `manzil`         | String     | To‘liq manzil                            |
| `lokatsiya`      | Object     | `{ kenglik: Number, uzunlik: Number }`   |
| `ishVaqti`       | String     | Ish vaqti (masalan: 08:00–22:00)         |
| `aloqa`          | String     | Telefon raqami                           |

---

### 3. 👤 `Foydalanuvchi` modeli

| Maydon nomi         | Turi       | Tavsif                            |
|---------------------|------------|-----------------------------------|
| `foydalanuvchiNomi` | String     | Foydalanuvchi nomi                |
| `email`             | String     | Elektron pochta manzili           |
| `parol`             | String     | Maxfiy parol (shifrlangan)        |
| `rol`               | String     | "user" yoki "admin"               |
| `sevimlilar`        | Array      | Sevimli dorilar yoki dorixonalar  |
| `buyurtmalar`       | Array      | Foydalanuvchiga tegishli buyurtmalar IDlari |

---

### 4. 📦 `Buyurtma` modeli

| Maydon nomi      | Turi       | Tavsif                                       |
|------------------|------------|----------------------------------------------|
| `foydalanuvchiId`| ObjectId   | Buyurtma beruvchi foydalanuvchi IDsi         |
| `buyurtmaElementlari` | Array | `BuyurtmaElementi` lar ro‘yxati              |
| `holat`          | String     | `kutilmoqda`, `tasdiqlandi`, `bekor qilindi` |
| `yaratilganVaqt` | Date       | Buyurtma yaratilgan vaqti                    |
| `jamiNarx`       | Number     | Buyurtmadagi barcha dorilar umumiy narxi     |

---

### 5. 📋 `BuyurtmaElementi` modeli

| Maydon nomi  | Turi     | Tavsif                                      |
|--------------|----------|---------------------------------------------|
| `doriId`     | ObjectId | Buyurtmadagi dori IDsi                      |
| `miqdor`     | Number   | Ushbu doridan necha dona buyurtma qilingan |
| `narx`       | Number   | Ushbu dorining bir donasining narxi         |
| `jamiNarx`   | Number   | `miqdor * narx`                             |

---

## 🛠 Texnologiyalar

- **Backend:** Node.js + Express
- **Ma’lumotlar bazasi:** MongoDB + Mongoose
- **Frontend:** HTML/CSS/JS yoki React.js
- **Xarita (ixtiyoriy):** Leaflet.js yoki Google Maps API

---

## 🚀 O‘rnatish

```bash
git clone https://github.com/foydalanuvchi/dorixona-qidiruv-tizimi.git
cd dorixona-qidiruv-tizimi
npm install
npm run dev

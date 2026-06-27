# การตั้งค่าโปรเจกต์

> ภาษาอังกฤษ: [setup.md](./setup.md)

โปรเจกต์นี้เป็นแอป [Next.js](https://nextjs.org) ที่ใช้ React 19, Tailwind CSS 4 และ Supabase สำหรับ authentication และข้อมูล
ตั้งค่า Turbopack ใน `next.config.ts` ให้ใช้โฟลเดอร์โปรเจกต์นี้เป็น root

## สิ่งที่ต้องมีก่อนเริ่ม

- **Node.js** เวอร์ชัน 18 หรือ 20 ขึ้นไป (แนะนำ)
- **npm** (ติดตั้งมาพร้อม Node.js)

ตรวจสอบว่าติดตั้งแล้ว:

```bash
node -v
npm -v
```

## การติดตั้ง

1. Clone หรือเปิดโฟลเดอร์โปรเจกต์

2. ติดตั้ง dependencies:

```bash
npm install
```

## ตัวแปร Environment

สร้างไฟล์ `.env.local` ที่ root ของโปรเจกต์:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_KEY=your_supabase_anon_key
```

ตัวแปรเหล่านี้ใช้ใน `libs/supabase.js` สำหรับเชื่อมต่อ Supabase และ login ด้วย GitHub OAuth

วิธีหาค่า:

1. สร้าง project ที่ [supabase.com](https://supabase.com)
2. เปิด **Project Settings → API**
3. คัดลอก **Project URL** และ **anon public** key

> อย่า commit ไฟล์ `.env.local` ขึ้น git — ไฟล์นี้ถูก ignore ใน `.gitignore` แล้ว

## การรันโปรเจกต์

### โหมด Development

เริ่ม development server พร้อม hot reload:

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

หากต้องการใช้ port อื่น:

```bash
npm run dev -- -p 3001
```

### โหมด Production

Build และรัน production server:

```bash
npm run build
npm run start
```

แอปจะพร้อมใช้งานที่ [http://localhost:3000](http://localhost:3000)

## คำสั่งที่ใช้ได้

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `npm run dev` | เริ่ม development server |
| `npm run build` | Build สำหรับ production |
| `npm run start` | รัน production server (ต้อง build ก่อน) |
| `npm run lint` | ตรวจสอบ code ด้วย ESLint |

## เทคโนโลยีที่ใช้

| เทคโนโลยี | เวอร์ชัน |
|-----------|----------|
| Next.js | 16.2.9 |
| React | 19.2.4 |
| Tailwind CSS | 4 |
| Supabase JS | 2.x |
| TypeScript | 5 |

## โครงสร้างโปรเจกต์

```
app/              # หน้าเว็บและ component ของ Next.js App Router
  artists/        # หน้ารายการ สร้าง และรายละเอียดศิลปิน
  songs/          # หน้ารายการและรายละเอียดเพลง
  history/        # หน้าประวัติการดูของผู้ใช้
  products/       # หน้าสินค้า
  users/          # หน้าผู้ใช้
  components/     # UI component ที่ใช้ร่วมกัน
libs/             # Supabase client, auth และ data models
public/           # ไฟล์ static
docs/             # เอกสารโปรเจกต์
```

## เส้นทาง (Routes) หลัก

| Route | คำอธิบาย |
|-------|----------|
| `/` | หน้าแรก |
| `/artists` | รายการศิลปิน |
| `/artists/create` | สร้างศิลปิน |
| `/artists/[id]` | รายละเอียดศิลปิน |
| `/songs` | รายการเพลง |
| `/songs/[id]` | รายละเอียดเพลง |
| `/history` | ประวัติการดูของผู้ใช้ |
| `/products` | สินค้า |
| `/users` | ผู้ใช้ |

## แก้ปัญหาเบื้องต้น

| ปัญหา | วิธีแก้ |
|-------|---------|
| ไม่มี `node_modules` | รัน `npm install` |
| Supabase หรือ auth error | ตรวจสอบค่าใน `.env.local` และสถานะ Supabase project |
| Port 3000 ถูกใช้แล้ว | รัน `npm run dev -- -p 3001` หรือหยุด process ที่ใช้ port นั้น |
| Build ไม่สำเร็จ | รัน `npm run lint` แล้วแก้ตามที่รายงาน |

## อ่านเพิ่มเติม

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)

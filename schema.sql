-- 🐟 MomoFish - Kosti Branch - Supabase Schema
-- مطعم مومو فيش - فرع كوستي

-- 1. جدول الفروع
create table if not exists branches (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text not null,
  created_at timestamp default now()
);
insert into branches (name, city) values ('MomoFish - Kosti', 'Kosti') on conflict do nothing;

-- 2. جدول الأصناف - MomoFish Kosti Menu
create table if not exists items (
  id uuid primary key default gen_random_uuid(),
  branch_id uuid references branches(id),
  name text not null,
  price integer not null,
  cost integer not null,
  stock integer not null default 0,
  category text,
  created_at timestamp default now()
);

-- 3. جدول الطلبات
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  branch_id uuid references branches(id),
  invoice_no text not null,
  total integer not null,
  profit integer not null,
  payment_method text check (payment_method in ('cash','bankak')),
  items jsonb,
  created_at timestamp default now()
);

-- 4. جدول المشتريات
create table if not exists purchases (
  id uuid primary key default gen_random_uuid(),
  branch_id uuid references branches(id),
  item_name text not null,
  qty integer not null,
  cost integer not null,
  supplier text,
  created_at timestamp default now()
);

-- 5. بيانات أولية - منيو كوستي السوداني
insert into items (name, price, cost, stock, category) values
('بلطي نيلي - كوستي', 8000, 3000, 100, 'سمك'),
('عجل سوداني', 12000, 8000, 50, 'سمك'),
('قرقور كوستي', 15000, 9000, 30, 'سمك'),
('كبروس', 10000, 6000, 40, 'سمك'),
('بياض', 18000, 11000, 20, 'سمك'),
('أقاشي نيلي', 7000, 3500, 50, 'أقاشي'),
('ليمون كوستي 🍋', 1500, 400, 100, 'عصير'),
('كركدي كوستي 🥤', 1500, 300, 100, 'عصير'),
('تبلدي', 2000, 500, 80, 'عصير'),
('عرديب', 2000, 500, 80, 'عصير'),
('منقة كوستي 🥭', 2500, 800, 60, 'عصير'),
('جبنة كوستي ☕', 1000, 200, 200, 'مشروب')
on conflict do nothing;

-- 6. تفعيل RLS - أمان
alter table branches enable row level security;
alter table items enable row level security;
alter table orders enable row level security;
alter table purchases enable row level security;

-- سياسات مفتوحة للتجربة (غيرها بعدين)
create policy "Allow all for now" on branches for all using (true) with check (true);
create policy "Allow all for now" on items for all using (true) with check (true);
create policy "Allow all for now" on orders for all using (true) with check (true);
create policy "Allow all for now" on purchases for all using (true) with check (true);
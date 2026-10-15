
'use client'
import RoldeGuard from '../../components/RoleGuard'
export default function Admin(){ return (<RoleGuard allow={['admin']}><div style={{padding:20}}><h1>⚙️ إدارة MomoFish - Kosti</h1><p>هنا تدار الأصناف، الأسعار، والموظفون - فرع كوستي</p><p>استخدم ملف <b>public/index.html</b> للإضافة/الحذف السريع بدون نت.</p></div></RoleGuard>) }


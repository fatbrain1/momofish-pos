
'use client'
import RoleGuard from '../../components/RoleGuard'
export default function Reports(){ return (<RoleGuard allow={['admin','manager']}><div style={{padding:20}}><h1>📈 تقارير MomoFish - Kosti Branch</h1><p>تقارير المبيعات، الكاش، بنكك - فرع كوستي</p></div></RoleGuard>) }


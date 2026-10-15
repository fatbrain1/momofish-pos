'use client'
import { useEffect, useState } from 'react'
export default function RoleGuard({allow, children}){
 const [role,setRole]=useState(null)
 useEffect(()=>{ setRole(localStorage.getItem('momofish_role')||'cashier') },[])
 if(!role) return <div>تحميل...</div>
 if(!allow.includes(role)) return <div style={{padding:20}}>🚫 غير مصرح - فرع كوستي</div>
 return children
}

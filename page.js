
لوحه تحكم: momofish kosti

'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import RoleGuard from '../components/RoleGuard'
export default function Dashboard(){
 const [stats,setStats]=useState({sales:0,orders:0})
 useEffect(()=>{ async function load(){ const {data}=await supabase.from('orders').select('*'); if(data){ setStats({sales:data.reduce((a,b)=>a+b.total,0), orders:data.length}) } } load() },[])
 return (<RoleGuard allow={['admin','manager','cashier']}><div style={{padding:20}}><h1>🐟 MomoFish - Kosti Branch</h1><h3>مطعم مومو فيش - فرع كوستي</h3><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:20}}><div style={{padding:20,background:'#1e293b',color:'white',borderRadius:12}}>مبيعات اليوم<br><b>{stats.sales.toLocaleString()} ج.س</b></div><div style={{padding:20,background:'#1e293b',color:'white',borderRadius:12}}>طلبات<br><b>{stats.orders}</b></div></div></div></RoleGuard>)
}

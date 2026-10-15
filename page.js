
'use client'
import { useState } from 'react'
export default function Login(){
 const [email,setEmail]=useState(''); const [pass,setPass]=useState('');
 function login(){ if(email.includes('admin')) localStorage.setItem('momofish_role','admin'); else localStorage.setItem('momofish_role','cashier'); location.href='/' }
 return (<div style={{padding:40,maxWidth:400,margin:'50px auto',background:'#1e293b',borderRadius:16,color:'white'}}><h2>🐟 MomoFish - Kosti Login</h2><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="admin@momofish.com" style={{width:'100%',padding:12,margin:'8px 0'}}/><input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="123456" style={{width:'100%',padding:12,margin:'8px 0'}}/><button onClick={login} style={{width:'100%',padding:12,background:'#0ea5e9',border:0,color:'white',borderRadius:10}}>دخول - فرع كوستي</button><p style={{fontSize:12,marginTop:12}}>admin@momofish.com / 123456<br/>cashier@momofish.com / 123456</p></div>)
}
